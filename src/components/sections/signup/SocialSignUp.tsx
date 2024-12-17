import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialSignUp = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-800 rounded-lg hover:border-cyber-blue/50 transition-colors">
          <Github className="w-5 h-5" />
          <span className="text-sm">GitHub</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-800 rounded-lg hover:border-cyber-blue/50 transition-colors">
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialSignUp;