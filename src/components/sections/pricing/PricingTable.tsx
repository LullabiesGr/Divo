import React from 'react';
import { Check, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: 'per month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 500 conversations/month',
      'Basic CRM integration',
      'Email support',
      '24/7 AI availability',
      'Basic analytics'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '$149',
    period: 'per month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 2,500 conversations/month',
      'Advanced CRM integration',
      'Priority support',
      'Custom AI training',
      'Advanced analytics',
      'Multi-channel support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large-scale operations',
    features: [
      'Unlimited conversations',
      'Enterprise CRM integration',
      'Dedicated support',
      'Custom AI development',
      'Advanced security features',
      'API access'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const PricingTable = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group fade-up ${
                plan.popular ? 'transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-cyber-blue text-black text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`interactive-card h-full relative rounded-xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-cyber-blue/20 to-purple-500/20 border-cyber-blue'
                  : 'bg-gray-900 border-gray-800'
              } border backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold glitch" data-text={plan.price}>{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyber-blue" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`hover-glow w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyber-blue text-black hover:bg-white'
                      : 'border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 terminal-text">
            <HelpCircle className="w-4 h-4" />
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;