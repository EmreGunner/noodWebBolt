import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'light' }) => {
  const logoSrc = variant === 'dark' ? "/logoDark.png" : "/logo.png";
  const textColor = variant === 'dark' ? "text-white" : "text-primary";

  return (
    <div className="flex items-center">
      <img src={logoSrc} alt="NOOD Logo" className="mr-2" width={24} height={24} />
      <span className={`text-xl font-bold ${textColor}`}>Home</span>
    </div>
  );
};

export default Logo;
