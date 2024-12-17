import React from 'react';

const OrbAnimation = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute inset-4 bg-gradient-to-br from-cyber-blue/30 to-purple-500/30 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-8 bg-gradient-to-tr from-cyber-blue/40 to-purple-500/40 rounded-full animate-pulse-slow"></div>
      <div className="absolute inset-12 bg-black rounded-full"></div>
    </div>
  );
};

export default OrbAnimation;