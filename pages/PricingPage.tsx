import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { PRICING_PLANS } from "../constants";
import { Check } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../features/subscription/hooks/useSubscription";
import { PayPalSubscriptionButton } from "../features/subscription/components/PayPalSubscriptionButton";

export const PricingPage: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { subscription } = useSubscription();

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-sans selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 flex flex-col items-center w-full">
                {/* Pricing Section */}
                <section className="w-full py-24 px-6 relative overflow-hidden">
                    {/* Ambient Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-6xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-16">
                                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                                    Planes de Acceso
                                </h1>
                                <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto">
                                    Desbloquea el 100% del potencial de tu IA con nuestra biblioteca de megaprompts profesionales.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:w-[400px] mx-auto">
                            {PRICING_PLANS.map((plan, idx) => {
                                const isCurrentPlan =
                                    subscription &&
                                    subscription.price_id === plan.paypalPlanId &&
                                    (subscription.subscription_status === "active" ||
                                        subscription.subscription_status === "trialing");

                                return (
                                    <Reveal key={plan.id}>
                                        <div
                                            className={`
                        relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full hover-lift
                        ${plan.isPopular
                                                    ? "bg-[#18181b] border-orange-500/50 shadow-2xl shadow-orange-900/10"
                                                    : "bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700"
                                                }
                        ${isCurrentPlan ? "ring-2 ring-orange-500" : ""}
                      `}
                                        >
                                            {plan.isPopular && (
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                                                    {isCurrentPlan ? "Tu suscripción" : "recomendado"}
                                                </div>

                                            )}

                                            <div className="mb-8">
                                                <h3 className="text-lg font-semibold text-white mb-2">
                                                    {plan.name}
                                                </h3>
                                                <div className="flex items-baseline gap-1.5 mb-2">
                                                    <span className="text-4xl font-semibold text-white tracking-tight">
                                                        {plan.price}
                                                    </span>
                                                    <span className="text-sm font-medium text-zinc-500">
                                                        /{plan.period}
                                                    </span>
                                                </div>
                                                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                                                    {plan.description}
                                                </p>
                                            </div>

                                            <div className="flex-1 mb-8">
                                                <ul className="space-y-4">
                                                    {plan.features.map((feature, featureIdx) => (
                                                        <li
                                                            key={featureIdx}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <div
                                                                className={`mt-1 p-0.5 rounded-full ${plan.isPopular ? "bg-orange-500/20 text-orange-500" : "bg-zinc-800 text-zinc-400"}`}
                                                            >
                                                                <Check className="w-3 h-3" />
                                                            </div>
                                                            <span className="text-xs md:text-sm text-zinc-300">
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {isCurrentPlan ? (
                                                <Button
                                                    variant="outline"
                                                    fullWidth
                                                    size="lg"
                                                    disabled
                                                >
                                                    plan actual
                                                </Button>
                                            ) : !user ? (
                                                <Button
                                                    variant={plan.variant}
                                                    fullWidth
                                                    size="lg"
                                                    onClick={() => navigate(`/login?redirect=/pricing`)}
                                                >
                                                    {plan.buttonText}
                                                </Button>
                                            ) : plan.paypalPlanId ? (
                                                <div className="w-full">
                                                    <PayPalSubscriptionButton
                                                        planId={plan.paypalPlanId}
                                                        onSuccess={() => navigate('/success')}
                                                    />
                                                </div>
                                            ) : (
                                                <Button
                                                    variant={plan.variant}
                                                    fullWidth
                                                    size="lg"
                                                    disabled
                                                >
                                                    No disponible
                                                </Button>
                                            )}
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>

                        <div className="mt-20 text-center">
                            <p className="text-xs text-zinc-600 italic">
                                ¿Necesitas un plan para empresas? <button className="text-orange-500 hover:underline">Contáctanos</button>
                            </p>
                        </div>
                    </div>
                </section>
            </PageTransition>

            <Footer />
        </div>
    );
};
