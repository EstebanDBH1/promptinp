import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { PromptCard } from '../components/PromptCard';
import { PROMPTS, FEATURES, TASKS, STEPS, PRICING_PLANS } from '../constants';
import { ArrowRight, Bot, Sparkles, Check } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { usePaddleCheckout } from '../hooks/usePaddleCheckout';
import { useUserSubscription } from '../hooks/useUserSubscription';

const Stat: React.FC<{ value: string; label: string; color?: string }> = ({ value, label, color = 'text-orange-500' }) => (
    <div className="text-center">
        <div className={`text-2xl md:text-3xl font-bold mb-1 ${color}`}>{value}</div>
        <div className="text-xs md:text-sm text-zinc-500 tracking-wider">{label}</div>
    </div>
);

export const HomePage: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { openCheckout } = usePaddleCheckout();
    const { subscription } = useUserSubscription();

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-mono selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 flex flex-col items-center overflow-hidden w-full">

                {/* Hero Section */}
                <section className="w-full max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 hover:border-zinc-700 transition-colors cursor-default">
                            <span className="text-xs md:text-sm text-zinc-300">la capa de lenguaje para IA</span>
                            <Sparkles className="w-3 h-3 text-purple-400" />
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="text-xs md:text-sm text-zinc-600 mb-8 font-medium">
                            los modelos alucinan • los prompts definen la realidad
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="flex justify-center gap-8 md:gap-16 mb-12 flex-wrap">
                            <Stat value="2.1M+" label="prompts copiados" />
                            <Stat value="15k+" label="ingenieros activos" />
                            <Stat value="99.9%" label="tasa de éxito" />
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                            tu modelo necesita <span className="text-orange-500">mejores</span><br />
                            <span className="text-orange-500">palabras</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={400}>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                            Deja de luchar con resultados mediocres. Encuentra prompts de ingeniería profesional, probados y optimizados para producción.
                        </p>
                    </Reveal>

                    <Reveal delay={500}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">explorar biblioteca →</Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">vender mis prompts</Button>
                        </div>
                    </Reveal>
                </section>

                {/* Prompts Slider Section */}
                <section className="w-full py-16">
                    <Reveal>
                        <div className="w-full max-w-[1400px] mx-auto">
                            <div className="px-6 md:px-8 flex justify-between items-end mb-8 max-w-6xl mx-auto">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">prompts destacados</h2>
                                    <p className="text-xs md:text-sm text-zinc-500">curados por expertos en LLMs</p>
                                </div>
                                <a href="#/prompts" className="text-orange-500 text-xs md:text-sm font-bold hover:text-orange-400 flex items-center gap-1 group">
                                    ver todo <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>

                            {/* Horizontal Scroll Container */}
                            <div className="w-full overflow-x-auto no-scrollbar pb-8 px-6 md:px-8">
                                <div className="flex gap-4 w-max mx-auto md:mx-0">
                                    {/* Spacer for centering on large screens if needed, otherwise flows left */}
                                    <div className="w-0 md:w-[calc(50vw-42rem)] hidden xl:block"></div>

                                    {PROMPTS.map((prompt, idx) => (
                                        <div key={prompt.id} className="w-[300px] snap-center" style={{ animationDelay: `${idx * 100}ms` }}>
                                            <PromptCard prompt={prompt} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mt-2 text-xs md:text-sm text-zinc-600 font-mono tracking-widest opacity-60">
                                pasa el cursor para pausar
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* Developer/Agent Section */}
                <section className="w-full py-20 px-6">
                    <Reveal>
                        <div className="max-w-4xl mx-auto bg-[#0f0f11] border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">para desarrolladores</h3>
                                    </div>
                                    <p className="text-xs md:text-sm text-zinc-400 mb-8 leading-relaxed">
                                        API RESTful para inyectar prompts dinámicos. Integración nativa con LangChain y Vercel AI SDK. Deja que tu app use los mejores prompts sin hardcodear strings.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="primary" size="md">documentación API</Button>
                                        <Button variant="outline" size="md">integración MCP</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* Features Section */}
                <section className="w-full py-16 px-6">
                    <Reveal>
                        <h2 className="text-center text-xl font-bold mb-12">¿por qué usar promptbank?</h2>
                    </Reveal>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {FEATURES.map((feature, idx) => (
                            <Reveal key={feature.id} delay={idx * 150}>
                                <div className="bg-[#111] border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors group h-full hover-lift">
                                    <div className="mb-4 p-2 bg-zinc-900 w-fit rounded-lg group-hover:bg-zinc-800 transition-colors">
                                        <feature.icon className="w-5 h-5 text-green-400" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2 text-sm md:text-base">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="w-full py-24 px-6 relative overflow-hidden">
                    {/* Ambient Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-6xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-bold text-white mb-3">planes transparentes</h2>
                                <p className="text-xs md:text-sm text-zinc-500">invierte en mejores resultados, no en más tokens</p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {PRICING_PLANS.map((plan, idx) => {
                                const isCurrentPlan = subscription?.price_id === plan.paddlePriceId;

                                const handlePlanClick = () => {
                                    if (isCurrentPlan) return;
                                    if (!user) {
                                        navigate('/login');
                                        return;
                                    }
                                    if (plan.paddlePriceId) {
                                        openCheckout(plan.paddlePriceId);
                                    }
                                };

                                return (
                                    <Reveal key={plan.id} delay={idx * 150}>
                                        <div
                                            className={`
                                            relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full hover-lift
                                            ${plan.isPopular
                                                    ? 'bg-[#18181b] border-orange-500/50 shadow-2xl shadow-orange-900/10 md:-translate-y-4'
                                                    : 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700'
                                                }
                                            ${isCurrentPlan ? 'ring-2 ring-orange-500' : ''}
                                        `}
                                        >
                                            {plan.isPopular && (
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                    {isCurrentPlan ? 'Tu suscripción' : 'recomendado'}
                                                </div>
                                            )}

                                            <div className="mb-8">
                                                <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                                                <div className="flex items-baseline gap-1.5 mb-2">
                                                    <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                                                    <span className="text-sm font-medium text-zinc-500">/{plan.period}</span>
                                                </div>
                                                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed min-h-[40px]">{plan.description}</p>
                                            </div>

                                            <div className="flex-1 mb-8">
                                                <ul className="space-y-4">
                                                    {plan.features.map((feature, featureIdx) => (
                                                        <li key={featureIdx} className="flex items-start gap-3">
                                                            <div className={`mt-1 p-0.5 rounded-full ${plan.isPopular ? 'bg-orange-500/20 text-orange-500' : 'bg-zinc-800 text-zinc-400'}`}>
                                                                <Check className="w-3 h-3" />
                                                            </div>
                                                            <span className="text-xs md:text-sm text-zinc-300">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Button
                                                variant={isCurrentPlan ? 'outline' : plan.variant}
                                                fullWidth
                                                size="lg"
                                                onClick={handlePlanClick}
                                                disabled={isCurrentPlan}
                                            >
                                                {isCurrentPlan ? 'plan actual' : plan.buttonText}
                                            </Button>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="w-full py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
                    <Reveal>
                        <div className="text-center mb-10">
                            <h2 className="text-xl font-bold text-white mb-2 font-mono">casos de uso reales</h2>
                            <p className="text-xs md:text-sm text-zinc-500">optimiza cualquier tarea cognitiva</p>
                        </div>
                    </Reveal>

                    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
                        {TASKS.map((task, idx) => (
                            <Reveal key={task.id} delay={idx * 30}>
                                <div className="flex items-center gap-2 px-3.5 py-2 bg-[#161618] border border-zinc-800 rounded-lg text-xs md:text-sm text-zinc-400 hover:border-zinc-600 hover:text-white transition-all cursor-default shadow-sm hover-lift">
                                    <span className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">{task.icon}</span>
                                    <span>{task.label}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* How it Works */}
                <section className="w-full py-20 px-6">
                    <Reveal>
                        <div className="text-center mb-12">
                            <h2 className="text-xl font-bold text-white font-mono">cómo funciona</h2>
                        </div>
                    </Reveal>

                    <div className="max-w-2xl mx-auto space-y-4">
                        {STEPS.map((step, idx) => (
                            <Reveal key={step.id} delay={idx * 150}>
                                <div className="bg-[#0f0f11] border border-zinc-800 p-5 rounded-xl flex items-center gap-5 group hover:border-zinc-700 transition-all cursor-default hover:bg-[#141416]">
                                    <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center font-bold text-white text-xs md:text-sm shrink-0 shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform">
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{step.title}</h3>
                                        <p className="text-xs md:text-sm text-zinc-500">{step.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="w-full py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
                    <Reveal>
                        <h2 className="text-2xl font-bold text-white mb-3">domina la ingeniería de prompts</h2>
                        <p className="text-xs md:text-sm text-zinc-500 mb-8 max-w-md mx-auto">Únete a miles de ingenieros y creadores que están construyendo el futuro del software.</p>
                        <div className="flex justify-center gap-4">
                            <Button variant="primary" size="lg">empezar ahora →</Button>
                        </div>
                    </Reveal>
                </section>

            </PageTransition>

            <Footer />
        </div>
    );
};