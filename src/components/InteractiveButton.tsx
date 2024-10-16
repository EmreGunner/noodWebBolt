import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      className={`btn ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default InteractiveButton;
