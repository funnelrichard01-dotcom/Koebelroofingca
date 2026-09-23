import React from 'react';
import { Calendar, FileText, Phone, Star, Shield, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface HeroProps {
  onOpenConsultation: (type?: 'consultation' | 'quote' | 'discovery_call') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-[#1d232c] text-white overflow-hidden border-b border-stone-800">
      {/* Background Photography with measured gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/completed-roof-replacement.jpg"
          alt="Premium architectural roof replacement in Kitchener Waterloo"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171b22] via-[#1d232c]/90 to-[#222934]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d232c] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Main Value Proposition Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-300">
              <span className="text-[#efebe6]">Premium Roofing Solutions</span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span>Kitchener &amp; Waterloo</span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span className="text-emerald-400">Since 2014</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Protecting Homes With Integrity.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              Where craftsmanship meets community trust. We believe your roof should do more than just shield your home—it should bring complete peace of mind. For over two decades, founder Lloyd Koebel has delivered premium roofing solutions rooted in integrity, transparency, and care.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Velux &amp; Malarkey Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Sales Pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Spotless Magnet Cleanup</span>
              </div>
            </div>

            {/* Strategic CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={() => onOpenConsultation('consultation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#1a2027] bg-[#efebe6] hover:bg-white rounded-md shadow-lg transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Free Consultation</span>
              </button>

              <button
                onClick={() => onOpenConsultation('quote')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-colors"
              >
                <FileText className="w-4 h-4 text-stone-300" />
                <span>Get a Detailed Quote</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-stone-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Claim to Proof: Verified Reviews Indicator */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-400">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Star Google Rating</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>98 Verified Homeowner Reviews</span>
            </div>
          </div>

          {/* Focal Proof Card / Trust Anchor */}
          <div className="lg:col-span-5">
            <div className="bg-[#262e3a]/90 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="flex items-start justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                    Kitchener-Waterloo's Trusted Roofer
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    Direct Owner Accountability
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-stone-200">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-3.5 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl font-extrabold text-[#efebe6] tabular-nums">2014</div>
                  <div className="text-xs text-stone-400 mt-0.5">Protecting Waterloo Region Homes</div>
                </div>

                <div className="p-3.5 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl font-extrabold text-[#efebe6] tabular-nums">20+ Yrs</div>
                  <div className="text-xs text-stone-400 mt-0.5">Lloyd Koebel's Hands-On Craft</div>
                </div>

                <div className="p-3.5 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl font-extrabold text-emerald-400 tabular-nums">100%</div>
                  <div className="text-xs text-stone-400 mt-0.5">Magnetic Nail Clean-Up Guarantee</div>
                </div>

                <div className="p-3.5 bg-black/20 rounded-lg border border-white/5">
                  <div className="text-2xl font-extrabold text-amber-400 tabular-nums">5.0 ★</div>
                  <div className="text-xs text-stone-400 mt-0.5">98 Verified Google Reviews</div>
                </div>
              </div>

              {/* Founder quote banner */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-3">
                <img
                  src="/assets/lloyd-portrait.jpg"
                  alt="Lloyd Koebel, Founder of Koebel's Roofing"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#efebe6]/40 shrink-0"
                />
                <div className="text-xs">
                  <p className="text-stone-300 italic line-clamp-2">
                    "Every roof we install is treated as if it's protecting our own family."
                  </p>
                  <p className="text-stone-400 font-semibold mt-0.5">
                    — Lloyd Koebel, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
