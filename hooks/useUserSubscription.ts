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
            const { data, error } = await supabase
                .from('subscriptions')
                .select('*')
                .eq('customer_id', user.id)
                .in('subscription_status', ['active', 'trialing'])
                .order('created_at', { ascending: false })
                .limit(1)
                .maybeSingle();

            if (error) {
                console.error('Error fetching subscription:', error);
            } else {
                setSubscription(data);
            }
            setLoading(false);
        };

        fetchSubscription();
    }, [user]);

    return { subscription, loading };
};
