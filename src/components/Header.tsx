import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface HeaderProps {
  onOpenConsultation: (type?: 'consultation' | 'quote' | 'discovery_call') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#363e49] text-stone-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Velux &amp; Malarkey Certified Installers</span>
            </span>
            <span className="text-white/20">·</span>
            <span className="text-stone-300">Serving Kitchener, Waterloo, Cambridge &amp; Guelph</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Call Lloyd Koebel directly:</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-white font-medium hover:text-stone-200 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-stone-300" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones */}
      <header className="sticky top-0 z-40 bg-[#434c59] text-white shadow-md border-b border-[#363e49]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Zone 1: Single element Brand Wordmark + Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 rounded"
          >
            <img
              src="/assets/kr-logo.png"
              alt="Koebel's Roofing - K | R"
              className="h-12 w-12 rounded-full object-cover border border-white/25 shadow-md ring-1 ring-white/15 shrink-0"
              onError={(e) => {
                // Fallback to text initials if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#efebe6] group-hover:text-white transition-colors">
                Koebel’s Roofing
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-300 font-medium hidden sm:block">
                Protecting Homes With Integrity
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Nav Links, single line */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-200">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About Lloyd
            </a>
            <a href="#assessment" className="hover:text-white transition-colors">
              Roof Check
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#guides" className="hover:text-white transition-colors">
              Guides
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-stone-200 hover:text-white px-3 py-2 border border-white/20 rounded-md transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-stone-300" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenConsultation('consultation')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1e2329] bg-[#efebe6] hover:bg-white rounded-md shadow transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-200 hover:text-white hover:bg-white/10 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3a424e] border-t border-white/10 px-4 py-5 shadow-xl space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-medium text-stone-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                Our 3-Step Process
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                About Lloyd Koebel
              </a>
              <a
                href="#assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                Roof Health Self-Check
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                Client Reviews (5.0 Stars)
              </a>
              <a
                href="#guides"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                Homeowner Roofing Guides
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 hover:text-white transition-colors"
              >
                Contact &amp; Service Areas
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-white/10 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-stone-300" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('consultation');
                }}
                className="w-full py-2.5 px-4 rounded bg-[#efebe6] text-[#1e2329] font-semibold text-sm shadow text-center"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
