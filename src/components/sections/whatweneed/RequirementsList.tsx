import React from 'react';
import { Building2, PhoneCall, HelpCircle, Database, Link2 } from 'lucide-react';

const requirements = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Basic Business Information",
    description: "Description of your business, industry, services, tone of voice, and contact details",
    examples: [
      "Business description and industry",
      "Preferred tone of voice",
      "Operating hours"
    ]
  },
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "Call Volume and Patterns",
    description: "Understanding your call traffic helps us optimize the AI for your needs",
    examples: [
      "Daily call volume",
      "Peak hours",
      "Common call types"
    ]
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "Frequently Asked Questions",
    description: "Common questions and your preferred responses",
    examples: [
      "Standard customer queries",
      "Question variations",
      "Preferred responses"
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Knowledge Base Information",
    description: "Existing documentation that will help train your AI",
    examples: [
      "Help center content",
      "Website FAQs",
      "Process documentation"
    ]
  },
  {
    icon: <Link2 className="w-8 h-8" />,
    title: "Preferred Integrations",
    description: "Systems and tools you'd like your AI to work with",
    examples: [
      "CRM systems",
      "Scheduling tools",
      "Custom workflows"
    ]
  }
];

const RequirementsList = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="relative group fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300">
                <div className="text-cyber-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {req.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{req.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{req.description}</p>
                <ul className="space-y-2">
                  {req.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyber-blue rounded-full"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsList;