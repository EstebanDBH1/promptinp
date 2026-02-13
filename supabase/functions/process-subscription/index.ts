import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PayPalSubscription {
    id: string;
    plan_id: string;
    status: string;
    create_time: string;
    links: { href: string; rel: string; method: string }[];
}

Deno.serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { subscriptionID, userID } = await req.json();

        if (!subscriptionID || !userID) throw new Error('Missing Data');

        // 1. Get Environmental Variables (Support both VITE_ prefixed and standard)
        const env = Deno.env.get('PAYPAL_ENV') || Deno.env.get('VITE_PAYPAL_ENV') || 'sandbox';
        const clientId = Deno.env.get('PAYPAL_CLIENT_ID') || Deno.env.get('VITE_PAYPAL_CLIENT_ID');
        const clientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET');

        if (!clientId || !clientSecret) {
            throw new Error('PayPal Credentials missing in Supabase Secrets');
        }

        const API_BASE = env === 'production'
            ? 'https://api.paypal.com'
            : 'https://api-m.sandbox.paypal.com';

        // 2. Get Access Token from PayPal
        const auth = btoa(`${clientId}:${clientSecret}`);
        const tokenResp = await fetch(`${API_BASE}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials'
        });

        if (!tokenResp.ok) throw new Error('PayPal Auth Failed: ' + await tokenResp.text());
        const { access_token } = await tokenResp.json();

        // 3. Get Subscription Details
        const subResp = await fetch(`${API_BASE}/v1/billing/subscriptions/${subscriptionID}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!subResp.ok) throw new Error('Get Sub Failed: ' + await subResp.text());
        const subData = await subResp.json();

        if (subData.status !== 'ACTIVE') throw new Error('Sub not active: ' + subData.status);

        // 4. Update Database
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { error: dbError } = await supabase.from('subscriptions').upsert({
            customer_id: userID,
            subscription_id: subData.id,
            subscription_status: subData.status.toLowerCase(),
            price_id: subData.plan_id,
            created_at: new Date().toISOString(),
            current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            cancel_at_period_end: false,
            metadata: { provider: 'paypal', details: subData }
        }, { onConflict: 'customer_id' });

        if (dbError) throw new Error('DB Error: ' + dbError.message);

        return new Response(JSON.stringify({ success: true, data: subData }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (e: any) {
        console.error(e);
        return new Response(JSON.stringify({ error: e.message }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});
