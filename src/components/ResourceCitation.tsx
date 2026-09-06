import React from 'react';
import { BookOpen, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const ResourceCitation: React.FC = () => {
  return (
    <section id="resource" className="py-14 bg-white border-t-2 border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border-2 border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                <BookOpen className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Reference & Provenance
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase italic tracking-wide text-slate-900 mt-0.5">
                  High Code vs. Low Code vs. No Code: Navigating the Best Coding Solutions for Your Needs
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Authoritative Guide published by <strong className="text-slate-900 font-bold">NinjaOne</strong>
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Source
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-lg bg-white border border-slate-200">
              <h4 className="font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                No Code Agility
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Empowers non-technical business operators to launch functional apps, landing sites, and internal portals in hours without engineering bottlenecks.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-slate-200">
              <h4 className="font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5 mb-1.5 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                Low Code Velocity
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Unites citizen developers and engineers, accelerating standard business workflows with visual drag-and-drop while retaining script-level customization.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-slate-200">
              <h4 className="font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5 mb-1.5 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                High Code Mastery
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Essential for core proprietary logic, high-throughput architectures, unconstrained security, and bespoke enterprise performance.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 font-medium">
            <span>
              Source: NinjaOne Knowledge Center · Software Engineering Best Practices
            </span>
            <span className="text-slate-400">
              Spectrum guide curated from official reference data
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
