import React from 'react';
import { PromptProfile } from '../types';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export const PromptCard: React.FC<{ prompt: PromptProfile }> = ({ prompt }) => {
    const navigate = useNavigate();

    const isPremium = prompt.price === 'Premium';

    return (
        <div
            onClick={() => navigate(`/prompts/${prompt.id}`)}
            className="bg-[#0a0a0a] rounded-2xl p-6 w-full hover:bg-[#111113] transition-all duration-300 group flex flex-col justify-between h-full min-h-[260px] border border-zinc-800 hover:border-zinc-700 relative overflow-hidden cursor-pointer shadow-xl"
        >
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm md:text-base font-semibold text-white leading-snug flex-1 group-hover:text-orange-500 transition-colors font-mono tracking-tight">
                        {prompt.title}
                    </h3>
                    <div className={`
                        text-[9px] font-semibold px-2 py-0.5 rounded border font-mono tracking-wide
                        ${isPremium
                            ? 'text-orange-500 bg-orange-500/5 border-orange-500/20'
                            : 'text-zinc-500 bg-zinc-900 border-zinc-800'}
                    `}>
                        {prompt.price}
                    </div>
                </div>


                {/* Content Snippet or Image Preview */}
                {prompt.imageUrl ? (
                    <div className="w-full h-[140px] rounded-lg overflow-hidden border border-zinc-800 relative bg-zinc-900">
                        <img
                            src={prompt.imageUrl}
                            alt={prompt.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                ) : (
                    <div className="bg-[#050505] border border-zinc-800 rounded-lg p-3 relative overflow-hidden h-[100px]">
                        <p className="text-[11px] md:text-xs text-zinc-500 font-sans leading-relaxed line-clamp-4 italic">
                            "{prompt.content}"
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#050505] to-transparent"></div>
                    </div>
                )}

                <p className="text-[11px] md:text-sm text-zinc-400 leading-relaxed line-clamp-2 italic">
                    {prompt.description}
                </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] md:text-xs font-semibold font-mono tracking-wide text-orange-500/80 group-hover:text-orange-500 transition-colors">
                <span>ver prompt completo</span>
                <Sparkles className="w-3 h-3 group-hover:scale-110 transition-transform" />
            </div>

        </div>
    );
};
