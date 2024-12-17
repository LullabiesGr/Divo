import React from 'react';
import OrbAnimation from './OrbAnimation';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black"></div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-6 inline-block">
          <span className="px-4 py-1 text-xs border border-cyber-blue text-cyber-blue rounded-full tracking-wider animate-pulse">
            NEXT GEN AI VOICE TECHNOLOGY
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
          YOUR SOVEREIGN<br />
          <span className="bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            VOICE AI
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Empowering businesses with the future of voice AI through natural conversations and seamless integration
        </p>
        <button className="px-8 py-4 bg-cyber-blue text-black font-medium rounded hover:bg-white transition-all duration-300 text-lg uppercase tracking-wider animate-glow">
          Get Started
        </button>
      </div>

      <div className="absolute z-0 animate-float">
        <OrbAnimation />
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="text-cyber-blue w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;