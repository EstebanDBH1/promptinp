import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-black border border-transparent focus:ring-orange-500",
    outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white focus:ring-zinc-500",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50",
    white: "bg-white text-black hover:bg-gray-200 border border-transparent",
    dark: "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg",
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};