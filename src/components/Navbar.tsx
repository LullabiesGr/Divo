import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo3D from './logo/Logo3D';
import { navigationItems } from '../config/navigation';
import LoginButton from './auth/LoginButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo3D />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <LoginButton />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyber-blue p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-lg transform transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-lg uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="py-3">
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;