import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const ClosingCTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Transform Your Customer Experience?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Join thousands of businesses already using Divo.ai to revolutionize their customer service
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-cyber-blue text-black font-medium rounded-lg hover:bg-white transition-all duration-300 text-lg flex items-center justify-center gap-2">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border border-cyber-blue text-cyber-blue font-medium rounded-lg hover:bg-cyber-blue/10 transition-all duration-300 text-lg">
            Schedule a Consultation
          </button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            100% satisfaction guaranteed
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;