import React from 'react';
import { MessageSquare, Calendar, Database, Clock, Users, Shield, Globe2, Cpu, Languages, Network } from 'lucide-react';
import CapacityCounter from './features/CapacityCounter';
import LanguageSelector from './features/LanguageSelector';

const features = [
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Massive Concurrent Capacity',
    description: 'Handle up to 1,000 simultaneous calls with zero degradation in quality',
    benefit: 'Scale instantly without infrastructure concerns'
  },
  {
    icon: <Languages className="w-8 h-8" />,
    title: 'Multilingual Support',
    description: 'Communicate in 50+ languages with native-level fluency',
    benefit: 'Reach global audiences effortlessly'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Automated Customer Support',
    description: 'Handle inquiries 24/7 with natural, human-like responses',
    benefit: 'Save 15+ hours per week handling customer interactions'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'CRM Integration',
    description: 'Seamlessly connect with leading CRM tools to organize and optimize your data',
    benefit: 'Reduce data entry time by 75%'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Appointment Scheduling',
    description: 'Simplify bookings with AI that manages schedules in real-time',
    benefit: 'Eliminate double-bookings and reduce no-shows by 40%'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and data protection',
    benefit: 'Ensure compliance and data safety'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enterprise-Grade AI Voice Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your customer experience with powerful AI-driven features
          </p>
        </div>

        {/* Capacity Showcase */}
        <div className="mb-20">
          <CapacityCounter />
        </div>

        {/* Language Support Demo */}
        <div className="mb-20">
          <LanguageSelector />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300 h-full">
                <div className="text-cyber-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <div className="text-cyber-blue text-sm font-medium">
                  {feature.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;