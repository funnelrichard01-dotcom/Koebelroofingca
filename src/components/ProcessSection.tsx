import React, { useState } from 'react';
import { Calendar, FileCheck, Hammer, CheckCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { THREE_STEP_PROCESS, SIX_STEP_INSTALLATION_JOURNEY } from '../data/koebelData';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [viewMode, setViewMode] = useState<'threeStep' | 'installationDay'>('threeStep');

  return (
    <section id="process" className="py-20 bg-[#f7f5f1] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500 mb-2">
              <span>The Koebel's Way</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Start With a Conversation. End With Peace of Mind.
            </h2>
            <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed">
              You won't be left guessing. From your first call to your final inspection, we provide clear timelines, honest guidance, and reliable service without high-pressure sales pitches.
            </p>
          </div>

          {/* View Mode Toggle Switch */}
          <div className="flex items-center gap-1 p-1 bg-stone-200 rounded-lg shrink-0">
            <button
              onClick={() => setViewMode('threeStep')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'threeStep'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              The 3-Step Process
            </button>
            <button
              onClick={() => setViewMode('installationDay')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'installationDay'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Installation Day Breakdown
            </button>
          </div>
        </div>

        {/* View Mode 1: The Core 3-Step Process */}
        {viewMode === 'threeStep' && (
          <div className="grid md:grid-cols-3 gap-8">
            {THREE_STEP_PROCESS.map((item, idx) => {
              const icons = [Calendar, FileCheck, Hammer];
              const IconComponent = icons[idx];

              return (
                <div
                  key={item.step}
                  className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#434c59]/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-extrabold text-[#434c59]/30 group-hover:text-[#434c59] transition-colors tabular-nums">
                        {item.step}
                      </span>
                      <div className="p-3 bg-stone-100 rounded-lg text-[#434c59] group-hover:bg-[#434c59] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-4 border-t border-stone-100 space-y-2">
                      {item.highlights.map((point, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-500">
                      Phase {idx + 1} of 3
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Detailed 6-Step Installation Journey */}
        {viewMode === 'installationDay' && (
          <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
            <div className="mb-8 pb-4 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  What to Expect During Your Roof Installation
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Average installation duration: 2 to 4 days. Clear schedules with constant communication.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero sales pressure guarantee</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SIX_STEP_INSTALLATION_JOURNEY.map((stepItem, i) => (
                <div key={i} className="p-5 rounded-lg bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#434c59] tracking-wider uppercase">
                      {stepItem.step}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">0{i + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {stepItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process CTA Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#434c59] hover:bg-[#323943] rounded-md shadow-md transition-all active:scale-[0.98]"
          >
            <span>Book Your Step 01 In-Person Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
