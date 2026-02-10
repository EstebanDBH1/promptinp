import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PromptCard } from '../components/PromptCard';
import { ArrowLeft, ArrowRight, Search as SearchIcon, X } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { supabase } from '../lib/supabase';
import { PromptProfile } from '../types';
import { useSearchParams } from 'react-router-dom';

export const PromptsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [prompts, setPrompts] = useState<PromptProfile[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        } else {
            setSelectedCategory('all');
        }
    }, [searchParams]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // 1. Fetch prompts
                let query = supabase
                    .from('prompts')
                    .select('*')
                    .order('created_at', { ascending: false });

                const { data, error: fetchError } = await query;

                if (fetchError) throw fetchError;

                const mappedPrompts: PromptProfile[] = (data || []).map(p => ({
                    id: p.id,
                    title: p.title,
                    description: p.description || p.content.substring(0, 150) + '...',
                    content: p.content,
                    category: p.category,
                    author: '@system',
                    price: p.is_premium ? 'Premium' : 'Free',
                    tags: [p.category],
                    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.id}`,
                    modelIcon: p.category?.toLowerCase() === 'ingeniería' ? '💻' :
                        p.category?.toLowerCase() === 'marketing' ? '✍️' :
                            p.category?.toLowerCase() === 'imagen' ? '🎨' :
                                p.category?.toLowerCase() === 'código' ? '⚛️' : '🤖',
                    imageUrl: p.image_url
                }));

                setPrompts(mappedPrompts);

                // 2. Extract unique categories from data
                const uniqueCategories = Array.from(new Set((data || []).map(p => p.category))).filter(Boolean) as string[];
                setCategories(uniqueCategories);

            } catch (err: any) {
                console.error('Error fetching prompts:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredPrompts = prompts.filter(prompt => {
        const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prompt.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col font-mono selection:bg-orange-500/30">
            <Navbar />

            <PageTransition className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12">

                {/* Header */}
                <Reveal>
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white mb-1">bóveda de megaprompts</h1>
                        <p className="text-sm text-zinc-500">accede a la ingeniería de prompts más avanzada de la industria</p>
                    </div>
                </Reveal>

                {/* Filters Box */}
                <Reveal delay={100}>
                    <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 md:p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            {/* Search Input */}
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-xs text-zinc-500 font-medium ml-1">búsqueda</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="buscar por título, contenido o descripción..."
                                        className="w-full bg-[#18181b] border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all font-mono"
                                    />
                                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs text-zinc-500 font-medium ml-1">categorías activas ({categories.length})</label>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSearchParams({})}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedCategory === 'all' ? 'bg-white text-black' : 'bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'}`}
                                >
                                    todas
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSearchParams({ category: cat })}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${selectedCategory === cat ? 'bg-orange-500 text-black border-orange-400' : 'bg-[#18181b] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'}`}
                                    >
                                        {cat.toLowerCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Grid or Status Messages */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
                        <p>escaneando la bóveda...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center">
                        <p className="text-red-400 mb-2">error de red local</p>
                        <p className="text-sm text-zinc-500">{error}</p>
                    </div>
                ) : filteredPrompts.length === 0 ? (
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-20 text-center">
                        <SearchIcon className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                        <p className="text-zinc-400 italic">no hay megaprompts que coincidan con tu búsqueda</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                        {filteredPrompts.map((prompt, idx) => (
                            <Reveal key={prompt.id} delay={idx * 50}>
                                <PromptCard prompt={prompt} />
                            </Reveal>
                        ))}
                    </div>
                )}

                {/* Pagination (Visual only for now) */}
                {!loading && !error && filteredPrompts.length > 0 && (
                    <Reveal delay={200}>
                        <div className="flex justify-center items-center gap-4 text-xs md:text-sm font-mono text-zinc-500 pb-8">
                            <button className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-30" disabled>
                                <ArrowLeft className="w-4 h-4" /> anterior
                            </button>
                            <span className="text-zinc-400">1 / 1</span>
                            <button className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-30" disabled>
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