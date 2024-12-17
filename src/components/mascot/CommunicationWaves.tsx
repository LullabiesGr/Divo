import React from 'react';

const CommunicationWaves = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated wave rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-cyan-500/20 rounded-full animate-ping-slow"
          style={{
            animationDelay: `${i * 0.5}s`,
            transform: `scale(${1 + i * 0.2})`
          }}
        ></div>
      ))}
      
      {/* Sound wave lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-around h-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 h-full bg-gradient-to-t from-cyan-500/50 to-blue-500/50 animate-sound-wave"
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationWaves;