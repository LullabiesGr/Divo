import React from 'react';
import { Circle, Wand2 } from 'lucide-react';

const AICore = () => {
  return (
    <div className="relative w-12 h-12">
      {/* Core glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
      
      {/* Central core */}
      <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full">
        <Circle className="w-full h-full text-white/80 animate-spin-slow" />
      </div>
      
      {/* Accent elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Wand2 className="w-6 h-6 text-white/90 transform rotate-45" />
      </div>
      
      {/* Orbital rings */}
      <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-reverse"></div>
      <div className="absolute inset-[-4px] border border-blue-500/20 rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default AICore;