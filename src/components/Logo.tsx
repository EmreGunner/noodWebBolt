import React from 'react';
import { Sprout } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Sprout className="text-primary mr-2" size={24} />
      <span className="text-xl font-bold text-primary">NOOD</span>
    </div>
  );
};

export default Logo;
