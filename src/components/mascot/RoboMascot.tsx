import React, { useState } from 'react';
import { Monitor, Cpu, Wifi, Zap } from 'lucide-react';

const RoboMascot = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInteraction = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div 
      className="relative w-24 h-24 cursor-pointer transform-gpu hover:scale-105 transition-transform"
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      {/* Robot Head */}
      <div className="absolute inset-0">
        <div className={`relative w-full h-full ${isAnimating ? 'animate-bounce-short' : ''}`}>
          {/* Head Base */}
          <div className="absolute inset-2 bg-gradient-to-b from-cyber-blue to-purple-500 rounded-2xl">
            <div className="absolute inset-[2px] bg-black rounded-2xl overflow-hidden">
              {/* Screen Face */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                <Monitor 
                  className={`absolute inset-0 m-auto w-8 h-8 text-cyber-blue ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                />
              </div>
            </div>
          </div>

          {/* CPU Core */}
          <div className="absolute -right-1 -top-1 w-6 h-6">
            <div className="absolute inset-0 bg-cyber-blue rounded-full animate-pulse">
              <Cpu className="w-full h-full text-black p-1" />
            </div>
          </div>

          {/* Antenna */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
            <div className="relative w-1 h-4 bg-gradient-to-t from-cyber-blue to-transparent">
              <Wifi 
                className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-cyber-blue ${
                  isAnimating ? 'animate-ping' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Energy Field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 border border-cyber-blue/20 rounded-full ${
              isAnimating ? 'animate-ping-slow' : ''
            }`}
            style={{
              animationDelay: `${i * 0.2}s`,
              transform: `scale(${1 + i * 0.2})`
            }}
          />
        ))}
      </div>

      {/* Power Indicators */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full bg-cyber-blue ${
              isAnimating ? 'animate-pulse' : ''
            }`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      {/* Energy Bolt */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-12 h-12 text-cyber-blue animate-zap" />
        </div>
      )}
    </div>
  );
};

export default RoboMascot;