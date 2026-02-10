import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

import { PageTransition } from '../components/PageTransition';

export const DebugAuthPage: React.FC = () => {
    const { user, session, loading } = useAuth();
    const [sessionData, setSessionData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                console.log('🔐 Debug - Session data:', data);
                console.log('🔐 Debug - Session error:', error);
                setSessionData(data);
                if (error) setError(error.message);
            } catch (err: any) {
                console.error('🔐 Debug - Error getting session:', err);
                setError(err.message);
            }
        };

        checkSession();
    }, []);

    return (
        <PageTransition className="min-h-screen bg-[#050505] text-white p-8 font-mono">
            <h1 className="text-2xl font-bold mb-6">🔐 Debug de Autenticación</h1>

            <div className="space-y-6">
                <div className="bg-[#111] border border-zinc-800 rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2 text-orange-500">Estado del Contexto</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Loading:</strong> {loading ? 'true' : 'false'}</p>
                        <p><strong>User:</strong> {user ? user.email : 'null'}</p>
                        <p><strong>Session:</strong> {session ? 'exists' : 'null'}</p>
                    </div>
                </div>

                <div className="bg-[#111] border border-zinc-800 rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2 text-purple-500">Datos de Sesión (Direct)</h2>
                    {error && (
                        <div className="mb-2 p-2 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs">
                            Error: {error}
                        </div>
                    )}
                    <pre className="text-xs overflow-auto bg-black p-2 rounded">
                        {JSON.stringify(sessionData, null, 2)}
                    </pre>
                </div>

                <div className="bg-[#111] border border-zinc-800 rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2 text-blue-500">Variables de Entorno</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>VITE_SUPABASE_URL:</strong> {import.meta.env.VITE_SUPABASE_URL || 'NOT SET'}</p>
                        <p><strong>VITE_SUPABASE_ANON_KEY:</strong> {import.meta.env.VITE_SUPABASE_ANON_KEY ? 'SET (hidden)' : 'NOT SET'}</p>
                    </div>
                </div>

                <div className="bg-[#111] border border-zinc-800 rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2 text-green-500">URL Actual</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Origin:</strong> {window.location.origin}</p>
                        <p><strong>Hash:</strong> {window.location.hash}</p>
                        <p><strong>Full URL:</strong> {window.location.href}</p>
                    </div>
                </div>

                <div className="bg-[#111] border border-zinc-800 rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2 text-yellow-500">Instrucciones</h2>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-400">
                        <li>Abre la consola del navegador (F12)</li>
                        <li>Busca los logs que empiezan con 🔐</li>
                        <li>Intenta hacer login con Google</li>
                        <li>Observa los logs durante y después del redirect</li>
                        <li>Vuelve a esta página para ver el estado final</li>
                    </ol>
                </div>
            </div>
        </PageTransition>
    );
};
