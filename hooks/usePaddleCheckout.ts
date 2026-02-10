import { getPaddle } from '../lib/paddle';
import { useAuth } from '../contexts/AuthContext';

export const usePaddleCheckout = () => {
    const { user } = useAuth();

    const openCheckout = async (priceId: string) => {
        const paddle = await getPaddle();
        if (!paddle) return;

        paddle.Checkout.open({
            settings: {
                displayMode: 'overlay',
                theme: 'dark',
                successUrl: `${window.location.origin}/success`,
            },
            customer: user?.email ? { email: user.email } : undefined,
            customData: {
                supabase_user_id: user?.id
            },
            items: [
                {
                    priceId: priceId,
                    quantity: 1
                }
            ]
        } as any);
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
