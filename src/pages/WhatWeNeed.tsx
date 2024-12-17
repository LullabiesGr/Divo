import React from 'react';
import WhatWeNeedHero from '../components/sections/whatweneed/Hero';
import RequirementsList from '../components/sections/whatweneed/RequirementsList';
import ProcessExplanation from '../components/sections/whatweneed/ProcessExplanation';
import SubmissionForm from '../components/sections/whatweneed/SubmissionForm';

const WhatWeNeed = () => {
  return (
    <div className="min-h-screen bg-black">
      <WhatWeNeedHero />
      <RequirementsList />
      <ProcessExplanation />
      <SubmissionForm />
    </div>
  );
};

export default WhatWeNeed;