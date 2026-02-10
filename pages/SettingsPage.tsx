import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/AuthContext';
import { useUserSubscription } from '../hooks/useUserSubscription';
import { PRICING_PLANS } from '../constants';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { User, CreditCard, Settings as SettingsIcon, ExternalLink, Shield } from 'lucide-react';

import { usePaddleCheckout } from '../hooks/usePaddleCheckout';

export const SettingsPage: React.FC = () => {
    const { user } = useAuth();
    const { subscription, loading } = useUserSubscription();
    const { openCustomerPortal } = usePaddleCheckout();

    const currentPlan = PRICING_PLANS.find(p => p.paddlePriceId === subscription?.price_id);

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-mono selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20">
                <Reveal>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                            <SettingsIcon className="w-5 h-5 text-zinc-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Ajustes de Cuenta</h1>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar navigation could go here, but we'll stick to a single view for now */}
                    <div className="md:col-span-1 border-r border-white/5 space-y-1">
                        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-900/50 text-white border border-zinc-800">
                            <User className="w-4 h-4" />
                            <span className="text-sm">Perfil</span>
                        </button>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        {/* Profile Section */}
                        <Reveal delay={100}>
                            <section className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Información Personal</h2>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-zinc-600">Email</label>
                                        <div className="text-sm text-white bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                            {user?.email}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* Subscription Section */}
                        <Reveal delay={200}>
                            <section className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Suscripción y Plan</h2>
                                    <Shield className="w-4 h-4 text-orange-500/50" />
                                </div>

                                {loading ? (
                                    <div className="animate-pulse flex space-x-4">
                                        <div className="flex-1 space-y-4 py-1">
                                            <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                                            <div className="h-4 bg-zinc-800 rounded"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-orange-500/10 rounded-xl">
                                                    <CreditCard className="w-6 h-6 text-orange-500" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-zinc-500 mb-0.5 font-bold uppercase">Plan Actual</div>
                                                    <div className="text-lg font-bold text-white">
                                                        {currentPlan ? `${currentPlan.name} — ${currentPlan.price}/${currentPlan.period}` : 'Hobby (Gratis)'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${subscription?.subscription_status === 'active'
                                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                                : 'bg-zinc-800 text-zinc-400'
                                                }`}>
                                                {subscription?.subscription_status || 'Sin suscripción'}
                                            </div>
                                        </div>

                                        {subscription && (
                                            <div className="space-y-6">
                                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                                    <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                                                        Gestiona tu suscripción, métodos de pago y facturación de forma segura a través de nuestro portal oficial de Paddle.
                                                    </p>

                                                    <div className="flex flex-col gap-3">
                                                        <Button
                                                            variant="primary"
                                                            fullWidth
                                                            className="justify-between group"
                                                            onClick={() => {
                                                                if (subscription.customer_token) {
                                                                    openCustomerPortal(subscription.subscription_id, subscription.customer_token);
                                                                } else if (subscription.update_url) {
                                                                    window.open(subscription.update_url, '_blank');
                                                                } else {
                                                                    alert('No se pudo abrir el portal automático. Por favor, usa el link de tu correo de confirmación de Paddle.');
                                                                }
                                                            }}
                                                        >
                                                            <span>Abrir Panel de Gestión</span>
                                                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                        </Button>

                                                        {subscription.cancel_url && (
                                                            <button
                                                                className="text-xs text-zinc-600 hover:text-red-500 transition-colors underline underline-offset-4 w-full text-center py-2"
                                                                onClick={() => window.open(subscription.cancel_url, '_blank')}
                                                            >
                                                                ¿Deseas cancelar tu suscripción? Hazlo aquí
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="pt-2 text-center">
                                                    <p className="text-[10px] text-zinc-600 italic">
                                                        * Los cambios en tu suscripción se reflejarán aquí en unos minutos.
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {!subscription && (
                                            <Button
                                                variant="primary"
                                                fullWidth
                                                onClick={() => window.location.href = '/#pricing'}
                                            >
                                                Ver planes premium
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </section>
                        </Reveal>
                    </div>
                </div>
            </PageTransition>

            <Footer />
        </div>
    );
};
