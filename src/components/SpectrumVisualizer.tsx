import React, { useState } from 'react';
import { Sparkles, Code2, Cpu, Zap, Sliders, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ApproachType } from '../types';
import { APPROACHES } from '../data/spectrumData';

interface SpectrumVisualizerProps {
  currentApproach: ApproachType;
  onSelectApproach: (approach: ApproachType) => void;
}

export const SpectrumVisualizer: React.FC<SpectrumVisualizerProps> = ({
  currentApproach,
  onSelectApproach,
}) => {
  // sliderValue from 0 to 100
  const [sliderValue, setSliderValue] = useState<number>(
    currentApproach === 'no-code' ? 0 : currentApproach === 'low-code' ? 50 : 100
  );

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSliderValue(val);
    if (val < 35) {
      onSelectApproach('no-code');
    } else if (val < 68) {
      onSelectApproach('low-code');
    } else {
      onSelectApproach('high-code');
    }
  };

  const handlePillClick = (approach: ApproachType) => {
    onSelectApproach(approach);
    if (approach === 'no-code') setSliderValue(0);
    if (approach === 'low-code') setSliderValue(50);
    if (approach === 'high-code') setSliderValue(100);
  };

  const activeData = APPROACHES[currentApproach];

  return (
    <section id="spectrum" className="py-14 bg-slate-50 border-y-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-16 h-1 bg-indigo-600 mb-4 mx-auto"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
            The Strategic Spectrum
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            From visual abstraction to manual implementation, defining the balance between speed, control, and technical depth.
          </p>
        </div>

        {/* Interactive Slider Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {/* Quick Switcher Tabs */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            <button
              id="spectrum-btn-nocode"
              onClick={() => handlePillClick('no-code')}
              className={`p-4 rounded-lg border text-left transition-all flex flex-col justify-between ${
                currentApproach === 'no-code'
                  ? 'border-2 border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-emerald-50/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  Level 01
                </span>
                <Sparkles className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-black uppercase italic text-slate-900 text-base sm:text-lg">No Code</h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Visual & Instant</p>
              </div>
            </button>

            <button
              id="spectrum-btn-lowcode"
              onClick={() => handlePillClick('low-code')}
              className={`p-4 rounded-lg border text-left transition-all flex flex-col justify-between ${
                currentApproach === 'low-code'
                  ? 'border-2 border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-sky-50/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700">
                  Level 02
                </span>
                <Code2 className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <h4 className="font-black uppercase italic text-slate-900 text-base sm:text-lg">Low Code</h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Hybrid & Accelerated</p>
              </div>
            </button>

            <button
              id="spectrum-btn-highcode"
              onClick={() => handlePillClick('high-code')}
              className={`p-4 rounded-lg border text-left transition-all flex flex-col justify-between ${
                currentApproach === 'high-code'
                  ? 'border-2 border-indigo-500 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-indigo-50/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-700">
                  Level 03
                </span>
                <Cpu className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-black uppercase italic text-slate-900 text-base sm:text-lg">High Code</h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Manual & Comprehensive</p>
              </div>
            </button>
          </div>

          {/* Continuum Track with Range Input */}
          <div className="mb-8 p-5 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Zap className="w-3.5 h-3.5" /> High Speed
              </span>
              <span className="text-slate-400 font-normal normal-case">Interactive Spectrum Continuum</span>
              <span className="flex items-center gap-1.5 text-indigo-700">
                <Sliders className="w-3.5 h-3.5" /> Unlimited Control
              </span>
            </div>

            <div className="relative flex items-center">
              <input
                id="spectrum-range-slider"
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                aria-label="Development approach spectrum slider"
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-3 text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-3">
              <span className={currentApproach === 'no-code' ? 'font-extrabold text-emerald-700' : ''}>
                0% Manual Code
              </span>
              <span className={currentApproach === 'low-code' ? 'font-extrabold text-sky-700' : ''}>
                Hybrid Building
              </span>
              <span className={currentApproach === 'high-code' ? 'font-extrabold text-indigo-700' : ''}>
                100% Bespoke Code
              </span>
            </div>
          </div>

          {/* Dynamic Highlight Panel for Selected Approach */}
          <div className="border-2 border-slate-200 rounded-lg p-5 sm:p-6 bg-slate-50/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-white text-base shadow-xs ${
                    currentApproach === 'no-code'
                      ? 'bg-emerald-600'
                      : currentApproach === 'low-code'
                      ? 'bg-sky-600'
                      : 'bg-indigo-600'
                  }`}
                >
                  {currentApproach === 'no-code' ? 'NC' : currentApproach === 'low-code' ? 'LC' : 'HC'}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic tracking-wide text-slate-900">
                    {activeData.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {activeData.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="px-3 py-1 rounded bg-slate-200 text-slate-700">
                  Target: {activeData.user}
                </span>
                <span className="px-3 py-1 rounded bg-slate-200 text-slate-700">
                  Velocity: {activeData.developmentSpeed}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-700 mt-4 leading-relaxed font-medium italic border-l-4 pl-3.5 border-indigo-600">
              "{activeData.definition}"
            </p>

            {/* Metrics Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-200">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-slate-400" />
                    Delivery Velocity
                  </span>
                  <span>{activeData.developmentSpeed}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${(activeData.speedRating / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Sliders className="w-3.5 h-3.5 text-slate-400" />
                    Flexibility
                  </span>
                  <span>{activeData.flexibility.split(',')[0]}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                    style={{ width: `${(activeData.flexibilityRating / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    Skill Requirement
                  </span>
                  <span>{activeData.skillsRequired}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-300"
                    style={{ width: `${(activeData.skillRequirementRating / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
