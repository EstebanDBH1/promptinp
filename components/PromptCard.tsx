import React, { useState } from 'react';
import { PromptProfile } from '../types';
import { Check, Copy } from 'lucide-react';

export const PromptCard: React.FC<{ prompt: PromptProfile }> = ({ prompt }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="bg-[#18181b] rounded-2xl p-6 w-full hover:bg-[#202023] transition-colors group flex flex-col justify-between h-full min-h-[220px] border border-white/5 relative overflow-hidden hover-lift">

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-base font-bold text-white leading-tight flex-1">{prompt.title}</h3>
                    <div className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 whitespace-nowrap">
                        {prompt.price}
                    </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4">
                    {prompt.description}
                </p>
            </div>

            <button
                onClick={handleCopy}
                className={`
                mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200
                ${copied
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700'
                    }
            `}
            >
                {copied ? (
                    <>
                        <Check className="w-4 h-4" />
                        <span>copiado</span>
                    </>
                ) : (
                    <>
                        <Copy className="w-4 h-4" />
                        <span>copiar prompt</span>
                    </>
                )}
            </button>
        </div>
    );
};