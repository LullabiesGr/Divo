import React, { useState, useEffect } from 'react';
import { Home, ChevronLeft } from 'lucide-react';

const HomeCorner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsVisible(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const currentX = e.touches[0].clientX;
      if (currentX - startX > 50) {
        setIsVisible(true);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 h-24 w-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`absolute top-0 left-0 bg-gradient-to-br from-cyber-blue/20 to-purple-500/20 backdrop-blur-sm rounded-br-3xl border-b border-r border-cyber-blue/30 transition-all duration-300 overflow-hidden ${
          isVisible ? 'w-24 h-24 opacity-100' : 'w-0 h-0 opacity-0'
        }`}
      >
        <button
          onClick={navigateHome}
          className="w-full h-full flex items-center justify-center group"
        >
          <div className="relative">
            <Home className="w-8 h-8 text-cyber-blue transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 animate-ping-slow opacity-50">
              <Home className="w-8 h-8 text-cyber-blue" />
            </div>
          </div>
        </button>
      </div>
      
      {!isVisible && (
        <div className="absolute top-4 left-4 text-cyber-blue/50 animate-pulse">
          <ChevronLeft className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default HomeCorner;