import React, { useState } from 'react';
import { Phone, PhoneCall, CheckCircle } from 'lucide-react';
import RoboMascot from '../mascot/RoboMascot';

const Demo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'calling' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setStatus('calling');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after showing success message
      setTimeout(() => {
        setStatus('idle');
        setPhoneNumber('');
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Divo.ai Live
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get an instant demo call from our AI agent and discover the future of customer service
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-purple-500/5"></div>
            
            <div className="relative">
              {/* Header with Robot Mascot */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <RoboMascot />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Divo Assistant</h3>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-blue"></span>
                      </span>
                      <span className="text-sm text-gray-400">AI Agent Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {status === 'success' ? (
                <div className="text-center py-8 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-cyber-blue mx-auto mb-4" />
                  <p className="text-xl text-white mb-2">Call Initiated!</p>
                  <p className="text-gray-400">Our AI agent will call you in a few seconds...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      Enter your phone number for an instant demo
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-black border border-gray-800 rounded-lg px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'calling'}
                    className={`w-full px-6 py-3 bg-cyber-blue text-black font-medium rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 ${
                      status === 'calling' ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'calling' ? (
                      <>
                        <PhoneCall className="w-5 h-5 animate-pulse" />
                        Initiating Call...
                      </>
                    ) : (
                      <>
                        <PhoneCall className="w-5 h-5" />
                        Call Me Now
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By clicking "Call Me Now", you agree to receive a demo call from our AI agent.
                    Standard rates may apply.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;