import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  const baseClass = `btn btn-${variant} ${fullWidth ? 'w-full' : ''} ${className} inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition duration-300 ease-in-out`;

  const content = (
    <span className="flex items-center justify-center">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
};

export default Button;
