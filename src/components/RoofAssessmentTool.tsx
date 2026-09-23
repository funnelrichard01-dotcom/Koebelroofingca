import React, { useState } from 'react';
import { HelpCircle, Check, AlertCircle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

interface RoofAssessmentToolProps {
  onStartConsultationWithAssessment: (details: {
    roofAge: string;
    symptoms: string[];
    recommendation: string;
  }) => void;
}

export const RoofAssessmentTool: React.FC<RoofAssessmentToolProps> = ({
  onStartConsultationWithAssessment,
}) => {
  const [roofAge, setRoofAge] = useState<string>('15-20');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [city, setCity] = useState<string>('Kitchener');

  const symptomsList = [
    { id: 'curling', label: 'Curling or cracked shingles' },
    { id: 'granules', label: 'Heavy shingle granule loss in gutters' },
    { id: 'leak', label: 'Active leak or interior water stains' },
    { id: 'wind', label: 'Shingles blown off after wind/storm' },
    { id: 'skylight', label: 'Skylight condensation, fogging or leaks' },
    { id: 'attic', label: 'High attic heat or winter ice dams' },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Determine recommendation based on authentic Koebel's criteria
  const isOlder = roofAge === '19plus';
  const hasMultipleSevere = selectedSymptoms.length >= 2;
  const isOnlySkylight =
    selectedSymptoms.length === 1 && selectedSymptoms.includes('skylight');
  const isOnlyWind =
    selectedSymptoms.length === 1 && selectedSymptoms.includes('wind') && !isOlder;

  let recommendation = {
    title: 'Professional Diagnostic Inspection Recommended',
    badge: 'Inspection & Repair',
    advice:
      'Given your roof age and noted symptoms, an honest on-site repair inspection can likely extend your roof’s life without the cost of a full replacement.',
    suggestedService: 'Roof Repair & Leak Diagnosis',
  };

  if (isOlder || (roofAge === '15-20' && hasMultipleSevere)) {
    recommendation = {
      title: 'Full Roof Replacement Assessment Recommended',
      badge: 'Full Replacement Evaluation',
      advice:
        'With your roof nearing or surpassing 19 years and showing signs of wear, recurring repairs often become inefficient. A planned replacement with Malarkey shingles ensures long-term protection.',
      suggestedService: 'Architectural Roof Replacement',
    };
  } else if (isOnlySkylight) {
    recommendation = {
      title: 'Velux Certified Skylight / Sun Tunnel Retrofit',
      badge: 'Skylight Service',
      advice:
        'Your main roof may be sound, but older skylights often leak or fog as factory seals break down. A Velux leak-proof replacement provides pristine natural light.',
      suggestedService: 'Skylights & Sun Tunnels',
    };
  } else if (isOnlyWind) {
    recommendation = {
      title: 'Localized Storm Damage Repair',
      badge: 'Targeted Fix',
      advice:
        'Your roof has useful life remaining. Fast, targeted repair of blown shingles and flashing will restore full watertight protection without replacing the entire deck.',
      suggestedService: 'Leak Repairs & Storm Damage',
    };
  }

  const handleBook = () => {
    onStartConsultationWithAssessment({
      roofAge:
        roofAge === 'under10'
          ? 'Under 10 years'
          : roofAge === '10-15'
          ? '10–15 years'
          : roofAge === '15-20'
          ? '15–19 years'
          : '19+ years (Aged roof)',
      symptoms: selectedSymptoms.map(
        (s) => symptomsList.find((item) => item.id === s)?.label || s
      ),
      recommendation: recommendation.title,
    });
  };

  return (
    <section id="assessment" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500">
            <HelpCircle className="w-4 h-4 text-[#434c59]" />
            <span>Interactive Homeowner Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Should You Repair or Replace Your Roof?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Take 30 seconds to evaluate your roof’s health based on Lloyd Koebel’s 20+ years of on-site diagnostic criteria.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-stone-200 shadow-md p-6 sm:p-10 space-y-8">
          {/* Question 1: Roof Age */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-3">
              1. What is the approximate age of your current roof?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'under10', label: 'Under 10 Years' },
                { id: '10-15', label: '10 to 15 Years' },
                { id: '15-20', label: '15 to 19 Years' },
                { id: '19plus', label: '19+ Years (Aged)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setRoofAge(opt.id)}
                  className={`p-3 text-xs sm:text-sm font-semibold rounded-lg border text-center transition-all ${
                    roofAge === opt.id
                      ? 'bg-[#434c59] text-white border-[#434c59] shadow-sm'
                      : 'bg-stone-50 border-stone-200 text-neutral-700 hover:bg-stone-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Symptoms */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-1">
              2. What signs or symptoms are you currently noticing? (Select all that apply)
            </label>
            <p className="text-xs text-neutral-500 mb-3">
              Leave blank if your roof is currently fine and you are planning ahead.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {symptomsList.map((item) => {
                const isChecked = selectedSymptoms.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleSymptom(item.id)}
                    className={`p-3 text-left rounded-lg border text-xs sm:text-sm flex items-center justify-between transition-all ${
                      isChecked
                        ? 'bg-stone-100 border-[#434c59] text-neutral-950 font-medium'
                        : 'bg-stone-50/60 border-stone-200 text-neutral-600 hover:bg-stone-100/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-2 ${
                        isChecked
                          ? 'bg-[#434c59] border-[#434c59] text-white'
                          : 'border-stone-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3: City */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-3">
              3. Where is your home located?
            </label>
            <div className="flex flex-wrap gap-2">
              {['Kitchener', 'Waterloo', 'Cambridge', 'Guelph', 'Elmira / Surrounding'].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCity(c)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-all ${
                    city === c
                      ? 'bg-[#434c59] text-white border-[#434c59]'
                      : 'bg-stone-50 border-stone-200 text-neutral-700 hover:bg-stone-100'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Instant Recommendation Output */}
          <div className="p-5 sm:p-6 rounded-xl bg-stone-50 border border-stone-200/90 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-500">
                  Initial Assessment for {city} Property
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#434c59] text-white rounded">
                {recommendation.badge}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                {recommendation.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {recommendation.advice}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-stone-400" />
                <span>Every recommendation is verified in person by Lloyd Koebel before any quote.</span>
              </div>

              <button
                onClick={handleBook}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#434c59] hover:bg-[#323943] rounded-md shadow transition-all active:scale-[0.98]"
              >
                <span>Request Free Assessment for This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
