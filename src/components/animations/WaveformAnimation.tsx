import React from 'react';
import { Mic, Radio, Waves } from 'lucide-react';

const WaveformAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-full animate-pulse"></div>
      
      {/* Multiple layered icons for a dynamic effect */}
      <div className="relative">
        <Waves className="w-32 h-32 text-cyber-blue animate-float" />
        <Radio className="absolute inset-0 w-32 h-32 text-cyber-blue/50 animate-pulse" />
        <Mic className="absolute inset-0 w-32 h-32 text-cyber-blue/30 animate-ping" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 border-2 border-cyber-blue/30 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default WaveformAnimation;