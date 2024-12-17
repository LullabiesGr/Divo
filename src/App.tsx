import React from 'react';
import Navbar from './components/Navbar';
import HomeCorner from './components/navigation/HomeCorner';
import DoubleTapHome from './components/navigation/DoubleTapHome';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Demo from './components/sections/Demo';
import Pricing from './pages/Pricing';
import Vision from './pages/Vision';
import WhatWeNeed from './pages/WhatWeNeed';
import SignUp from './pages/SignUp';
import ClosingCTA from './components/sections/ClosingCTA';
import Footer from './components/Footer';

function App() {
  const path = window.location.pathname;
  const isHomePage = path === '/';

  const renderContent = () => {
    switch (path) {
      case '/signup':
        return <SignUp />;
      case '/what-we-need':
        return <WhatWeNeed />;
      case '/pricing':
        return <Pricing />;
      case '/about':
        return <Vision />;
      default:
        return (
          <>
            <Hero />
            <ProblemSolution />
            <Features />
            <Testimonials />
            <Demo />
            <ClosingCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {!isHomePage && (
        <>
          <HomeCorner />
          <DoubleTapHome />
        </>
      )}
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;