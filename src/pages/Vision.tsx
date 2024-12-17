import React from 'react';
import VisionHero from '../components/sections/vision/VisionHero';
import Stats from '../components/sections/vision/Stats';

const Vision = () => {
  return (
    <div className="min-h-screen bg-black">
      <VisionHero />
      <Stats />
    </div>
  );
};

export default Vision;