import React from 'react';
import VoiceCore from './VoiceCore';
import TechRings from './TechRings';
import Logo3DText from './Logo3DText';

const Logo3D = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <button 
      onClick={navigateHome}
      className="logo-container relative flex items-center gap-4 p-2 group hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 rounded-lg"
      aria-label="Go to homepage"
    >
      <div className="relative w-16 h-16 transform-gpu transition-transform duration-500 hover:scale-110">
        <VoiceCore />
        <TechRings />
      </div>
      <Logo3DText />
    </button>
  );
};

export default Logo3D;