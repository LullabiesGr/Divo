import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

const TrustElements = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-cyber-blue" />
            <div>
              <h3 className="font-medium">Secure Platform</h3>
              <p className="text-sm text-gray-400">Bank-grade encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Lock className="w-8 h-8 text-cyber-blue" />
            <div>
              <h3 className="font-medium">Privacy First</h3>
              <p className="text-sm text-gray-400">Your data stays yours</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-cyber-blue" />
            <div>
              <h3 className="font-medium">Free Trial</h3>
              <p className="text-sm text-gray-400">14 days, no credit card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;