import React from 'react';

const TechRings = () => {
  return (
    <div className="tech-rings absolute inset-0">
      {/* Rotating Tech Rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-cyber-blue/30 rounded-lg"
          style={{
            transform: `rotateX(${60 + i * 30}deg) rotateY(${i * 45}deg)`,
            animation: `spin-3d ${8 + i * 4}s linear infinite`
          }}
        />
      ))}
      
      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyber-blue to-transparent"
            style={{
              left: `${25 * i}%`,
              animation: `data-flow 2s ${i * 0.2}s infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechRings;