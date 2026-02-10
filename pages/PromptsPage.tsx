import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PromptCard } from '../components/PromptCard';
import { ArrowLeft, ArrowRight, Search as SearchIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { supabase } from '../lib/supabase';
import { PromptProfile } from '../types';

const FilterInput: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
    <div className="flex flex-col gap-1 w-full">
        <label className="text-xs text-zinc-500 font-medium ml-1">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-[#18181b] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
        />
    </div>
);

export const PromptsPage: React.FC = () => {
    const [prompts, setPrompts] = useState<PromptProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrompts = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('prompts')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                // Map database fields to PromptProfile interface
                const mappedPrompts: PromptProfile[] = (data || []).map(p => ({
                    id: p.id,
                    title: p.title,
                    description: p.description || p.content.substring(0, 150) + '...',
                    content: p.content, // We'll add this to the type or just use it in the component
                    category: p.category,
                    author: '@system', // Default values for missing fields
                    price: p.is_premium ? '$5.00' : 'Gratis',
                    tags: [p.category],
                    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.id}`,
                    modelIcon: '🤖'
                } as any));

                setPrompts(mappedPrompts);
            } catch (err: any) {
                console.error('Error fetching prompts:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrompts();
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-mono selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12">

                {/* Header */}
                <Reveal>
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white mb-1">explorar prompts</h1>
                        <p className="text-sm text-zinc-500">encuentra instrucciones de alta calidad para tu agente</p>
                    </div>
                </Reveal>

                {/* Filters Box */}
                <Reveal delay={100}>
                    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 md:p-6 mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <FilterInput label="búsqueda" placeholder="python, seo, marketing..." />
                            <FilterInput label="categoría" placeholder="ingeniería, legal..." />
                            <FilterInput label="modelo" placeholder="gpt-4, claude, llama..." />
                            <FilterInput label="ordenar por" placeholder="relevancia" />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold transition-colors">all</button>
                            <button className="px-4 py-1.5 rounded-full bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-bold transition-all">code</button>
                            <button className="px-4 py-1.5 rounded-full bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-bold transition-all">writing</button>
                            <button className="px-4 py-1.5 rounded-full bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-bold transition-all">image</button>
                            <button className="px-4 py-1.5 rounded-full bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-bold transition-all">data</button>
                            <button className="px-4 py-1.5 rounded-full bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-bold transition-all">marketing</button>
                        </div>
                    </div>
                </Reveal>

                {/* Grid or Status Messages */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
                        <p>cargando prompts desde la base de datos...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center">
                        <p className="text-red-400 mb-2">error al cargar los prompts</p>
                        <p className="text-sm text-zinc-500">{error}</p>
                    </div>
                ) : prompts.length === 0 ? (
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-20 text-center">
                        <SearchIcon className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                        <p className="text-zinc-400 italic">no se encontraron prompts en la base de datos</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                        {prompts.map((prompt, idx) => (
                            <Reveal key={prompt.id} delay={idx * 50}>
                                <PromptCard prompt={prompt} />
                            </Reveal>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {!loading && !error && prompts.length > 0 && (
                    <Reveal delay={200}>
                        <div className="flex justify-center items-center gap-4 text-xs md:text-sm font-mono text-zinc-500 pb-8">
                            <button className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-50" disabled>
                                <ArrowLeft className="w-4 h-4" /> anterior
                            </button>
                            <span className="text-zinc-400">1 / 1</span>
                            <button className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-50" disabled>
                                siguiente <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </Reveal>
                )}

            </PageTransition>

            <Footer />
        </div>
    );
};