import React from 'react';
import { Brain, Clock, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Training",
    description: "Your information helps us train the AI to understand your business context and respond accurately."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Integration",
    description: "We'll integrate your AI with your existing systems for seamless operation."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Your custom voice agent will be ready for testing within 10-14 business days."
  }
];

const ProcessExplanation = () => {
  return (
    <section className="py-24 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why We Need This Information</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each piece of information you provide helps us create an AI voice agent that perfectly represents your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-6 rounded-xl border border-gray-800 hover:border-cyber-blue/50 transition-all duration-300 interactive-card">
                <div className="text-cyber-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessExplanation;