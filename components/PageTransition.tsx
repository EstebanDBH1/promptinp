import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const PageTransition: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  useEffect(() => {
    // Scroll to top when the component mounts (which is after exit animation in mode="wait")
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};