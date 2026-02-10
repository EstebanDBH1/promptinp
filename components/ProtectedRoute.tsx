import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();

    useEffect(() => {
        console.log('🔐 ProtectedRoute - Auth state:', { user: user?.email, loading });
    }, [user, loading]);

    if (loading) {
        console.log('🔐 ProtectedRoute - Showing loading screen');
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
                    <p className="text-zinc-500 text-sm font-mono">cargando...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        console.log('🔐 ProtectedRoute - No user, redirecting to /login');
        return <Navigate to="/login" replace />;
    }

    console.log('🔐 ProtectedRoute - User authenticated, rendering children');
    return <>{children}</>;
};
