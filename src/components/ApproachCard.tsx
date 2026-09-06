import React from 'react';
import {
  Sparkles,
  Code2,
  Cpu,
  User,
  GraduationCap,
  Zap,
  Sliders,
  Briefcase,
  Layers,
  Check,
  AlertTriangle,
} from 'lucide-react';
import { ApproachInfo } from '../types';

interface ApproachCardProps {
  data: ApproachInfo;
  isActive: boolean;
  onSelect: () => void;
}

export const ApproachCard: React.FC<ApproachCardProps> = ({ data, isActive, onSelect }) => {
  const getIcon = () => {
    switch (data.id) {
      case 'no-code':
        return <Sparkles className="w-8 h-8 text-emerald-600" />;
      case 'low-code':
        return <Code2 className="w-8 h-8 text-sky-600" />;
      case 'high-code':
        return <Cpu className="w-8 h-8 text-indigo-600" />;
    }
  };

  const getCircleStyles = () => {
    switch (data.id) {
      case 'no-code':
        return 'bg-emerald-100 text-emerald-600 border-2 border-emerald-200';
      case 'low-code':
        return 'bg-sky-100 text-sky-600 border-2 border-sky-200';
      case 'high-code':
        return 'bg-indigo-100 text-indigo-600 border-2 border-indigo-200';
    }
  };

  const getTitleColor = () => {
    switch (data.id) {
      case 'no-code':
        return 'text-emerald-700';
      case 'low-code':
        return 'text-sky-700';
      case 'high-code':
        return 'text-indigo-700';
    }
  };

  const getHoverBg = () => {
    switch (data.id) {
      case 'no-code':
        return 'hover:bg-emerald-50/40';
      case 'low-code':
        return 'hover:bg-sky-50/40';
      case 'high-code':
        return 'hover:bg-indigo-50/40';
    }
  };

  const getSpeedBadge = () => {
    switch (data.id) {
      case 'no-code':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      case 'low-code':
        return 'bg-sky-100 text-sky-700 border border-sky-200';
      case 'high-code':
        return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  return (
    <div
      id={`card-${data.id}`}
      onClick={onSelect}
      className={`rounded-xl border transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 cursor-pointer ${
        isActive
          ? 'bg-white shadow-xl border-slate-900 ring-2 ring-slate-900/10'
          : `bg-white border-slate-200 shadow-xs ${getHoverBg()}`
      }`}
    >
      <div>
        {/* Circle icon and header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getCircleStyles()}`}
          >
            {getIcon()}
          </div>
          <h3 className={`text-2xl font-black uppercase italic tracking-wide mb-1 ${getTitleColor()}`}>
            {data.title}
          </h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {data.subtitle}
          </p>
        </div>

        {/* Verbatim Definition Quote */}
        <div className="mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
            Core Definition
          </span>
          <p className="font-medium">{data.definition}</p>
        </div>

        {/* Specifications Grid */}
        <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
          <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>Primary User</span>
            </div>
            <span className="font-semibold text-slate-900 text-right">{data.user}</span>
          </div>

          <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Required Skills</span>
            </div>
            <span className="font-semibold text-slate-900 text-right">{data.skillsRequired}</span>
          </div>

          <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Dev Speed</span>
            </div>
            <span className={`px-2.5 py-0.5 rounded-md font-bold text-xs ${getSpeedBadge()}`}>
              {data.developmentSpeed}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              <span>Flexibility</span>
            </div>
            <span className="text-slate-600 text-right max-w-[55%]">{data.flexibility}</span>
          </div>

          <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Primary Use Cases</span>
            </div>
            <ul className="list-disc list-inside text-slate-600 text-xs pl-1 space-y-0.5">
              {data.useCases.map((uc, i) => (
                <li key={i}>{uc}</li>
              ))}
            </ul>
          </div>

          {/* Platform Example Box from Geometric Balance Design */}
          <div className="pt-2 w-full">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                Platform Example
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {data.examplePlatforms.map((plat, i) => (
                  <span
                    key={i}
                    className="inline-block px-2 py-0.5 rounded bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-2xs"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pros & Cons / Tradeoffs */}
      <div className="pt-4 border-t border-slate-200 grid grid-cols-1 gap-2.5">
        <div className="text-xs">
          <span className="font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-0.5">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            Key Strength
          </span>
          <p className="text-slate-600 leading-relaxed">{data.pros[0]}</p>
        </div>

        <div className="text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5 mb-0.5">
            <AlertTriangle className="w-3.5 h-3.5 text-slate-500" />
            Main Trade-off
          </span>
          <p className="text-slate-600 leading-relaxed">{data.cons[0]}</p>
        </div>
      </div>
    </div>
  );
};
