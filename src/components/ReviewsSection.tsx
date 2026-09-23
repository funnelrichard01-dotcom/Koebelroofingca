import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/koebelData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with verified 5.0 Star badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500 mb-2">
              <span>Verified Homeowner Feedback</span>
              <span aria-hidden="true">·</span>
              <span>Kitchener - Waterloo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Trusted by Homeowners. Driven by Values.
            </h2>
            <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed">
              Most of our work comes from referrals — a true sign of community trust. We treat every home like it's sheltering our own families.
            </p>
          </div>

          {/* Social Proof Aggregate Anchor */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-neutral-900 tabular-nums">5.0</div>
              <div className="flex items-center text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
            </div>
            <div className="border-l border-stone-200 pl-4 text-xs text-neutral-600">
              <div className="font-bold text-neutral-900 text-sm">98 Google Reviews</div>
              <div>100% 5-Star Rating Record</div>
              <div className="text-stone-400 mt-0.5">Kitchener &amp; Waterloo Region</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Service Scope */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                    <span>{review.author}</span>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <div className="text-xs text-stone-500">
                    {review.location}
                  </div>
                </div>

                <div className="text-[11px] text-right text-stone-500 max-w-[130px] truncate">
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Referral Quote Footnote */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          <span>Verified customer testimonials from Kitchener, Waterloo, Cambridge, and Guelph. </span>
          <span className="font-semibold text-neutral-800">
            Never fabricated. Built on genuine relationships since 2014.
          </span>
        </div>
      </div>
    </section>
  );
};
