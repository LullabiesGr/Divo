import React from 'react';
import { Mic, Radio, Waves } from 'lucide-react';

const VoiceCore = () => {
  return (
    <div className="voice-core absolute inset-0 flex items-center justify-center">
      {/* 3D Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-purple-500/20 rounded-lg transform rotate-45 animate-float" />
      
      {/* Central Hologram */}
      <div className="relative w-10 h-10 transform-gpu">
        <div className="absolute inset-0 flex items-center justify-center">
          <Mic className="w-6 h-6 text-cyber-blue animate-pulse" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
          <Radio className="w-8 h-8 text-purple-500 animate-spin-slow" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <Waves className="w-10 h-10 text-white animate-pulse-slow" />
        </div>
      </div>
      
      {/* Holographic Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/10 to-transparent rounded-lg animate-hologram" />
    </div>
  );
};

export default VoiceCore;