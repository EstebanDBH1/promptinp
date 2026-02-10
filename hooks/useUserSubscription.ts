import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useUserSubscription = () => {
    const { user } = useAuth();
    const [subscription, setSubscription] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setSubscription(null);
            setLoading(false);
            return;
        }

        const fetchSubscription = async () => {
            try {
                setLoading(true);

                // 1. Try to find subscription by customer_id directly (Supabase User ID)
                let { data, error } = await supabase
                    .from('subscriptions')
                    .select('*')
                    .eq('customer_id', user.id)
                    .in('subscription_status', ['active', 'trialing', 'past_due'])
                    .order('created_at', { ascending: false })
                    .limit(1)
                    .maybeSingle();

                // 2. If no direct match, try searching by email in the customers table
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
                            .in('subscription_status', ['active', 'trialing', 'past_due'])
                            .order('created_at', { ascending: false })
                            .limit(1)
                            .maybeSingle();

                        data = subData;
                    }
                }

                setSubscription(data);
            } catch (err) {
                console.error('❌ Critical error in useUserSubscription:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscription();
    }, [user]);

    return { subscription, loading };
};
