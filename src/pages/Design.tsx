import React from 'react';
import ExampleCard from '../components/HeroCard';
import Card from '../components/ExampleCard';
import HeroTv from '../components/HeroTv';
import NoodVideo from '../components/NoodVideo';

const Design: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <ExampleCard />
      <Card />
    </div>
  );
};

export default Design;
