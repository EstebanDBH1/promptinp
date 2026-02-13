import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSubscription } from '../hooks/useSubscription';
import { useState } from 'react';

interface PayPalSubscriptionButtonProps {
    planId: string;
    onSuccess?: () => void;
    onError?: (err: unknown) => void;
}

export const PayPalSubscriptionButton: React.FC<PayPalSubscriptionButtonProps> = ({ planId, onSuccess, onError }) => {
    const { activate } = useSubscription();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleApprove = async (data: any) => {
        setLoading(true);
        try {
            const details = {
                subscriptionID: data.subscriptionID,
                orderID: data.orderID,
                facilitatorAccessToken: data.facilitatorAccessToken
            };

            console.log('Subscription approved:', details);
            const result = await activate(details, planId);

            if (result.success) {
                if (onSuccess) onSuccess();
            } else {
                throw new Error(result.error?.message || 'Failed to activate subscription locally.');
            }
        } catch (err: any) {
            console.error('PayPal Approve Error:', err);
            setErrorMessage(err.message || 'Subscription failed');
            if (onError) onError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {errorMessage && (
                <div className="p-3 bg-red-900/20 text-red-400 rounded-lg text-xs border border-red-800 mb-4">
                    {errorMessage}
                </div>
            )}

            <PayPalButtons
                style={{
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'rect',
                    label: 'subscribe',
                    height: 48
                }}
                disabled={loading}
                createSubscription={(data, actions) => {
                    return actions.subscription.create({
                        plan_id: planId
                    });
                }}
                onApprove={handleApprove}
                onError={(err: any) => {
                    console.error('PayPal Button Error:', err);
                    setErrorMessage('Ocurrió un error con PayPal. Intenta de nuevo.');
                    if (onError) onError(err);
                }}
            />
        </div>
    );
};
