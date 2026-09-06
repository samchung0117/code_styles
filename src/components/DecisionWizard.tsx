import React, { useState } from 'react';
import { HelpCircle, ArrowRight, RotateCcw, CheckCircle, Sparkles, Code2, Cpu } from 'lucide-react';
import { ApproachType } from '../types';
import { QUIZ_QUESTIONS, APPROACHES } from '../data/spectrumData';

interface DecisionWizardProps {
  onSelectApproach: (approach: ApproachType) => void;
}

export const DecisionWizard: React.FC<DecisionWizardProps> = ({ onSelectApproach }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, ApproachType>>({});
  const [recommendation, setRecommendation] = useState<ApproachType | null>(null);

  const handleSelectOption = (target: ApproachType) => {
    const updatedAnswers = { ...answers, [currentStep]: target };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate winner
      const counts: Record<ApproachType, number> = {
        'no-code': 0,
        'low-code': 0,
        'high-code': 0,
      };
      (Object.values(updatedAnswers) as ApproachType[]).forEach((t: ApproachType) => {
        counts[t] = (counts[t] || 0) + 1;
      });

      let winner: ApproachType = 'low-code';
      let maxCount = -1;
      (Object.keys(counts) as ApproachType[]).forEach((key) => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          winner = key;
        }
      });
      setRecommendation(winner);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="advisor" className="py-14 bg-slate-50 border-t-2 border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-1 bg-indigo-600 mb-3 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
            Strategic Decision Navigator
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed">
            Answer 3 targeted project questions to identify the optimal development approach for your velocity and scale.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {!recommendation ? (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <div className="flex gap-1.5">
                  {QUIZ_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentStep
                          ? 'w-8 bg-indigo-600'
                          : idx < currentStep
                          ? 'w-4 bg-slate-400'
                          : 'w-4 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-black uppercase italic text-xl sm:text-2xl text-slate-900 mb-6">
                {currentQ.question}
              </h3>

              <div className="space-y-3">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.target)}
                    className="w-full text-left p-4 sm:p-5 rounded-lg border border-slate-200 hover:border-indigo-400 hover:bg-slate-50/80 transition-all group flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                        {opt.label}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-lg mx-auto py-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${
                    recommendation === 'no-code'
                      ? 'bg-emerald-100 border-emerald-200 text-emerald-600'
                      : recommendation === 'low-code'
                      ? 'bg-sky-100 border-sky-200 text-sky-600'
                      : 'bg-indigo-100 border-indigo-200 text-indigo-600'
                  }`}
                >
                  {recommendation === 'no-code' && <Sparkles className="w-8 h-8" />}
                  {recommendation === 'low-code' && <Code2 className="w-8 h-8" />}
                  {recommendation === 'high-code' && <Cpu className="w-8 h-8" />}
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Optimal Recommendation
                </span>
                <h3
                  className={`text-2xl sm:text-3xl font-black uppercase italic tracking-wide mt-1 ${
                    recommendation === 'no-code'
                      ? 'text-emerald-700'
                      : recommendation === 'low-code'
                      ? 'text-sky-700'
                      : 'text-indigo-700'
                  }`}
                >
                  {APPROACHES[recommendation].title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                  {APPROACHES[recommendation].subtitle}
                </p>

                <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-sm text-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Evaluation Rationale:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                    {APPROACHES[recommendation].summary}
                  </p>
                  <div className="pt-2 pl-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Recommended Tooling:
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {APPROACHES[recommendation].examplePlatforms.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                  <button
                    onClick={() => onSelectApproach(recommendation)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Explore {APPROACHES[recommendation].title}
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Assessment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
