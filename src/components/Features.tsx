import React from 'react';
import { Brain, Mic, Zap } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'Advanced AI',
    description: 'Powered by cutting-edge natural language processing'
  },
  {
    icon: <Mic className="w-12 h-12" />,
    title: 'Natural Voice',
    description: 'Human-like conversations that feel real and engaging'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Quick Integration',
    description: 'Seamlessly integrate with your existing systems'
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-8 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300">
                <div className="text-cyber-blue mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;