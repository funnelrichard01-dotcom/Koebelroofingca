import React, { useState } from 'react';
import { 
  Check, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  X,
  Home,
  Wrench,
  CloudLightning,
  Building2,
  SunMedium,
  Wind
} from 'lucide-react';
import { SERVICES_DATA } from '../data/koebelData';
import { ServiceItem } from '../types';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'roof-replacements': <Home className="w-6 h-6 text-[#434c59]" />,
  'roof-repairs': <Wrench className="w-6 h-6 text-[#434c59]" />,
  'leak-repairs-storm-damage': <CloudLightning className="w-6 h-6 text-[#434c59]" />,
  'new-roof-construction': <Building2 className="w-6 h-6 text-[#434c59]" />,
  'skylights-sun-tunnels': <SunMedium className="w-6 h-6 text-[#434c59]" />,
  'vents-gutters': <Wind className="w-6 h-6 text-[#434c59]" />,
};

interface ServicesSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => {
        if (selectedCategory === 'replacement') return s.category === 'replacement';
        if (selectedCategory === 'repair') return s.category === 'repair';
        if (selectedCategory === 'construction') return s.category === 'construction';
        if (selectedCategory === 'skylights') return s.category === 'skylights';
        if (selectedCategory === 'components') return s.category === 'components';
        return true;
      });

  return (
    <section id="services" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Our Roofing Services</span>
            <span aria-hidden="true">·</span>
            <span>Kitchener - Waterloo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Craftsmanship That Lasts. Solutions Built for Your Home.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
            We specialize in premium roofing services that protect your home and boost its value. From complete replacements to precision skylight installations, every job is treated with the same care we’d give our own families.
          </p>
        </div>

        {/* Interactive Filter Controls - Functional buttons adhering to design constitution */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg max-w-fit mb-10 overflow-x-auto">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'replacement', label: 'Roof Replacements' },
            { id: 'repair', label: 'Repairs & Storm Damage' },
            { id: 'construction', label: 'New Construction' },
            { id: 'skylights', label: 'Skylights & Sun Tunnels' },
            { id: 'components', label: 'Vents & Gutters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-[#434c59] text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-stone-300/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group"
            >
              {/* Authentic Work Photography Frame */}
              <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-[#1d232c]/85 text-stone-200 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded backdrop-blur-sm shadow-xs">
                  {service.tag}
                </div>
                {service.certifications && (
                  <div className="absolute top-3 right-3 bg-emerald-950/85 text-emerald-200 text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{service.certifications[0]}</span>
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#434c59] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Signs / Problems section */}
                  <div className="mt-4 pt-4 border-t border-stone-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                      <span>Signs you may need this:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {service.signsOrProblems.slice(0, 3).map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-stone-400 mt-1">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className="text-xs font-semibold text-[#434c59] hover:text-neutral-900 transition-colors inline-flex items-center gap-1 group/btn"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-[#434c59] hover:bg-[#323943] rounded-md transition-colors shadow-sm"
                  >
                    Request Estimate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Consultation prompt banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#434c59] text-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Not sure whether you need a repair or full replacement?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Lloyd Koebel provides honest on-site evaluations with zero guesswork and no sales pressure.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('consultation')}
            className="px-5 py-3 text-xs sm:text-sm font-bold text-[#1f242b] bg-[#efebe6] hover:bg-white rounded-md transition-all shrink-0 shadow"
          >
            Book Free Assessment
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
                  Koebel's Roofing Service Details
                </span>
                <h3 className="text-xl font-bold text-neutral-900">
                  {activeServiceModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                <img
                  src={activeServiceModal.image}
                  alt={activeServiceModal.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#1d232c]/85 text-stone-200 text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm">
                  {activeServiceModal.tag}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Overview
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {activeServiceModal.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Signs It's Time For Attention
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {activeServiceModal.signsOrProblems.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded border border-stone-200/60">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  What's Included &amp; Benefits
                </h4>
                <ul className="space-y-2 text-xs text-neutral-700">
                  {activeServiceModal.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeServiceModal.title;
                    setActiveServiceModal(null);
                    onOpenConsultation(title);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#434c59] hover:bg-[#353d47] rounded-md shadow"
                >
                  Request Consultation for {activeServiceModal.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
