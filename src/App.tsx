/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Code2,
  Cpu,
  ArrowDown,
  Layers,
  CheckCircle2,
  Table2,
  Sliders,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { ApproachType } from './types';
import { APPROACHES } from './data/spectrumData';
import { Navbar } from './components/Navbar';
import { SpectrumVisualizer } from './components/SpectrumVisualizer';
import { ApproachCard } from './components/ApproachCard';
import { ComparisonTable } from './components/ComparisonTable';
import { DecisionWizard } from './components/DecisionWizard';
import { ResourceCitation } from './components/ResourceCitation';

export default function App() {
  const [selectedApproach, setSelectedApproach] = useState<ApproachType | 'all'>('all');
  const [activeTabApproach, setActiveTabApproach] = useState<ApproachType>('low-code');

  const handleSelectApproach = (approach: ApproachType | 'all') => {
    setSelectedApproach(approach);
    if (approach !== 'all') {
      setActiveTabApproach(approach);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        selectedApproach={selectedApproach}
        onSelectApproach={handleSelectApproach}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero & Overview Section */}
        <section id="overview" className="pt-14 pb-16 bg-white border-b-2 border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-20 h-1 bg-indigo-600 mb-6"></div>

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
                Engineering Spectrum & Strategy
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase italic">
                No Code, Low Code, <br className="hidden sm:inline" />
                and High Code
              </h1>

              {/* Exact Opening Quote from User Prompt */}
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                The terms <strong className="font-bold text-slate-900">“No Code,”</strong>{' '}
                <strong className="font-bold text-slate-900">“Low Code,”</strong> and{' '}
                <strong className="font-bold text-slate-900">“High Code”</strong> represent a spectrum of approaches to software development, each catering to different users, project complexities, and desired levels of control.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#comparison"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Table2 className="w-4 h-4" />
                  View Comparison Table
                </a>
                <a
                  href="#spectrum"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Explore Spectrum
                </a>
                <a
                  href="#advisor"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  Decision Advisor
                </a>
              </div>
            </div>

            {/* Prompt Bullet Summaries */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t-2 border-slate-200">
              {/* High Code Overview */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-colors shadow-2xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 border-2 border-indigo-200 flex items-center justify-center font-bold">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase italic text-indigo-700 text-lg">High Code</h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Traditional Development</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Is the conventional method of software development. It involves writing code from scratch using programming languages (like Python, Java, C++, JavaScript) and frameworks.
                </p>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between font-bold uppercase tracking-wider">
                  <span>Control: Unlimited</span>
                  <span className="text-indigo-600">Manual Dev</span>
                </div>
              </div>

              {/* Low Code Overview */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors shadow-2xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 border-2 border-sky-200 flex items-center justify-center font-bold">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase italic text-sky-700 text-lg">Low Code</h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Accelerated Development</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Platforms are designed to speed up the development process by using visual, drag-and-drop tools and pre-built components. They significantly reduce the need for manual coding, but still allow custom code when needed for specific functionalities.
                </p>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between font-bold uppercase tracking-wider">
                  <span>Control: Hybrid</span>
                  <span className="text-sky-600">Fast Dev</span>
                </div>
              </div>

              {/* No Code Overview */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors shadow-2xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-200 flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase italic text-emerald-700 text-lg">No Code</h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Visual UI Builders</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Platforms take the concept of visual development a step further, removing the need for any coding whatsoever. The entire application is built using a graphical user interface and pre-built features.
                </p>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between font-bold uppercase tracking-wider">
                  <span>Control: Guided</span>
                  <span className="text-emerald-600">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Continuum Slider */}
        <SpectrumVisualizer
          currentApproach={activeTabApproach}
          onSelectApproach={(approach) => {
            setActiveTabApproach(approach);
            setSelectedApproach(approach);
          }}
        />

        {/* Detailed Breakdown Cards */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="w-16 h-1 bg-indigo-600 mb-3"></div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
                  Technical Archetypes in Depth
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-1 leading-relaxed">
                  Inspect specifications, prerequisites, capabilities, and delivery tradeoffs across each paradigm.
                </p>
              </div>

              {selectedApproach !== 'all' && (
                <button
                  onClick={() => setSelectedApproach('all')}
                  className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 underline self-start sm:self-auto"
                >
                  Show All Approaches
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(selectedApproach === 'all'
                ? (['no-code', 'low-code', 'high-code'] as ApproachType[])
                : [selectedApproach]
              ).map((id) => (
                <ApproachCard
                  key={id}
                  data={APPROACHES[id]}
                  isActive={activeTabApproach === id}
                  onSelect={() => {
                    setActiveTabApproach(id);
                    setSelectedApproach(id);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Complete Comparison Matrix */}
        <ComparisonTable
          selectedApproach={selectedApproach}
          onSelectApproach={handleSelectApproach}
        />

        {/* Interactive Decision Wizard */}
        <DecisionWizard
          onSelectApproach={(approach) => {
            setActiveTabApproach(approach);
            setSelectedApproach(approach);
            const el = document.getElementById(`card-${approach}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Resource Citation Section */}
        <ResourceCitation />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t-2 border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                <Layers className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="font-black uppercase italic text-white text-base tracking-wide block">
                  Software Development Spectrum Guide
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  No Code · Low Code · High Code
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-400 text-center md:text-right space-y-1">
              <p className="font-semibold text-slate-300">
                Reference: High Code vs. Low Code vs. No Code: Navigating the Best Coding Solutions for Your Needs — NinjaOne
              </p>
              <p className="text-slate-500">
                Structured decision framework for evaluating software engineering development models.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
