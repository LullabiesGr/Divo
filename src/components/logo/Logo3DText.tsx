import React from 'react';

const Logo3DText = () => {
  return (
    <div className="logo-text flex flex-col perspective-1000">
      <div className="transform-gpu transition-transform duration-500 group-hover:transform group-hover:translate-z-12">
        <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-cyber-blue via-purple-500 to-cyber-blue bg-300% animate-gradient-x bg-clip-text text-transparent">
          DIVO.AI
        </span>
      </div>
      <div className="transform-gpu transition-all duration-500 group-hover:transform group-hover:translate-z-6">
        <span className="text-xs tracking-[0.2em] text-cyber-blue/80 font-light">
          NEURAL VOICE
        </span>
      </div>
    </div>
  );
};

export default Logo3DText;