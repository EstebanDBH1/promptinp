import { supabase } from '@/lib/supabase';
import { PayPalSubscriptionDetails } from '../types';

export const activateSubscription = async (
    userId: string,
    details: PayPalSubscriptionDetails,
    planId: string
): Promise<{ success: boolean; error?: any }> => {
    try {
        console.log('Activating subscription via Edge Function...');

        // Call Supabase Edge Function to securely process the PayPal subscription
        // We explicitly pass the Anon Key in the Authorization header to ensure the Edge Function
        // allows the request (resolving 401 errors), as the function uses Service Role internally
        // and doesn't rely on the user's JWT for database permissions.
        const { data: result, error: rpcError } = await supabase.functions.invoke('process-subscription', {
            body: {
                userID: userId,
                subscriptionID: details.subscriptionID,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            }
        });

        if (rpcError) {
            console.error('Edge Function Invocation Error:', rpcError);
            return { success: false, error: rpcError };
        }

        if (!result || !result.success) {
            console.error('Subscription verification failed:', result?.error);
            return { success: false, error: result?.error || 'Verification failed' };
        }

        console.log('Subscription activated successfully via Edge Function');
        return { success: true };

    } catch (err) {
        console.error('Exception activating subscription:', err);
        return { success: false, error: err };
    }
};

export const cancelSubscription = async (subscriptionId: string, userId: string, reason?: string) => {
    try {
        console.log('Cancelling subscription via Edge Function...');

        const { data: result, error: rpcError } = await supabase.functions.invoke('cancel-subscription', {
            body: {
                subscriptionID: subscriptionId,
                userID: userId,
                reason: reason || 'User requested cancellation'
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            }
        });

        if (rpcError) {
            console.error('Edge Function Error:', rpcError);
            return { success: false, error: rpcError };
        }

        if (!result || !result.success) {
            console.error('Cancellation failed:', result?.error);
            return { success: false, error: result?.error || 'Cancellation failed' };
        }

        console.log('Subscription cancelled successfully');
        return { success: true };

    } catch (err) {
        console.error('Exception cancelling subscription:', err);
        return { success: false, error: err };
    }
}

