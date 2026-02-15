import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms delay
  threshold?: number; // 0-1
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

