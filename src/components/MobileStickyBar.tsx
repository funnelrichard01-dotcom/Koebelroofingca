import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1d232c]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 shadow-2xl h-14 flex items-center justify-between gap-2.5">
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 px-3 rounded-md bg-white/10 hover:bg-white/15 text-stone-100 text-xs font-semibold border border-white/15 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-stone-300" />
        <span className="truncate">Call (226) 338-2088</span>
      </a>

      <button
        onClick={onOpenConsultation}
        className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 px-3 rounded-md bg-[#efebe6] hover:bg-white text-[#1a2027] text-xs font-bold shadow transition-all active:scale-[0.98]"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Free Consultation</span>
      </button>
    </div>
  );
};
