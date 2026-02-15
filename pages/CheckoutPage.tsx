import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PayPalSubscriptionButton } from '../features/subscription/components/PayPalSubscriptionButton';
import { PRICING_PLANS } from '../constants';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const CheckoutPage: React.FC = () => {
    const { planId } = useParams<{ planId: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();

    // Find plan by ID or PayPal Plan ID
    const plan = PRICING_PLANS.find(p => p.id === planId || p.paypalPlanId === planId);

    useEffect(() => {
        if (!plan) {
            navigate('/');
        }
        if (!user && plan) {
            navigate('/login?redirect=' + encodeURIComponent(`/checkout/${planId}`));
        }
    }, [plan, navigate, user, planId]);

    if (!plan || !user) return null;

    return (
        <div className="min-h-screen bg-[#050505] font-sans selection:bg-orange-500/30 flex flex-col">
            <Navbar />

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Order Summary */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">Resumen del Pedido</h1>
                            <p className="text-zinc-400">Estás a un paso de desbloquear el potencial total de la IA.</p>
                        </div>

                        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-medium text-white">{plan.name}</h3>
                                    <p className="text-zinc-500 text-sm mt-1">{plan.description}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-medium text-white">{plan.price}</div>
                                    <div className="text-zinc-500 text-sm">/{plan.period}</div>
                                </div>
                            </div>

                            <div className="border-t border-zinc-800 my-6"></div>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                        <Check className="w-5 h-5 text-orange-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t border-zinc-800 my-6"></div>

                            <div className="flex items-center gap-3 text-xs text-zinc-500 bg-zinc-900/50 p-4 rounded-lg">
                                <Zap className="w-4 h-4 text-yellow-500" />
                                <span>Acceso inmediato después del pago. Cancelación flexible.</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-600 text-xs justify-center">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Pagos seguros y encriptados vía PayPal</span>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="lg:pl-8">
                        <div className="bg-white rounded-3xl p-1 shadow-2xl shadow-orange-900/10 overflow-hidden">
                            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-zinc-100">
                                <h2 className="text-lg font-medium text-zinc-900 mb-6 flex items-center gap-2">
                                    Método de Pago
                                    <span className="text-xs font-normal text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">Secured</span>
                                </h2>
                                <PayPalSubscriptionButton
                                    planId={plan.paypalPlanId!}
                                    onSuccess={() => navigate('/success')}
                                    onError={(err) => console.error(err)}
                                />
                            </div>
                        </div>
                        <p className="text-center text-zinc-500 text-xs mt-6 px-8 max-w-sm mx-auto">
                            Tarjeta de crédito/débito o cuenta PayPal. La suscripción se renovará automáticamente al precio de {plan.price}. Cancela cuando quieras.
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};
