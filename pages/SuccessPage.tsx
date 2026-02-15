import React, { useEffect, useState } from 'react';
// import { useUserSubscription } from '../hooks/useUserSubscription';
import { useSubscription } from '../features/subscription/hooks/useSubscription';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { useNavigate } from 'react-router-dom';

export const SuccessPage: React.FC = () => {
    const navigate = useNavigate();
    const { subscription, loading: subLoading } = useSubscription();
    const [syncing, setSyncing] = useState(true);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        if (!subLoading) {
            if (subscription) {
                setSyncing(false);
            } else if (retryCount < 10) {
                const timer = setTimeout(() => {
                    setRetryCount(prev => prev + 1);
                }, 2000);
                return () => clearTimeout(timer);
            } else {
                setSyncing(false);
            }
        }
    }, [subscription, subLoading, retryCount]);

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-sans selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
                <Reveal>
                    <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-orange-500/20 relative">
                        {syncing ? (
                            <div className="absolute inset-0 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <CheckCircle2 className="w-10 h-10 text-orange-500" />
                        )}
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                        {syncing ? 'Sincronizando...' : '¡Bienvenido al futuro!'}
                    </h1>
                </Reveal>

                <Reveal delay={200}>
                    <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-sm md:text-base leading-relaxed">
                        {syncing
                            ? 'Estamos validando tu pago con nuestro procesador. Esto tardará solo unos segundos...'
                            : 'Tu suscripción se ha procesado correctamente. Ahora tienes acceso total a la biblioteca de megaprompts.'}
                    </p>
                </Reveal>

                {!syncing && (
                    <Reveal delay={300}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="primary"
                                size="lg"
                                className="group"
                                onClick={() => navigate('/prompts')}
                            >
                                Acceder a la Bóveda
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
                )}

                {/* Decorative background element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            </PageTransition>

            <Footer />
        </div>
    );
};
