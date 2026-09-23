import React from 'react';
import { ShieldCheck, HeartHandshake, Award, CheckCircle2, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Gallery with Authentic Lloyd Koebel Photography & Credentials */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100">
              <img
                src="/assets/lloyd-portrait.jpg"
                alt="Lloyd Koebel, Founder and Master Roofer of Koebel's Roofing"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#1d232c]/90 backdrop-blur-md rounded-xl text-white border border-white/10 flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-sm font-bold text-[#efebe6]">Lloyd Koebel</div>
                  <div className="text-xs text-stone-300">Founder &amp; Master Craftsperson</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-emerald-400">20+ Years</div>
                  <div className="text-[10px] text-stone-400">Hands-on Experience</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 shadow-sm">
                <img
                  src="/assets/lloyd-on-roof.jpg"
                  alt="Lloyd Koebel installing and inspecting roofing work on-site"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white drop-shadow-sm">
                    On-Site Quality Assurance
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 shadow-sm">
                <img
                  src="/assets/completed-roof-replacement.jpg"
                  alt="Completed residential roof replacement in Waterloo Region"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white drop-shadow-sm">
                    Kitchener-Waterloo Homes
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Credentials Bar */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center">
                <div className="text-lg font-extrabold text-[#434c59]">Since 2014</div>
                <div className="text-[10px] text-neutral-500 font-medium">KW Community</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center">
                <div className="text-lg font-extrabold text-amber-500">5.0 ★</div>
                <div className="text-[10px] text-neutral-500 font-medium">98 Google Reviews</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200 text-center">
                <div className="text-lg font-extrabold text-emerald-600">100%</div>
                <div className="text-[10px] text-neutral-500 font-medium">Magnet Clean Sweep</div>
              </div>
            </div>
          </div>

          {/* Authentic Story & Founder Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
              <span>About Koebel’s Roofing</span>
              <span aria-hidden="true">·</span>
              <span>Meet the Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Building Something Great Starts With Trust.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              <p>
                At Koebel’s Roofing, we believe quality starts with trust and trust is earned through consistency, care, and doing the job right every single time.
              </p>
              <p>
                Founded by <strong className="text-neutral-900 font-semibold">Lloyd Koebel</strong>, the company was built to raise the standard in the roofing industry — grounded in craftsmanship, integrity, and strong relationships. Every roof we install is treated as if it's protecting our own family, which is why homeowners across the region continue to choose us.
              </p>
              <p>
                With over <strong className="text-neutral-900 font-semibold">20 years of hands-on experience</strong> in construction and roofing, Lloyd leads the team with a simple belief: <em className="text-neutral-900 font-medium not-italic">when you care about your work, people notice.</em>
              </p>
              <p className="border-l-2 border-[#434c59] pl-4 italic text-neutral-700 bg-stone-100/70 py-2 rounded-r">
                "Our legacy is installed one home at a time, and we’re proud to continue serving the communities of Kitchener, Waterloo, and beyond with care, consistency, and craftsmanship that lasts."
                <span className="block mt-1 font-semibold text-neutral-900 not-italic text-xs">
                  — Lloyd Koebel
                </span>
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-100/80 border border-stone-200">
                <UserCheck className="w-4 h-4 text-[#434c59] shrink-0" />
                <span>Lloyd personally oversees projects</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-100/80 border border-stone-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Velux &amp; Malarkey Certified</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-100/80 border border-stone-200">
                <HeartHandshake className="w-4 h-4 text-[#434c59] shrink-0" />
                <span>Referral-driven reputation</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-100/80 border border-stone-200">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>5.0 Star rated for 10+ years</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#434c59] hover:bg-[#323943] rounded-md shadow-md transition-colors"
              >
                Schedule an Assessment With Lloyd
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
