import React from 'react';
import { Zap, Target, Rocket } from 'lucide-react';

const VisionHero = () => {
  return (
    <section className="min-h-[70vh] bg-black relative flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue">
            <Rocket className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm text-cyber-blue">Our Mission</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight typewriter">
            Empowering Businesses with{' '}
            <span className="bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              Cutting-Edge AI Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mb-12 terminal-text">
            Divo.ai is on a mission to transform customer experiences through innovative AI-driven voice solutions
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Vision",
                description: "To lead the revolution in AI-powered customer interactions"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Mission",
                description: "Simplify business operations with intelligent voice solutions"
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Values",
                description: "Innovation, reliability, and customer success"
              }
            ].map((item, index) => (
              <div key={index} className="interactive-card p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-cyber-blue/50 transition-colors">
                <div className="text-cyber-blue mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionHero;