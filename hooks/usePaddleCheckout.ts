import { getPaddle } from '../lib/paddle';
import { useAuth } from '../contexts/AuthContext';

export const usePaddleCheckout = () => {
    const { user } = useAuth();

    const openCheckout = async (priceId: string) => {
        const paddle = await getPaddle();
        if (!paddle || !user) return;

        paddle.Checkout.open({
            items: [{ priceId, quantity: 1 }],
            customer: { email: user.email || '' },
            customData: { supabase_user_id: user.id },
            settings: {
                displayMode: 'overlay',
                theme: 'dark',
                locale: 'es',
                successUrl: `${window.location.origin}/success`,
            },
        });
    };

    const openCustomerPortal = async (subscriptionId: string, customerAuthToken: string) => {
        const paddle = await getPaddle();
        if (!paddle) return;

        paddle.Checkout.open({
            customer: {
                authToken: customerAuthToken
            },
            settings: {
                displayMode: 'overlay',
                theme: 'dark',
                locale: 'es',
                subscriptionId: subscriptionId,
            }
        } as any);
    };

    return { openCheckout, openCustomerPortal };
};
