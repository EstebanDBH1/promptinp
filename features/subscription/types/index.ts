export interface Subscription {
    id?: string; // PK in Supabase
    customer_id: string;
    price_id: string; // Was plan_id
    subscription_status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'cancelled' | 'paused';
    subscription_id: string; // Provider subscription ID
    current_period_end: string;
    cancel_at_period_end: boolean;
    created_at: string;
    metadata?: Record<string, any>;
}

export interface PayPalSubscriptionDetails {
    subscriptionID: string;
    orderID?: string;
    facilitatorAccessToken: string;
}

export type SubscriptionStatus = 'active' | 'trialing' | 'past_due' | 'canceled' | 'paused' | 'none';
