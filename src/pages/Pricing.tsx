import React from 'react';
import PricingHero from '../components/sections/pricing/PricingHero';
import PricingTable from '../components/sections/pricing/PricingTable';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black">
      <PricingHero />
      <PricingTable />
    </div>
  );
};

export default Pricing;