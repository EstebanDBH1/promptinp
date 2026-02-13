import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { subscriptionID, userID, reason } = await req.json();

        if (!subscriptionID || !userID) throw new Error('Missing required data');

        // Get PayPal credentials
        const env = Deno.env.get('PAYPAL_ENV') || Deno.env.get('VITE_PAYPAL_ENV') || 'sandbox';
        const clientId = Deno.env.get('PAYPAL_CLIENT_ID') || Deno.env.get('VITE_PAYPAL_CLIENT_ID');
        const clientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET');

        if (!clientId || !clientSecret) {
            throw new Error('PayPal credentials missing');
        }

        const API_BASE = env === 'production'
            ? 'https://api.paypal.com'
            : 'https://api-m.sandbox.paypal.com';

        // Get PayPal access token
        const auth = btoa(`${clientId}:${clientSecret}`);
        const tokenResp = await fetch(`${API_BASE}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials'
        });

        if (!tokenResp.ok) throw new Error('PayPal auth failed');
        const { access_token } = await tokenResp.json();

        // Cancel subscription in PayPal
        const cancelResp = await fetch(`${API_BASE}/v1/billing/subscriptions/${subscriptionID}/cancel`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reason: reason || 'Customer requested cancellation'
            })
        });

        if (!cancelResp.ok) {
            const errorText = await cancelResp.text();
            throw new Error(`PayPal cancellation failed: ${errorText}`);
        }

        // Update database
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { error: dbError } = await supabase
            .from('subscriptions')
            .update({
                subscription_status: 'cancelled',
                cancel_at_period_end: true,
                updated_at: new Date().toISOString()
            })
            .eq('customer_id', userID)
            .eq('subscription_id', subscriptionID);

        if (dbError) throw new Error('Database update failed: ' + dbError.message);

        return new Response(JSON.stringify({
            success: true,
            message: 'Subscription cancelled successfully'
        }), {
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
