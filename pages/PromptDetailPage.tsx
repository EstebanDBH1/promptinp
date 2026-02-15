import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { PROMPTS } from '../constants';
import { PromptProfile } from '../types';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Copy, Check, Lock, Sparkles, User, Tag } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
// import { useUserSubscription } from '../hooks/useUserSubscription';
import { useSubscription } from '../features/subscription/hooks/useSubscription';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export const PromptDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { subscription, loading: subLoading } = useSubscription();

    const [prompt, setPrompt] = useState<PromptProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const getPrompt = async () => {
            setLoading(true);
            try {
                // 1. Try Supabase first
                const { data, error } = await supabase
                    .from('prompts')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (data) {
                    setPrompt({
                        id: data.id,
                        title: data.title,
                        description: data.description || data.content.substring(0, 150) + '...',
                        content: data.content,
                        category: data.category,
                        author: '@system',
                        price: data.is_premium ? 'Premium' : 'Free',
                        tags: [data.category],
                        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.id}`,
                        modelIcon: data.category?.toLowerCase() === 'imagen' ? '🎨' : '🤖',
                        imageUrl: data.image_url
                    });
                    setLoading(false);
                    return;
                }
            } catch (err) {
                // Ignore DB error, will fallback below
            }

            // 2. Fallback to constants
            const mockPrompt = PROMPTS.find(p => p.id === id);
            if (mockPrompt) {
                setPrompt(mockPrompt);
            }

            setLoading(false);
        };

        if (id) getPrompt();
    }, [id]);

    const handleCopy = async () => {
        if (!prompt) return;
        try {
            await navigator.clipboard.writeText(prompt.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (loading || subLoading) {
        return (
            <div className="min-h-screen bg-[#050505] flex flex-col font-sans">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!prompt) {
        return (
            <div className="min-h-screen bg-[#050505] flex flex-col font-sans text-zinc-300">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center px-6">
                    <h1 className="text-2xl font-medium mb-4 italic text-zinc-500">Prompt no encontrado</h1>
                    <Button variant="primary" onClick={() => navigate('/prompts')}>Volver a la biblioteca</Button>
                </div>
                <Footer />
            </div>
        );
    }

    const isPremium = prompt.price === 'Premium';
    // Access logic: Free prompts are open to everyone. Premium require an active subscription.
    const hasAccess = !isPremium || !!subscription;

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-sans selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
                <Reveal>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 text-sm group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        volver
                    </button>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <Reveal delay={100}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-3xl shadow-2xl">
                                    {prompt.modelIcon}
                                </div>
                                <div>
                                    <div className={`text-[10px] font-semibold px-2 py-0.5 rounded border tracking-wide inline-block mb-1 ${isPremium ? 'text-orange-500 border-orange-500/20 bg-orange-500/5' : 'text-zinc-500 border-zinc-800 bg-zinc-900'}`}>
                                        {prompt.price}
                                    </div>
                                    <h1 className="text-xl font-semibold text-white leading-tight">{prompt.title}</h1>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="space-y-4">
                                <div className="p-4 bg-[#0a0a0a] rounded-xl border border-zinc-800">
                                    <div className="text-[10px] text-zinc-600 tracking-wide font-semibold font-mono mb-1">Autor</div>
                                    <div className="flex items-center gap-2">
                                        <img src={prompt.avatarUrl} className="w-5 h-5 rounded-full border border-zinc-800" alt="avatar" />
                                        <span className="text-xs text-zinc-400 font-semibold font-mono">{prompt.author}</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-[#0a0a0a] rounded-xl border border-zinc-800">
                                    <div className="text-[10px] text-zinc-600 tracking-wide font-semibold font-mono mb-1">Categoría</div>
                                    <div className="flex items-center gap-2">
                                        <Tag className="w-4 h-4 text-zinc-600" />
                                        <span className="text-xs text-zinc-400 font-semibold font-mono">{prompt.category}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={250}>
                            {prompt.imageUrl && (
                                <div className="mb-8 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group relative">
                                    <img
                                        src={prompt.imageUrl}
                                        alt={prompt.title}
                                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                                </div>
                            )}
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="pt-6 border-t border-zinc-800">
                                <h3 className="text-xs font-semibold text-zinc-500 tracking-wide mb-3">Descripción</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed italic">
                                    "{prompt.description}"
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={400}>
                            <div className="flex flex-wrap gap-2 pt-4">
                                {prompt.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-semibold font-mono tracking-wide">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-2">
                        <Reveal delay={200}>
                            <div className="relative">
                                <h3 className="text-xs font-semibold text-zinc-500 tracking-wide mb-4 flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-orange-500" />
                                    Instrucción del Prompt
                                </h3>

                                <div className="bg-[#050505] rounded-xl border border-zinc-800/50 p-6 md:p-8 relative min-h-[300px] shadow-2xl overflow-hidden group">
                                    {/* Access Control Overlay */}
                                    {!hasAccess ? (
                                        <div className="absolute inset-0 z-10 backdrop-blur-md bg-black/40 flex flex-col items-center justify-center p-8 text-center">
                                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 border border-orange-500/20">
                                                <Lock className="w-8 h-8 text-orange-500" />
                                            </div>
                                            <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">Prompt Premium</h2>
                                            <p className="text-xs md:text-sm text-zinc-400 mb-8 max-w-xs leading-relaxed">
                                                este prompt es exclusivo para miembros premium. obtén una suscripción activa para desbloquear este y cientos de megaprompts más.
                                            </p>
                                            <div className="flex flex-col gap-3 w-full max-w-xs">
                                                <Button variant="primary" size="lg" onClick={() => navigate('/pricing')}>
                                                    Suscribirme ahora
                                                </Button>

                                                <div className="p-1 px-2 border border-zinc-800 rounded text-[10px] font-semibold font-mono tracking-wide">
                                                    {prompt.category.toLowerCase()}</div>
                                                <p className="text-[10px] text-zinc-600 italic">
                                                    ¿ya tienes suscripción? <button onClick={() => navigate('/login')} className="text-orange-500 hover:underline">inicia sesión aquí</button>.
                                                </p>
                                            </div>

                                        </div>
                                    ) : (
                                        <div className="prose prose-invert prose-orange max-w-none 
                                            prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-zinc-300 
                                            prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4
                                            prose-strong:text-orange-400 prose-code:text-orange-300 
                                            prose-pre:bg-black/50 prose-pre:border prose-pre:border-zinc-800 prose-pre:p-4
                                            prose-ul:list-disc prose-ul:ml-4 prose-ul:mb-6
                                            prose-li:mb-2
                                            selection:bg-orange-500/30">
                                            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                                                {prompt.content}
                                            </ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                                {hasAccess && (
                                    <div className="mt-6 flex justify-end">
                                        <Button
                                            variant={copied ? 'outline' : 'primary'}
                                            onClick={handleCopy}
                                            className="min-w-[160px]"
                                        >
                                            {copied ? (
                                                <><Check className="w-4 h-4 mr-2" /> Copiado</>
                                            ) : (
                                                <><Copy className="w-4 h-4 mr-2" /> Copiar Prompt</>
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>

            </PageTransition>

            <Footer />
        </div>
    );
};
