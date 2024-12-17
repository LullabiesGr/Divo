import React from 'react';
import AICore from './AICore';
import CommunicationWaves from './CommunicationWaves';
import LogoText from './LogoText';

const Logo = () => {
  return (
    <div className="relative flex items-center gap-3 p-2">
      <div className="relative">
        <AICore />
        <CommunicationWaves />
      </div>
      <LogoText />
    </div>
  );
};

export default Logo;