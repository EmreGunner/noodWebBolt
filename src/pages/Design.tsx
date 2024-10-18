import React from 'react';
import DesignCard from '../components/DesignCard';

const Design: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ba]">
      <div className="hover:[&>*]:rotate-[30deg] hover:[&>*]:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,rgba(5,71,17,0.1)_0px_25px_30px_0px]">
        <DesignCard />
      </div>
    </div>
  );
};

export default Design;
