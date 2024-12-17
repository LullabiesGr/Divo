import React, { useState } from 'react';
import { LogIn, Key, X } from 'lucide-react';

const LoginButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const navigateToSignUp = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="relative">
      {/* Login Button */}
      <button
        onClick={handleLogin}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group px-4 py-2 rounded-lg border border-cyber-blue overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 transform transition-transform duration-300 group-hover:scale-110" />
        <div className="relative flex items-center gap-2">
          <LogIn className={`w-4 h-4 transition-transform duration-300 ${
            isHovered ? 'rotate-12' : ''
          }`} />
          <span className="text-sm uppercase tracking-wider">Login</span>
        </div>
      </button>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-gray-900 rounded-xl border border-cyber-blue/30 p-8 w-full max-w-md transform transition-all animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-blue/10 mb-4">
                <Key className="w-8 h-8 text-cyber-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
              <p className="text-gray-400">Sign in to access your AI voice agent</p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-800 text-cyber-blue focus:ring-cyber-blue" />
                  <span className="ml-2 text-sm text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-sm text-cyber-blue hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-cyber-blue text-black font-medium py-3 rounded-lg hover:bg-white transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <button 
                  onClick={navigateToSignUp}
                  className="text-cyber-blue hover:text-white transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginButton;