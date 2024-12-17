import React from 'react';
import { Rocket } from 'lucide-react';

const SignUpHero = () => {
  return (
    <section className="pt-32 pb-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue">
          <Rocket className="w-4 h-4 text-cyber-blue" />
          <span className="text-sm text-cyber-blue">Get Started</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter">
          Start Building Your{' '}
          <span className="bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            AI Voice Agent Today
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto terminal-text">
          Automate customer support, streamline appointments, and boost efficiency with our powerful AI solutions
        </p>
      </div>
    </section>
  );
};

export default SignUpHero;