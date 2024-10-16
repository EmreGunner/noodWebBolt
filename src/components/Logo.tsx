import React from 'react';
import { Sprout } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'light' }) => {
  const textColor = variant === 'dark' ? "text-white" : "text-primary";
  const iconColor = variant === 'dark' ? "text-white" : "text-primary";

  return (
    <div className="flex items-center">
      <Sprout className={`mr-2 ${iconColor}`} size={24} />
      <span className={`text-xl font-bold ${textColor}`}>NOOD</span>
    </div>
  );
};

export default Logo;
