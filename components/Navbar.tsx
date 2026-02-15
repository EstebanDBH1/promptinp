import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Terminal,
  Sparkles,
  LogOut,
  Menu,
  X,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  hideNavLinks?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ hideNavLinks = false }) => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const menuItems = [{ label: "prompts", path: "/prompts" }];

  return (
    <nav className="w-full py-4 px-6 md:px-8 flex items-center justify-between border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
          <span className="font-medium text-lg tracking-tight">alpacka.ai</span>
        </Link>
      </div>

      {!hideNavLinks ? (
        <>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 text-sm text-zinc-400">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-white/5 pl-8">
              {user ? (
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center text-white font-medium text-xs border border-white/10 shadow-lg shadow-orange-500/10">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <Link
                      to="/settings"
                      className="text-sm font-medium text-white hover:text-orange-500 transition-colors hidden xl:block"
                    >
                      {user.email?.split("@")[0]}
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-zinc-400">
                    <Link
                      to="/prompts"
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      mis prompts
                    </Link>
                    <Link
                      to="/settings"
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Settings className="w-4 h-4" />
                      ajustes
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="hover:text-red-500 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <Link
                    to="/login"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    iniciar sesión
                  </Link>
                  <Link to="/login">
                    <Button
                      variant="primary"
                      size="sm"
                      className="shadow-lg shadow-orange-500/20"
                    >
                      empezar ahora
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 p-6 md:hidden shadow-2xl z-50 overflow-hidden"
              >
                <div className="flex flex-col gap-6 ">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="text-lg font-medium text-zinc-400 hover:text-white px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="h-px bg-white/5 my-2" />

                  {user ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-black font-medium">
                          {user.email?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-white font-medium">
                          {user.email}
                        </span>
                      </div>
                      <Link
                        to="/prompts"
                        className="flex items-center gap-3 text-zinc-400 hover:text-white px-2 py-2 rounded-lg hover:bg-zinc-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <LayoutDashboard className="w-5 h-5" />
                        Mis Prompts
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center gap-3 text-zinc-400 hover:text-white px-2 py-2 rounded-lg hover:bg-zinc-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Settings className="w-5 h-5" />
                        Ajustes de Cuenta
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 text-red-500 px-2 py-2 rounded-lg hover:bg-red-500/5"
                      >
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" fullWidth>
                          iniciar sesión
                        </Button>
                      </Link>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="primary" fullWidth>
                          empezar ahora
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="flex items-center gap-4 text-xs md:text-sm text-zinc-400">
          <span className="hidden sm:inline">¿ya tienes cuenta?</span>
          <Link to="/login" className="hover:text-white transition-colors">
            iniciar sesión
          </Link>
        </div>
      )}
    </nav>
  );
};
