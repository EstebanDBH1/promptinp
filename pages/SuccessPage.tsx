import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { useNavigate } from 'react-router-dom';

export const SuccessPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-mono selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
                <Reveal>
                    <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-orange-500/20">
                        <CheckCircle2 className="w-10 h-10 text-orange-500" />
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        ¡Bienvenido al <span className="text-orange-500">futuro</span>!
                    </h1>
                </Reveal>

                <Reveal delay={200}>
                    <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-sm md:text-base leading-relaxed">
                        Tu suscripción se ha procesado correctamente. Ahora tienes acceso total a la biblioteca de prompts de ingeniería profesional.
                    </p>
                </Reveal>

                <Reveal delay={300}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="primary"
                            size="lg"
                            className="group"
                            onClick={() => navigate('/prompts')}
                        >
                            Ir a la biblioteca
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate('/')}
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Inicio
                        </Button>
                    </div>
                </Reveal>

                {/* Decorative background element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            </PageTransition>

            <Footer />
        </div>
    );
};
