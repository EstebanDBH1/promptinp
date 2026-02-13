import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { Subscription, PayPalSubscriptionDetails } from '../types';
import { activateSubscription as serviceActivateSubscription, cancelSubscription as serviceCancelSubscription } from '@/features/subscription/services/subscriptionService';

export const useSubscription = () => {
    const { user } = useAuth();
    const [subscription, setSubscription] = useState<Subscription | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchSubscription = async () => {
        try {
            if (!user) {
                setSubscription(null);
                setLoading(false);
                return;
            }

            setLoading(true);

            // 1. Try by customer_id (Supabase User ID)
            // Include 'cancelled' status because user should have access until period end
            let { data, error } = await supabase
                .from('subscriptions')
                .select('*')
                .eq('customer_id', user.id)
                .in('subscription_status', ['active', 'trialing', 'past_due', 'cancelled'])
                .order('created_at', { ascending: false })
                .limit(1)
                .maybeSingle();

            // 2. Fallback to email via customers table if not found
            if (!data && user.email) {
                const { data: customerData } = await supabase
                    .from('customers')
                    .select('customer_id')
                    .eq('email', user.email);

                if (customerData && customerData.length > 0) {
                    const ids = customerData.map(c => c.customer_id);
                    const { data: subData } = await supabase
                        .from('subscriptions')
                        .select('*')
                        .in('customer_id', ids)
                        .in('subscription_status', ['active', 'trialing', 'past_due', 'cancelled'])
                        .order('created_at', { ascending: false })
                        .limit(1)
                        .maybeSingle();

                    data = subData;
                }
            }

            // 3. Verify if cancelled subscription still has access
            if (data && data.subscription_status === 'cancelled') {
                // Check if current_period_end is in the future
                const periodEnd = new Date(data.current_period_end);
                const now = new Date();

                if (periodEnd < now) {
                    // Period has ended, no access
                    data = null;
                }
            }

            setSubscription(data as Subscription);
        } catch (err) {
            console.error('Error fetching subscription:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubscription();
    }, [user]);

    const activate = async (details: PayPalSubscriptionDetails, planId: string) => {
        if (!user) return { success: false, error: 'No user' };
        const result = await serviceActivateSubscription(user.id, details, planId);
        if (result.success) {
            await fetchSubscription(); // Refresh state
        }
        return result;
    };

    const cancel = async (reason?: string) => {
        if (!user || !subscription) return { success: false, error: 'No subscription to cancel' };
        const result = await serviceCancelSubscription(subscription.subscription_id, user.id, reason);
        if (result.success) {
            await fetchSubscription(); // Refresh state
        }
        return result;
    };

    return { subscription, loading, activate, cancel, refresh: fetchSubscription };
};

