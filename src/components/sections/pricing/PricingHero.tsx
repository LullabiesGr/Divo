import React from 'react';
import { Shield } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="pt-32 pb-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue">
          <Shield className="w-4 h-4 text-cyber-blue" />
          <span className="text-sm text-cyber-blue">Simple & Transparent</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter">
          Choose Your{' '}
          <span className="bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            Perfect Plan
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto terminal-text">
          Start with our free trial and scale as your business grows
        </p>
      </div>
    </section>
  );
};

export default PricingHero;