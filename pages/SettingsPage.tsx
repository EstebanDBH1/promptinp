import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/AuthContext';
// import { useUserSubscription } from '../hooks/useUserSubscription';
import { PRICING_PLANS } from '../constants';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { User, CreditCard, Settings as SettingsIcon, ExternalLink, Shield } from 'lucide-react';

// import { usePaddleCheckout } from '../hooks/usePaddleCheckout';
import { useSubscription } from '../features/subscription/hooks/useSubscription';

export const SettingsPage: React.FC = () => {
    const { user } = useAuth();
    const { subscription, loading, cancel } = useSubscription();
    // const { openCustomerPortal } = usePaddleCheckout();

    const currentPlan = PRICING_PLANS.find(p => p.paypalPlanId === subscription?.price_id);

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-sans selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20">
                <Reveal>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                            <SettingsIcon className="w-5 h-5 text-zinc-400" />
                        </div>
                        <h1 className="text-2xl font-semibold text-white tracking-tight font-mono">Ajustes de cuenta</h1>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar navigation could go here, but we'll stick to a single view for now */}
                    <div className="md:col-span-1 border-r border-white/5 space-y-1">
                        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-900/50 text-white border border-zinc-800 font-mono font-semibold tracking-wide text-xs">
                            <User className="w-4 h-4" />
                            <span className="text-sm">Perfil</span>
                        </button>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        {/* Profile Section */}
                        <Reveal delay={100}>
                            <section className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <h2 className="text-sm font-semibold text-zinc-500 tracking-wide mb-6 font-mono">Información personal</h2>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-zinc-600">Email</label>
                                        <div className="text-sm text-white bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                            {user?.email}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-zinc-600 uppercase tracking-tighter opacity-50 font-mono">Debug: User ID</label>
                                        <div className="text-[10px] text-zinc-500 font-mono">
                                            {user?.id}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* Subscription Section */}
                        <Reveal delay={200}>
                            <section className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-sm font-semibold text-zinc-500 tracking-wide font-mono">Suscripción y plan</h2>
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
                                                    <div className="text-xs text-zinc-500 mb-0.5 font-semibold font-mono tracking-wide">Plan actual</div>
                                                    <div className="text-lg font-semibold text-white font-mono">
                                                        {currentPlan ? `${currentPlan.name}` : 'Hobby (Gratis)'}
                                                    </div>

                                                </div>
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-[10px] font-semibold font-mono tracking-tight ${subscription?.subscription_status === 'active'
                                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                                : subscription?.subscription_status === 'cancelled'
                                                    ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                    : 'bg-zinc-800 text-zinc-400'
                                                }`}>
                                                {subscription?.subscription_status || 'Sin suscripción'}
                                            </div>
                                        </div>

                                        {subscription && (
                                            <div className="space-y-6">
                                                {/* Subscription Dates */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/30">
                                                        <div className="text-xs text-zinc-500 mb-1">Inicio</div>
                                                        <div className="text-sm font-mono text-white">
                                                            {new Date(subscription.created_at).toLocaleDateString('es-ES', {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/30">
                                                        <div className="text-xs text-zinc-500 mb-1">
                                                            {subscription.cancel_at_period_end ? 'Termina' : 'Próxima renovación'}
                                                        </div>
                                                        <div className="text-sm font-mono text-white">
                                                            {subscription.current_period_end
                                                                ? new Date(subscription.current_period_end).toLocaleDateString('es-ES', {
                                                                    year: 'numeric',
                                                                    month: 'short',
                                                                    day: 'numeric'
                                                                })
                                                                : 'N/A'
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                {subscription.cancel_at_period_end && (
                                                    <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                                                        <p className="text-xs text-yellow-500/80">
                                                            ⚠️ Tu suscripción se cancelará al final del período actual. Tendrás acceso hasta {subscription.current_period_end
                                                                ? new Date(subscription.current_period_end).toLocaleDateString('es-ES')
                                                                : 'la fecha de renovación'
                                                            }.
                                                        </p>
                                                    </div>
                                                )}

                                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                                    <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                                                        {subscription.cancel_at_period_end
                                                            ? 'Tu suscripción ya está programada para cancelarse.'
                                                            : 'Puedes cancelar tu suscripción en cualquier momento. Mantendrás el acceso hasta el final del período de facturación actual.'
                                                        }
                                                    </p>
                                                    <div className="flex flex-col gap-3">
                                                        {!subscription.cancel_at_period_end && (
                                                            <Button
                                                                variant="outline"
                                                                fullWidth
                                                                onClick={async () => {
                                                                    if (confirm('¿Estás seguro de que quieres cancelar tu suscripción? Mantendrás acceso hasta el final del período actual.')) {
                                                                        const result = await cancel();
                                                                        if (result.success) {
                                                                            alert('Suscripción cancelada exitosamente.');
                                                                            window.location.reload();
                                                                        } else {
                                                                            alert('Error al cancelar: ' + (result.error || 'Desconocido'));
                                                                        }
                                                                    }
                                                                }}
                                                            >
                                                                Cancelar Suscripción
                                                            </Button>
                                                        )}
                                                        <Button
                                                            variant="primary"
                                                            fullWidth
                                                            onClick={() => window.open('https://www.paypal.com/myaccount/autopay', '_blank')}
                                                        >
                                                            Gestionar en PayPal
                                                        </Button>
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
