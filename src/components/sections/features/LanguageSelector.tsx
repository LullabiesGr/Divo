import React, { useState } from 'react';
import { Globe2, MessageSquare } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', greeting: 'Hello!' },
  { code: 'es', name: 'Spanish', greeting: '¡Hola!' },
  { code: 'fr', name: 'French', greeting: 'Bonjour!' },
  { code: 'de', name: 'German', greeting: 'Hallo!' },
  { code: 'it', name: 'Italian', greeting: 'Ciao!' },
  { code: 'pt', name: 'Portuguese', greeting: 'Olá!' },
  { code: 'ru', name: 'Russian', greeting: 'Привет!' },
  { code: 'zh', name: 'Chinese', greeting: '你好!' },
  { code: 'ja', name: 'Japanese', greeting: 'こんにちは!' },
  { code: 'ko', name: 'Korean', greeting: '안녕하세요!' }
];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setIsAnimating(true);
    setSelectedLang(lang);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            Multilingual Intelligence
          </h3>
          <p className="text-gray-400 mb-4">
            Communicate naturally in over 50 languages with native-level understanding and response
          </p>
        </div>
        
        <div className="flex-1">
          <div className="bg-black rounded-lg p-6 border border-gray-800">
            <div className="flex flex-wrap gap-2 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    selectedLang.code === lang.code
                      ? 'bg-cyber-blue text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="w-5 h-5 text-cyber-blue" />
                <span className="text-sm text-gray-400">AI Response Demo</span>
              </div>
              
              <div className={`flex items-start gap-3 transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="w-8 h-8 rounded-full bg-cyber-blue flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-xl text-white mb-2">{selectedLang.greeting}</p>
                  <p className="text-gray-400">
                    How can I assist you today in {selectedLang.name}?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;