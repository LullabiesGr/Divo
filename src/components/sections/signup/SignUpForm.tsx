import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';
import SocialSignUp from './SocialSignUp';
import { validatePassword } from '../../../utils/validation';
import { businessCategories } from '../../../config/businessCategories';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: '' });
  const [filledFields, setFilledFields] = useState<Record<string, boolean>>({});

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(validatePassword(newPassword));
    updateFilledStatus('password', newPassword);
  };

  const updateFilledStatus = (field: string, value: string) => {
    setFilledFields(prev => ({
      ...prev,
      [field]: value.trim().length > 0
    }));
  };

  const getInputClassName = (field: string) => `
    w-full bg-black border rounded-lg px-4 py-3 text-white 
    placeholder-gray-500 transition-all duration-300
    ${filledFields[field] 
      ? 'border-cyber-blue/50 bg-cyber-blue/5 shadow-[0_0_10px_rgba(0,246,255,0.1)]' 
      : 'border-gray-800'
    }
    focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue
    focus:shadow-[0_0_15px_rgba(0,246,255,0.2)]
  `;

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-xl mx-auto px-4">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    autoComplete="given-name"
                    className={getInputClassName('firstName')}
                    onChange={(e) => updateFilledStatus('firstName', e.target.value)}
                    required
                  />
                  {filledFields.firstName && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-blue w-4 h-4 animate-fade-in" />
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    autoComplete="family-name"
                    className={getInputClassName('lastName')}
                    onChange={(e) => updateFilledStatus('lastName', e.target.value)}
                    required
                  />
                  {filledFields.lastName && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-blue w-4 h-4 animate-fade-in" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className={getInputClassName('email')}
                  onChange={(e) => updateFilledStatus('email', e.target.value)}
                  required
                />
                {filledFields.email && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-blue w-4 h-4 animate-fade-in" />
                )}
              </div>
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-400 mb-1">
                Business Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="business"
                  autoComplete="organization"
                  className={getInputClassName('business')}
                  onChange={(e) => updateFilledStatus('business', e.target.value)}
                  required
                />
                {filledFields.business && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-blue w-4 h-4 animate-fade-in" />
                )}
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">
                Business Category
              </label>
              <select
                id="category"
                className={getInputClassName('category')}
                onChange={(e) => updateFilledStatus('category', e.target.value)}
                required
              >
                <option value="">Select category</option>
                {businessCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="interactions" className="block text-sm font-medium text-gray-400 mb-1">
                Daily Customer Interactions
              </label>
              <select
                id="interactions"
                className={getInputClassName('interactions')}
                onChange={(e) => updateFilledStatus('interactions', e.target.value)}
              >
                <option value="">Select range</option>
                <option value="0-50">0-50 calls/day</option>
                <option value="51-200">51-200 calls/day</option>
                <option value="201-500">201-500 calls/day</option>
                <option value="500+">500+ calls/day</option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={getInputClassName('password')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordStrength.feedback && (
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <AlertCircle className="w-4 h-4 text-cyber-blue" />
                  <span className="text-gray-400">{passwordStrength.feedback}</span>
                </div>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="rounded border-gray-800 text-cyber-blue focus:ring-cyber-blue"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <a href="#" className="text-cyber-blue hover:text-white transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-cyber-blue hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-cyber-blue text-black font-medium py-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.3)]"
            >
              Create My AI Account
            </button>
          </form>

          <div className="mt-8">
            <SocialSignUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;