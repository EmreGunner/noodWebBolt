import React, { ReactNode } from 'react';

interface FocusWrapperProps {
  children: ReactNode;
  className?: string;
}

const FocusWrapper: React.FC<FocusWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 ${className}`}>
      {children}
    </div>
  );
};

export default FocusWrapper;
