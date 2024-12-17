import React, { useEffect, useState } from 'react';
import { Phone, Activity } from 'lucide-react';

const CapacityCounter = () => {
  const [activeCallCount, setActiveCallCount] = useState(0);
  const maxCalls = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCallCount(prev => {
        const variation = Math.floor(Math.random() * 50) - 25; // Random fluctuation
        const newValue = Math.max(850, Math.min(maxCalls, prev + variation));
        return newValue;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            Massive Concurrent Capacity
          </h3>
          <p className="text-gray-400 mb-4">
            Handle thousands of simultaneous conversations with consistent quality and zero latency
          </p>
        </div>
        
        <div className="flex-1">
          <div className="bg-black rounded-lg p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyber-blue" />
                <span className="text-sm text-gray-400">Active Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-blue"></span>
                </span>
                <span className="text-sm text-gray-400">Live</span>
              </div>
            </div>
            
            <div className="text-4xl font-bold text-cyber-blue mb-4 font-mono">
              {activeCallCount.toLocaleString()}
              <span className="text-gray-500 text-lg">/{maxCalls}</span>
            </div>
            
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                <div 
                  className="transition-all duration-500 ease-out bg-gradient-to-r from-cyber-blue to-purple-500"
                  style={{ width: `${(activeCallCount / maxCalls) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityCounter;