import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PayPalWebhookEvent {
    id: string;
    event_type: string;
    resource: {
        id: string; // Subscription ID or Sale ID
        billing_agreement_id?: string; // Subscription ID
        state?: string;
        custom?: string; // Metadata passed during creation
        create_time?: string;
    };
    summary: string;
}

Deno.serve(async (req: Request) => {
    // 1. Handle CORS Preflight (standard for Supabase Functions)
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const bodyText = await req.text();
        const event: PayPalWebhookEvent = JSON.parse(bodyText);

        console.log(`Received PayPal Webhook: ${event.event_type}`, event.summary);

        // 2. Initialize Supabase Admin Client using environment variables
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Missing Supabase credentials in environment');
        }

        const supabaseClient = createClient(supabaseUrl, supabaseKey);

        let subscriptionId: string | undefined;
        let newStatus: string | undefined;

        // 3. Handle specific events
        switch (event.event_type) {
            case 'BILLING.SUBSCRIPTION.ACTIVATED':
                subscriptionId = event.resource.id;
                newStatus = 'active';
                break;

            case 'BILLING.SUBSCRIPTION.CANCELLED':
                subscriptionId = event.resource.id;
                newStatus = 'canceled';
                break;

            case 'BILLING.SUBSCRIPTION.SUSPENDED':
                subscriptionId = event.resource.id;
                newStatus = 'paused';
                break;

            case 'BILLING.SUBSCRIPTION.EXPIRED':
                subscriptionId = event.resource.id;
                newStatus = 'past_due'; // Or canceled depending on logic
                break;

            case 'PAYMENT.SALE.COMPLETED':
                // For renewals. The resource is a sale object, which contains billing_agreement_id (subscription ID)
                subscriptionId = event.resource.billing_agreement_id;
                // We might want to extend the 'current_period_end' here if we had that logic
                newStatus = 'active';
                break;

            default:
                console.log(`Unhandled event type: ${event.event_type}`);
                return new Response(JSON.stringify({ received: true }), {
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                });
        }

        if (subscriptionId && newStatus) {
            console.log(`Updating subscription ${subscriptionId} to status: ${newStatus}`);

            // Update Supabase
            const { error } = await supabaseClient
                .from('subscriptions')
                .update({
                    subscription_status: newStatus,
                })
                .eq('subscription_id', subscriptionId);

            if (error) {
                console.error('Database update failed:', error);
                throw error;
            }
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error('Webhook Error:', error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
        );
    }
});
