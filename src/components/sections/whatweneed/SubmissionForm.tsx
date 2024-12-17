import React, { useState } from 'react';
import { Upload, Calendar, ArrowRight } from 'lucide-react';

const SubmissionForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400">
              Choose the method that works best for you to share your business information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl border border-gray-800 hover:border-cyber-blue/50 transition-all duration-300 text-center hover-glow">
              <Upload className="w-8 h-8 text-cyber-blue mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Upload Files</h3>
              <p className="text-sm text-gray-400 mb-4">Share your existing documentation</p>
              <label className="cursor-pointer inline-block">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                />
                <span className="text-sm text-cyber-blue hover:text-white transition-colors">
                  Choose File
                </span>
              </label>
              {selectedFile && (
                <p className="text-xs text-gray-400 mt-2">{selectedFile.name}</p>
              )}
            </div>

            <div className="p-6 rounded-xl border border-gray-800 hover:border-cyber-blue/50 transition-all duration-300 text-center hover-glow">
              <ArrowRight className="w-8 h-8 text-cyber-blue mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Fill Questionnaire</h3>
              <p className="text-sm text-gray-400 mb-4">Complete our detailed form</p>
              <button className="text-sm text-cyber-blue hover:text-white transition-colors">
                Start Form
              </button>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 hover:border-cyber-blue/50 transition-all duration-300 text-center hover-glow">
              <Calendar className="w-8 h-8 text-cyber-blue mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Book Consultation</h3>
              <p className="text-sm text-gray-400 mb-4">Schedule a call with our team</p>
              <button className="text-sm text-cyber-blue hover:text-white transition-colors">
                Book Now
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-8">
              After submission, our team will begin building your custom AI voice agent immediately.
              You can expect it to be ready for testing within 10-14 business days.
            </p>
            <button className="px-8 py-4 bg-cyber-blue text-black font-medium rounded-lg hover:bg-white transition-all duration-300 text-lg flex items-center gap-2 mx-auto">
              Submit Your Business Info <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;