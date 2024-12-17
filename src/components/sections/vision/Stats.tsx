import React from 'react';
import { Users, Building2, Star, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "20+",
    label: "Businesses Transformed",
    suffix: ""
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "35",
    label: "Customer Satisfaction",
    suffix: "%"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "1M+",
    label: "Conversations Automated",
    suffix: ""
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: "99.9",
    label: "Uptime",
    suffix: "%"
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300 text-center hover-glow">
                <div className="text-cyber-blue mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 glitch" data-text={`${stat.value}${stat.suffix}`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;