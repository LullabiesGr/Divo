import React from 'react';
import SignUpHero from '../components/sections/signup/SignUpHero';
import SignUpForm from '../components/sections/signup/SignUpForm';
import TrustElements from '../components/sections/signup/TrustElements';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-black">
      <SignUpHero />
      <SignUpForm />
      <TrustElements />
    </div>
  );
};

export default SignUp;