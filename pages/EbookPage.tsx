import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Check, Sparkles, BookOpen, Clock, Shield, Lock, ChevronDown, Zap, Target, Book, Layout, Megaphone, Terminal, FileText, RefreshCcw, Gift } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal } from "../components/Reveal";

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
            >
                <span className="text-sm md:text-base font-semibold text-white font-mono">{question}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                    {answer}
                </div>
            )}
        </div>
    );
};

export const EbookPage: React.FC = () => {
    const HOTMART_LINK = "#"; // Placeholder for Hotmart link

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-sans selection:bg-[#E91212]/30">
            <Navbar />

            <PageTransition className="flex-1 flex flex-col items-center overflow-hidden w-full">
                {/* Hero Section */}
                <section className="w-full max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 hover:border-[#E91212]/30 transition-colors cursor-default font-mono font-semibold">
                            <span className="text-xs md:text-sm text-[#E91212]">
                                🚀 El recurso #1 para dominar ChatGPT
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className="text-3xl md:text-[56px] font-bold text-white mb-6 leading-tight tracking-tight font-mono">
                            El Único eBook de Prompts de <span className="text-[#E91212]">ChatGPT</span> que Realmente Necesitas
                        </h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-sm md:text-[18px] leading-relaxed">
                            Desbloquea todo el potencial de ChatGPT con los mejores prompts. Ahorra tiempo, mejora tu productividad y lleva tus proyectos al siguiente nivel con nuestro eBook definitivo.
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                            <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8 text-left shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E91212]/5 blur-[60px] rounded-full pointer-events-none" />

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Acceso instantáneo al ebook completo",
                                        "Más de 200 prompts categorizados",
                                        "Actualizaciones gratuitas de por vida",
                                        "Garantía de satisfacción 30 días"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base font-semibold font-mono">
                                            <Check className="w-5 h-5 text-[#E91212]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-zinc-500 line-through text-lg font-mono">$97</span>
                                    <span className="text-4xl font-bold text-white font-mono">$10</span>
                                    <span className="bg-[#E91212]/20 text-[#E91212] text-xs font-bold px-2 py-1 rounded font-mono">-90%</span>
                                </div>

                                <p className="text-xs text-[#E91212] font-semibold font-mono mb-6 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> ⏰ Oferta por tiempo limitado - El precio subirá pronto
                                </p>

                                <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="red" size="lg" fullWidth className="h-14 text-base font-bold shadow-lg shadow-[#E91212]/20">
                                        COMPRAR AHORA - $10
                                    </Button>
                                </a>

                                <p className="text-center text-[10px] text-zinc-500 mt-4 flex items-center justify-center gap-2 font-mono">
                                    <Lock className="w-3 h-3" /> 🔒 Pago 100% seguro • Descarga instantánea
                                </p>
                            </div>

                            <div className="relative group">
                                {/* Placeholder image for Ebook cover */}
                                <div className="aspect-[3/4] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E91212]/20 to-transparent opacity-30 z-10" />
                                    <img
                                        src="/assets/products-image/ebook-image.jpeg"
                                        alt="eBook de Prompts de ChatGPT"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                        <div className="text-[#E91212] font-bold font-mono text-xl mb-1">PROMPT VIP</div>
                                        <div className="text-white font-bold font-mono text-2xl leading-tight">ChatGPT Mastery</div>
                                        <div className="text-zinc-400 text-[10px] font-mono mt-1 opacity-70">SISTEMA COMPLETO v2.0</div>
                                    </div>
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -top-4 -right-4 bg-[#E91212] text-white p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl rotate-12 font-mono font-bold">
                                    <span className="text-[10px] leading-none">SOLO</span>
                                    <span className="text-xl leading-none">$10</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* Content Section */}
                <section className="w-full py-24 bg-[#0a0a0a] border-y border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <Reveal>
                            <div className="text-center mb-16">
                                <h2 className="text-sm font-semibold text-[#E91212] uppercase tracking-[0.2em] mb-4 font-mono">eBook de Prompts de ChatGPT</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-white font-mono">¿Qué Encontrarás en el eBook?</h3>
                                <p className="text-zinc-500 mt-4 font-mono">Más de 100 prompts organizados en categorías para cualquier situación que enfrentes</p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "200+ Prompts Optimizados", desc: "Prompts probados para obtener resultados inmediatos y de alta calidad.", icon: Zap },
                                { title: "Productividad Total", desc: "Optimiza tu flujo de trabajo tanto en el ámbito personal como profesional.", icon: Target },
                                { title: "Contenido y Copywriting", desc: "Crea textos persuasivos y contenido creativo en segundos.", icon: FileText },
                                { title: "Análisis y Reportes", desc: "Prompts especializados para procesar datos y generar informes detallados.", icon: Layout },
                                { title: "Aprendizaje y Educación", desc: "Acelera tu formación con prompts diseñados para el estudio y la enseñanza.", icon: Book },
                                { title: "Programación y Desarrollo", desc: "Asistencia avanzada para escribir código, depurar y desarrollar software.", icon: Terminal },
                                { title: "Marketing y Ventas", desc: "Estrategias y copys enfocados en la conversión y el crecimiento.", icon: Megaphone },
                                { title: "Prompt Engineering", desc: "Domina técnicas avanzadas para comunicarte con la IA como un experto.", icon: Shield },
                                { title: "Implementación Real", desc: "Ejemplos prácticos de cómo aplicar cada prompt en casos de uso reales.", icon: Sparkles },
                                { title: "Plantillas Listas para Usar", desc: "Formularios prediseñados para simplemente copiar, pegar y ejecutar.", icon: Layout },
                                { title: "Guía de Buenas Prácticas", desc: "Aprende a evitar errores comunes y maximizar el potencial de la IA.", icon: Check },
                                { title: "Actualizaciones de por Vida", desc: "Acceso permanente a nuevos prompts y mejoras sin costo adicional.", icon: RefreshCcw }
                            ].map((item, idx) => (
                                <Reveal key={idx} delay={idx * 50}>
                                    <div className="p-6 rounded-2xl border border-zinc-800 bg-[#050505] hover:border-[#E91212]/50 transition-all group">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-[#E91212]/10 transition-colors">
                                            <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-[#E91212] transition-colors" />
                                        </div>
                                        <h4 className="text-white font-semibold font-mono mb-2">{item.title}</h4>
                                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why this ebook */}
                <section className="w-full py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">¿Por Qué Este eBook?</h2>
                                <p className="text-zinc-500 mt-4 font-mono">No es solo una lista de prompts. Es un sistema completo para dominar ChatGPT.</p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Prompts Probados", desc: "Cada prompt ha sido testeado múltiples veces para garantizar resultados consistentes." },
                                { title: "Estructura Perfecta", desc: "Aprende el framework secreto detrás de cada prompt que genera respuestas profesionales." },
                                { title: "Ahorra Tiempo", desc: "Deja de experimentar. Obtén resultados de calidad en segundos, no en horas." },
                                { title: "Actualizaciones Gratis", desc: "Acceso de por vida a todas las actualizaciones futuras sin costo adicional." }
                            ].map((item, idx) => (
                                <Reveal key={idx} delay={idx * 100}>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#E91212]/10 flex items-center justify-center shrink-0 border border-[#E91212]/20">
                                            <Check className="w-4 h-4 text-[#E91212]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold font-mono mb-2">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bonus Section */}
                <section className="w-full py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-white/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <Reveal>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">Bonos Exclusivos</h2>
                                <p className="text-[#E91212] mt-4 font-semibold font-mono">Además del eBook, recibirás estos bonos GRATIS valorados en $97</p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "BONUS 1: Mega Pack de Prompts", desc: "50 prompts adicionales exclusivos para nichos específicos.", val: "$47" },
                                { title: "BONUS 2: Guía de Prompt Engineering", desc: "Aprende a crear tus propios prompts perfectos desde cero.", val: "$27" },
                                { title: "BONUS 3: Cheat Sheet Descargable", desc: "Resumen rápido de los mejores prompts para tener siempre a mano.", val: "$23" }
                            ].map((bonus, idx) => (
                                <Reveal key={idx} delay={idx * 150}>
                                    <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6 relative flex flex-col items-center text-center group">
                                        <div className="bg-[#E91212] text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 font-mono uppercase tracking-widest">REGALO</div>
                                        <Gift className="w-10 h-10 text-[#E91212] mb-4" />
                                        <h4 className="text-white font-semibold font-mono mb-2 text-sm">{bonus.title}</h4>
                                        <p className="text-zinc-500 text-xs mb-4 flex-1">{bonus.desc}</p>
                                        <div className="text-zinc-400 font-mono text-sm border-t border-zinc-800 pt-3 w-full">Valor: <span className="text-white font-bold">{bonus.val}</span></div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={500}>
                            <div className="mt-16 p-8 bg-[#111] border border-[#E91212]/30 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E91212]/5 blur-[80px] rounded-full pointer-events-none" />
                                <h3 className="text-zinc-500 font-mono text-sm mb-2 uppercase tracking-widest">Valor Total</h3>
                                <div className="text-3xl text-zinc-600 line-through font-mono mb-2">$194</div>
                                <div className="text-6xl font-bold text-white font-mono mb-4 text-[#E91212]">$10</div>
                                <div className="text-xl font-bold text-white font-mono mb-8">¡Ahorra $184 HOY!</div>
                                <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="red" size="lg" className="px-12 h-16 text-lg font-bold shadow-2xl shadow-[#E91212]/40">
                                        SÍ, QUIERO EL EBOOK - $10
                                    </Button>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Guarantee Section */}
                <section className="w-full py-24 px-6">
                    <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800 p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-1/4 -translate-y-1/4">
                            <Shield className="w-64 h-64 text-[#E91212]" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="text-center md:text-left flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-mono mb-4">Garantía de Satisfacción 100%</h2>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                                    Si el eBook no supera tus expectativas, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones. Tu satisfacción es nuestra prioridad.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-6 shrink-0">
                                {[
                                    { val: "30", sub: "Días de garantía" },
                                    { val: "100%", sub: "Reembolso" },
                                    { val: "0", sub: "Preguntas" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-2xl font-bold text-[#E91212] font-mono">{stat.val}</div>
                                        <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-tighter leading-none mt-1">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="w-full py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
                    <div className="max-w-3xl mx-auto">
                        <Reveal>
                            <div className="text-center mb-12">
                                <h2 className="text-sm font-semibold text-[#E91212] uppercase tracking-[0.2em] mb-4 font-mono">Preguntas Frecuentes</h2>
                                <h3 className="text-3xl font-bold text-white font-mono">¿Tienes dudas? Aquí te respondemos las más comunes</h3>
                            </div>
                        </Reveal>

                        <div className="space-y-4">
                            <FAQ
                                question="¿Cómo recibo el eBook después de la compra?"
                                answer="La entrega es inmediata. Una vez completado el pago, recibirás un enlace de descarga en tu correo electrónico y acceso directo en la plataforma de Hotmart."
                            />
                            <FAQ
                                question="¿Funcionará con GPT-5 y las versiones que salgan después?"
                                answer="¡Absolutamente! El ebook enseña los fundamentos de la ingeniería de prompts que funcionan en cualquier modelo de lenguaje avanzado, presente o futuro."
                            />
                            <FAQ
                                question="¿Qué formato tiene el eBook?"
                                answer="El eBook está disponible en formato PDF de alta calidad, optimizado para lectura en computadoras, tablets y smartphones."
                            />
                            <FAQ
                                question="¿Recibiré actualizaciones?"
                                answer="Sí, tu compra incluye acceso gratuito de por vida a todas las futuras ediciones y expansiones del ebook que publiquemos."
                            />
                            <FAQ
                                question="¿Cómo funciona la garantía?"
                                answer="Es muy simple. Si en los primeros 30 días sientes que el material no es para ti, nos escribes y procesamos el reembolso total de tu dinero."
                            />
                            <FAQ
                                question="¿Necesito experiencia previa con ChatGPT?"
                                answer="No, el eBook está diseñado tanto para principiantes como para usuarios avanzados. Incluimos instrucciones claras de cómo usar cada prompt para obtener los mejores resultados."
                            />
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="w-full py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#110505]">
                    <Reveal>
                        <h2 className="text-3xl md:text-[40px] font-bold text-white mb-4 font-mono tracking-tight">Es Hora de Dominar ChatGPT</h2>
                        <p className="text-zinc-500 mb-10 max-w-xl mx-auto font-mono">
                            No dejes pasar esta oportunidad. Únete a miles de usuarios que ya están obteniendo resultados increíbles con nuestros prompts.
                        </p>

                        <div className="max-w-sm mx-auto bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-[#E91212]/10">
                            <div className="flex justify-center flex-col items-center mb-6">
                                <div className="text-zinc-600 line-through text-lg font-mono">$97</div>
                                <div className="text-5xl font-bold text-white font-mono">$10</div>
                                <div className="text-xs text-[#E91212] font-semibold font-mono mt-2">⚡ Precio especial de lanzamiento - 90% de descuento</div>
                            </div>

                            <ul className="text-left space-y-3 mb-8">
                                {[
                                    "eBook completo con +200 prompts",
                                    "BONUS 1: Mega Pack de Prompts ($47)",
                                    "BONUS 2: Guía de Prompt Engineering ($27)",
                                    "BONUS 3: Cheat Sheet Descargable ($23)",
                                    "Actualizaciones de por vida",
                                    "Garantía de 30 días"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-zinc-400">
                                        <Check className="w-4 h-4 text-[#E91212] shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer">
                                <Button variant="red" size="lg" fullWidth className="h-14 font-bold shadow-xl shadow-[#E91212]/30 uppercase tracking-tight">
                                    SÍ, QUIERO EL EBOOK - $10
                                </Button>
                            </a>
                            <p className="text-[10px] text-zinc-600 mt-4 font-mono">🔒 Pago 100% seguro con Hotmart • Descarga instantánea</p>
                        </div>
                    </Reveal>
                </section>
            </PageTransition>

            <Footer />
        </div>
    );
};
