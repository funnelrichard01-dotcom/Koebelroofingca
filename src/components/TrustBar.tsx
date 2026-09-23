import React from 'react';
import { Award, ShieldCheck, Users, Clock, ThumbsUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#f0ece6] border-b border-stone-300/80 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#434c59] text-white shrink-0 mt-0.5">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-neutral-900">Velux Certified</h2>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Factory-trained for 100% leak-proof skylights &amp; sun tunnels.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#434c59] text-white shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-neutral-900">Malarkey Certified</h2>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Eco-sustainable, impact-resistant architectural shingles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#434c59] text-white shrink-0 mt-0.5">
              <Users className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-neutral-900">Referral-Based Trust</h2>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Most projects come directly from neighbor recommendations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#434c59] text-white shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-stone-300" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-neutral-900">Clear &amp; Honest</h2>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Transparent timelines, accurate quotes, and zero sales games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
