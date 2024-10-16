import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40, color = '#4e9350' }) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}`,
          borderTop: '4px solid transparent',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default LoadingSpinner;
