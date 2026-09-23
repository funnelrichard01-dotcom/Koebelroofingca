import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, FileCheck, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'consultation' | 'quote' | 'discovery_call';
  initialService?: string;
  assessmentData?: {
    roofAge: string;
    symptoms: string[];
    recommendation: string;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialType = 'consultation',
  initialService = 'Roof Replacements',
  assessmentData = null,
}) => {
  const [bookingType, setBookingType] = useState<'consultation' | 'quote' | 'discovery_call'>(initialType);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Kitchener');
  const [service, setService] = useState(initialService);
  const [preferredTime, setPreferredTime] = useState('Morning (8am - 12pm)');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialType) setBookingType(initialType);
    if (initialService) setService(initialService);
  }, [initialType, initialService, isOpen]);

  useEffect(() => {
    if (assessmentData) {
      setMessage(
        `Pre-assessment summary: Roof age: ${assessmentData.roofAge}. Observed signs: ${
          assessmentData.symptoms.length > 0 ? assessmentData.symptoms.join(', ') : 'None specified'
        }. Recommended focus: ${assessmentData.recommendation}.`
      );
    }
  }, [assessmentData]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = 'First name is required';
    if (!lastName.trim()) errs.lastName = 'Last name is required';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="sticky top-0 bg-[#434c59] text-white px-6 py-4 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-stone-300">
              Koebel's Roofing · Kitchener-Waterloo
            </span>
            <h3 className="text-lg font-bold text-white">
              {bookingType === 'consultation'
                ? 'Book an In-Person Free Consultation'
                : bookingType === 'quote'
                ? 'Schedule a Team Member for a Detailed Quote'
                : 'Book a Quick Discovery Call'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-stone-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900">
                Inquiry Successfully Received
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you so much for your inquiry. We have received your request and Lloyd Koebel or our team will get in touch with you shortly to confirm your time.
              </p>
              <div className="p-4 bg-stone-50 rounded-lg text-xs text-neutral-600 max-w-sm mx-auto border border-stone-200">
                <div className="font-semibold text-neutral-900 mb-1">
                  Need immediate storm assistance?
                </div>
                <div>Call Lloyd directly at {BUSINESS_INFO.phone}</div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#434c59] rounded-md hover:bg-[#343b45] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-100 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setBookingType('consultation')}
                  className={`py-2 px-2 rounded-md transition-colors ${
                    bookingType === 'consultation'
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Free Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType('quote')}
                  className={`py-2 px-2 rounded-md transition-colors ${
                    bookingType === 'quote'
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Detailed Quote
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType('discovery_call')}
                  className={`py-2 px-2 rounded-md transition-colors ${
                    bookingType === 'discovery_call'
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Discovery Call
                </button>
              </div>

              {/* Assessment pill if carried over */}
              {assessmentData && (
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-neutral-700">
                  <span className="font-bold text-[#434c59]">Pre-assessment: </span>
                  <span>{assessmentData.recommendation} ({assessmentData.roofAge})</span>
                </div>
              )}

              {/* Name fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className={`w-full px-3 py-2 text-sm bg-stone-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59] ${
                      errors.firstName ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.firstName && (
                    <span className="text-[11px] text-red-600">{errors.firstName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith"
                    className={`w-full px-3 py-2 text-sm bg-stone-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59] ${
                      errors.lastName ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-[11px] text-red-600">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(226) 000-0000"
                    className={`w-full px-3 py-2 text-sm bg-stone-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59] ${
                      errors.phone ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className={`w-full px-3 py-2 text-sm bg-stone-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59] ${
                      errors.email ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Service & City */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59]"
                  >
                    <option>Roof Replacements</option>
                    <option>Roof Repairs</option>
                    <option>Leak Repairs &amp; Storm Damage</option>
                    <option>New Roof Construction</option>
                    <option>Skylights &amp; Sun Tunnels</option>
                    <option>Vents &amp; Gutter Installation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    City / Municipality
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59]"
                  >
                    <option>Kitchener</option>
                    <option>Waterloo</option>
                    <option>Cambridge</option>
                    <option>Guelph</option>
                    <option>Elmira</option>
                    <option>Baden / New Hamburg</option>
                    <option>St. Jacobs / Woolwich</option>
                    <option>Other Surrounding Area</option>
                  </select>
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Street Address (for on-site visits)
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 123 Heritage Drive"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any particular concerns, shingle preferences, or timeline details..."
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#434c59]"
                />
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero sales pressure. Free on-site inspection by Lloyd Koebel.</span>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#434c59] hover:bg-[#343b45] rounded-md shadow-md transition-colors"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
