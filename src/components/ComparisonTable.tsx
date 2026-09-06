import React, { useState } from 'react';
import {
  Table2,
  Search,
  Check,
  User,
  GraduationCap,
  Zap,
  Sliders,
  Briefcase,
  Layers,
  Sparkles,
  Code2,
  Cpu,
} from 'lucide-react';
import { ApproachType, ComparisonRow } from '../types';
import { COMPARISON_ROWS } from '../data/spectrumData';

interface ComparisonTableProps {
  selectedApproach: ApproachType | 'all';
  onSelectApproach: (approach: ApproachType | 'all') => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  selectedApproach,
  onSelectApproach,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Target User':
        return <User className="w-4 h-4 text-stone-500" />;
      case 'Skills Required':
        return <GraduationCap className="w-4 h-4 text-stone-500" />;
      case 'Development Speed':
        return <Zap className="w-4 h-4 text-stone-500" />;
      case 'Flexibility & Control':
        return <Sliders className="w-4 h-4 text-stone-500" />;
      case 'Typical Use Cases':
        return <Briefcase className="w-4 h-4 text-stone-500" />;
      case 'Example Platforms & Tools':
        return <Layers className="w-4 h-4 text-stone-500" />;
      default:
        return <Table2 className="w-4 h-4 text-stone-500" />;
    }
  };

  const filteredRows = COMPARISON_ROWS.filter((row) => {
    const q = searchQuery.toLowerCase();
    return (
      row.feature.toLowerCase().includes(q) ||
      row.noCode.toLowerCase().includes(q) ||
      row.lowCode.toLowerCase().includes(q) ||
      row.highCode.toLowerCase().includes(q) ||
      row.description.toLowerCase().includes(q)
    );
  });

  const handleCopySummary = () => {
    const text = COMPARISON_ROWS.map(
      (r) => `${r.feature}:\n  No Code: ${r.noCode}\n  Low Code: ${r.lowCode}\n  High Code: ${r.highCode}`
    ).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="comparison" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="w-16 h-1 bg-indigo-600 mb-3"></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
              Feature Comparison Matrix
            </h2>
            <p className="mt-2 text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
              Direct technical evaluation across target user, prerequisite skillset, delivery speed, and system flexibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter features..."
                className="w-full sm:w-56 pl-9 pr-3 py-2 text-xs font-semibold uppercase tracking-wider bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800"
              />
            </div>

            <button
              id="copy-matrix-btn"
              onClick={handleCopySummary}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  Copied Text
                </>
              ) : (
                <>Copy Matrix</>
              )}
            </button>
          </div>
        </div>

        {/* Comparison Table for Tablet & Desktop */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-200 shadow-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/80 border-b-2 border-slate-200">
                <th className="p-4 sm:p-5 font-bold text-xs uppercase tracking-widest text-slate-500 w-1/4">
                  Category Features
                </th>
                <th
                  onClick={() => onSelectApproach(selectedApproach === 'no-code' ? 'all' : 'no-code')}
                  className={`p-4 sm:p-5 cursor-pointer transition-colors w-1/4 ${
                    selectedApproach === 'no-code'
                      ? 'bg-emerald-50 text-emerald-950 border-x-2 border-emerald-300'
                      : 'text-slate-900 hover:bg-emerald-50/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="font-black uppercase italic text-lg text-emerald-700">No Code</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-0.5">
                    Non-technical users
                  </span>
                </th>
                <th
                  onClick={() => onSelectApproach(selectedApproach === 'low-code' ? 'all' : 'low-code')}
                  className={`p-4 sm:p-5 cursor-pointer transition-colors w-1/4 ${
                    selectedApproach === 'low-code'
                      ? 'bg-sky-50 text-sky-950 border-x-2 border-sky-300'
                      : 'text-slate-900 hover:bg-sky-50/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-sky-600" />
                    <span className="font-black uppercase italic text-lg text-sky-700">Low Code</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-0.5">
                    Citizen & pro devs
                  </span>
                </th>
                <th
                  onClick={() => onSelectApproach(selectedApproach === 'high-code' ? 'all' : 'high-code')}
                  className={`p-4 sm:p-5 cursor-pointer transition-colors w-1/4 ${
                    selectedApproach === 'high-code'
                      ? 'bg-indigo-50 text-indigo-950 border-x-2 border-indigo-300'
                      : 'text-slate-900 hover:bg-indigo-50/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-600" />
                    <span className="font-black uppercase italic text-lg text-indigo-700">High Code</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-0.5">
                    Professional programmers
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredRows.map((row: ComparisonRow, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/60 transition-colors"
                >
                  <td className="p-4 sm:p-5 align-top bg-slate-50/40 border-r border-slate-200">
                    <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-slate-700">
                      {getFeatureIcon(row.feature)}
                      <span>{row.feature}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{row.description}</p>
                  </td>

                  {/* No Code cell */}
                  <td
                    className={`p-4 sm:p-5 align-top ${
                      selectedApproach === 'no-code'
                        ? 'bg-emerald-50/30 border-x-2 border-emerald-300'
                        : ''
                    }`}
                  >
                    <div className="text-slate-800 font-medium">
                      {row.feature === 'Development Speed' ? (
                        <span className="inline-block text-emerald-600 font-bold px-3 py-1 bg-emerald-100 border border-emerald-200 rounded text-xs">
                          {row.noCode}
                        </span>
                      ) : row.feature === 'Skills Required' ? (
                        <span className="inline-block text-slate-700 font-bold px-3 py-1 bg-slate-100 border border-slate-200 rounded text-xs">
                          {row.noCode}
                        </span>
                      ) : (
                        row.noCode
                      )}
                    </div>
                  </td>

                  {/* Low Code cell */}
                  <td
                    className={`p-4 sm:p-5 align-top ${
                      selectedApproach === 'low-code'
                        ? 'bg-sky-50/30 border-x-2 border-sky-300'
                        : ''
                    }`}
                  >
                    <div className="text-slate-800 font-medium">
                      {row.feature === 'Development Speed' ? (
                        <span className="inline-block text-sky-600 font-bold px-3 py-1 bg-sky-100 border border-sky-200 rounded text-xs">
                          {row.lowCode}
                        </span>
                      ) : row.feature === 'Skills Required' ? (
                        <span className="inline-block text-slate-700 font-bold px-3 py-1 bg-slate-100 border border-slate-200 rounded text-xs">
                          {row.lowCode}
                        </span>
                      ) : (
                        row.lowCode
                      )}
                    </div>
                  </td>

                  {/* High Code cell */}
                  <td
                    className={`p-4 sm:p-5 align-top ${
                      selectedApproach === 'high-code'
                        ? 'bg-indigo-50/30 border-x-2 border-indigo-300'
                        : ''
                    }`}
                  >
                    <div className="text-slate-800 font-medium">
                      {row.feature === 'Development Speed' ? (
                        <span className="inline-block text-slate-500 font-bold px-3 py-1 bg-slate-100 border border-slate-200 rounded text-xs">
                          {row.highCode}
                        </span>
                      ) : row.feature === 'Skills Required' ? (
                        <span className="inline-block text-slate-700 font-bold px-3 py-1 bg-slate-100 border border-slate-200 rounded text-xs">
                          {row.highCode}
                        </span>
                      ) : (
                        row.highCode
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRows.length === 0 && (
          <div className="text-center py-10 text-slate-400 text-sm font-medium">
            No matching features found for "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
