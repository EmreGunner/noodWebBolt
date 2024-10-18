import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
