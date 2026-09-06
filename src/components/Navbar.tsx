import React from 'react';
import { Layers, Compass, Table2, HelpCircle, BookOpen } from 'lucide-react';
import { ApproachType } from '../types';

interface NavbarProps {
  selectedApproach: ApproachType | 'all';
  onSelectApproach: (approach: ApproachType | 'all') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ selectedApproach, onSelectApproach }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-lg tracking-wider shadow-xs">
              DS
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-slate-900 text-base sm:text-lg uppercase block leading-none">
                The Development Spectrum
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-1">
                No Code · Low Code · High Code
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a
              href="#overview"
              className="px-3 py-1.5 rounded-md hover:text-indigo-600 hover:bg-slate-100 transition-colors"
            >
              Overview
            </a>
            <a
              href="#spectrum"
              className="px-3 py-1.5 rounded-md hover:text-indigo-600 hover:bg-slate-100 transition-colors"
            >
              Spectrum
            </a>
            <a
              href="#comparison"
              className="px-3 py-1.5 rounded-md hover:text-indigo-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Table2 className="w-3.5 h-3.5 text-slate-400" />
              Comparison
            </a>
            <a
              href="#advisor"
              className="px-3 py-1.5 rounded-md hover:text-indigo-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              Advisor
            </a>
            <a
              href="#resource"
              className="px-3 py-1.5 rounded-md hover:text-indigo-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-slate-400"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              Reference
            </a>
          </nav>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold uppercase tracking-wider">
            <button
              id="filter-btn-all"
              onClick={() => onSelectApproach('all')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                selectedApproach === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              id="filter-btn-no-code"
              onClick={() => onSelectApproach('no-code')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                selectedApproach === 'no-code'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-emerald-700'
              }`}
            >
              No Code
            </button>
            <button
              id="filter-btn-low-code"
              onClick={() => onSelectApproach('low-code')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                selectedApproach === 'low-code'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-sky-700'
              }`}
            >
              Low Code
            </button>
            <button
              id="filter-btn-high-code"
              onClick={() => onSelectApproach('high-code')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                selectedApproach === 'high-code'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-indigo-700'
              }`}
            >
              High Code
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
