import React from 'react';
import { ArrowRight } from 'lucide-react';
import WaveformAnimation from '../animations/WaveformAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionize Your Customer Experience with{' '}
              <span className="bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Divo.ai
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
              No more long wait times, missed appointments, or fragmented customer management.
            </p>
            <p className="text-gray-300 text-md mb-12">
              AI-Powered Customer Support, CRM Integration, and Appointment Scheduling—All in One Voice Agent Solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-cyber-blue text-black font-medium rounded-lg hover:bg-white transition-all duration-300 text-lg flex items-center justify-center gap-2 animate-glow">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-cyber-blue text-cyber-blue font-medium rounded-lg hover:bg-cyber-blue/10 transition-all duration-300 text-lg">
                Request Demo
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <WaveformAnimation />
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm mb-4 text-center">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company) => (
              <div key={company} className="text-cyber-blue font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;