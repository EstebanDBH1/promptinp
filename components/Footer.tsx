import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-8 border-t border-white/5 bg-[#050505] mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-zinc-500" />
          <span className="text-zinc-500 text-xs md:text-sm font-bold">vault.ai</span>
          <Code2 className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-zinc-500 font-mono">
          <Link to="/prompts" className="hover:text-zinc-300 transition-colors">top prompts</Link>
          <Link to="/prompts" className="hover:text-zinc-300 transition-colors">galería vip</Link>
          <Link to="/#pricing" className="hover:text-zinc-300 transition-colors">acceso total</Link>
          <Link to="/prompts" className="hover:text-zinc-300 transition-colors">biblioteca</Link>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-zinc-300 transition-colors">inicio</button>
          <Link to="/privacy" className="hover:text-zinc-300 transition-colors">privacidad</Link>
          <Link to="/terms" className="hover:text-zinc-300 transition-colors">términos</Link>

          <button className="flex items-center gap-1 hover:text-zinc-300">
            ES ES <span className="text-xs">▼</span>
          </button>
        </div>

      </div>
    </footer>
  );
};