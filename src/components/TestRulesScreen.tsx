import { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertCircle, Users, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';

export default function TestRulesScreen() {
  const { setScreen } = useApp();
  const [agreed, setAgreed] = useState(false);

  const handleStartTest = () => {
    if (agreed) {
      setScreen('interest_test');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blobs - matching home page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setScreen('home')}
            className="p-2 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-3xl font-bold text-white text-center flex-1">
            Test Rules & Regulations
          </h1>
          <div className="w-12"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
          
          {/* Test Overview */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Test Overview
            </h2>
            <p className="text-white/80 leading-relaxed">
              This assessment consists of two parts: Interest Test and Aptitude Test. 
              The results will help identify your strengths, interests, and suitable career paths 
              based on your preferences and abilities.
            </p>
          </div>

          {/* Interest Test Rules */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Interest Test Rules
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
                <p className="text-white/80">Answer honestly based on your genuine interests and preferences</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
                <p className="text-white/80">There are no right or wrong answers - choose what truly resonates with you</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
                <p className="text-white/80">Read each question carefully before selecting your response</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
                <p className="text-white/80">Take your time - there is no time limit for the interest test</p>
              </div>
            </div>
          </div>

          {/* Aptitude Test Rules */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              Aptitude Test Rules
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
                <p className="text-white/80">Time limit: 30 minutes for the complete aptitude test</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
                <p className="text-white/80">Questions cover logical reasoning, numerical ability, and verbal skills</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
                <p className="text-white/80">Each question carries equal marks - no negative marking</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
                <p className="text-white/80">Review your answers before submitting if time permits</p>
              </div>
            </div>
          </div>

          {/* General Guidelines */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              General Guidelines
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
                <p className="text-white/80">Ensure stable internet connection throughout the test</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
                <p className="text-white/80">Complete the test in a quiet environment without distractions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
                <p className="text-white/80">Do not refresh the page or use browser back button during the test</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
                <p className="text-white/80">Results will be displayed immediately after completion</p>
              </div>
            </div>
          </div>

          {/* Agreement Section */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/30 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-2"
              />
              <label htmlFor="agreement" className="text-white/80 text-sm leading-relaxed">
                I have read and understood all the rules and regulations. 
                I agree to abide by these guidelines and understand that 
                violation may result in disqualification from the assessment.
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
              <Button 
                onClick={handleStartTest}
                disabled={!agreed}
                className={!agreed ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Start Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
