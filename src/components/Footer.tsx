import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#1c222a] text-stone-300 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Philosophy Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/koebels-logo.png"
                alt="Koebel's Roofing"
                className="h-11 w-auto object-contain brightness-105"
              />
              <span className="text-xl font-bold tracking-tight text-[#efebe6]">
                Koebel’s Roofing
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-normal">
              Protecting homes with integrity since 2014 across Kitchener, Waterloo, Cambridge, and Guelph. Founded by Lloyd Koebel with over 20 years of hands-on construction experience.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Velux Certified Installer (Skylights &amp; Sun Tunnels)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Malarkey Certified Installer (High-Performance Shingles)</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Roofing Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Roof Replacements
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Roof Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Leak Repairs &amp; Storm Damage
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  New Roof Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Velux Skylights &amp; Sun Tunnels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Vents &amp; Gutter Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <li key={area}>{area}, ON</li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-bold text-white hover:text-stone-200"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-400">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Kitchener - Waterloo, Ontario</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#1f242b] bg-[#efebe6] hover:bg-white rounded shadow text-center transition-all"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright strictly matching Koebel's website */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2025 KOEBELSROOFING | KITCHENER, ON | ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4">
            <a href="#process" className="hover:text-stone-400 transition-colors">
              Process
            </a>
            <a href="#about" className="hover:text-stone-400 transition-colors">
              About Us
            </a>
            <a href="#guides" className="hover:text-stone-400 transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-stone-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
