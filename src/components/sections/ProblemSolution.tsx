import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const problems = [
  'Missed leads due to delayed responses',
  'Lost time managing multiple systems manually',
  'Difficulty maintaining a professional, 24/7 customer support presence'
];

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-black/90 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problem: Disconnected Systems and Inefficient Customer Service
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Traditional customer service approaches are costing you time, money, and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Before Divo.ai</h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-cyber-blue/10 rounded-lg p-6 border border-cyber-blue/20">
              <h3 className="text-xl font-semibold mb-4 text-cyber-blue">After Divo.ai</h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-6 h-6 text-cyber-blue flex-shrink-0 mt-1" />
                    <span>
                      {index === 0 && 'Instant response to every lead, 24/7'}
                      {index === 1 && 'Automated workflow across all systems'}
                      {index === 2 && 'Professional AI support that never sleeps'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;