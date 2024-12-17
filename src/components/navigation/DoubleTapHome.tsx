import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';

const DoubleTapHome = () => {
  const [lastTap, setLastTap] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [taps, setTaps] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) { // Double tap threshold
      window.location.href = '/';
    }
    setLastTap(now);
    setTaps(prev => prev + 1);

    // Show hint again after single tap
    if (taps === 0) {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 2000);
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 w-full h-24 z-40 md:hidden"
      onTouchStart={handleTap}
    >
      {showHint && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/90 px-4 py-2 rounded-full border border-cyber-blue/30 flex items-center gap-2 animate-fade-in">
          <Home className="w-4 h-4 text-cyber-blue" />
          <span className="text-sm text-gray-400">Double tap for home</span>
        </div>
      )}
    </div>
  );
};

export default DoubleTapHome;