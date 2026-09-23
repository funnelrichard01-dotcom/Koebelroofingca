import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/koebelData';

interface ContactSectionProps {
  onSelectOption: (type: 'consultation' | 'quote' | 'discovery_call') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSelectOption }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: 'Roof Replacements',
    city: 'Kitchener',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message or description';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Contact Koebel’s Roofing</span>
            <span aria-hidden="true">·</span>
            <span>Serving Waterloo Region</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Let’s Get Started. Simple, Honest &amp; Reliable.
          </h2>
          <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed">
            New roofs, replacements, repairs, skylights &amp; sun tunnels in Kitchener - Waterloo and surrounding communities. Below are a few options available to get in touch with us.
          </p>
        </div>

        {/* 3 Contact Pathways matching Koebel's website */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* Option 1: General Inquiry */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100/80 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#434c59] text-white flex items-center justify-center">
                <Mail className="w-5 h-5 text-stone-200" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                General Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Fill out the form below to send an email directly to Lloyd Koebel and our team.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-200">
              <a
                href="#contact-form"
                className="text-xs font-bold text-[#434c59] hover:underline"
              >
                Scroll to form below ↓
              </a>
            </div>
          </div>

          {/* Option 2: Discovery Call */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100/80 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#434c59] text-white flex items-center justify-center">
                <Phone className="w-5 h-5 text-stone-200" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Book a Discovery Call
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                For quick discussions about your roofing needs, project timeline, or material options.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onSelectOption('discovery_call')}
                className="text-xs font-bold text-[#434c59] hover:underline"
              >
                Schedule Discovery Call →
              </button>
            </div>
          </div>

          {/* Option 3: Schedule Team Member */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100/80 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#434c59] text-white flex items-center justify-center">
                <Calendar className="w-5 h-5 text-stone-200" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Schedule a Home Visit
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Schedule Lloyd or a team member to visit your home for a roof replacement or repair quote.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onSelectOption('quote')}
                className="text-xs font-bold text-[#434c59] hover:underline"
              >
                Book On-Site Inspection →
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form & Business Info Grid */}
        <div id="contact-form" className="grid lg:grid-cols-12 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Send a General Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6">
              Complete the fields below and we will respond promptly with honest guidance.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <h4 className="text-base font-bold">Inquiry Received</h4>
                </div>
                <p className="text-sm leading-relaxed">
                  Thank you so much for your inquiry. We have received your email and we will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      phone: '',
                      email: '',
                      service: 'Roof Replacements',
                      city: 'Kitchener',
                      message: '',
                    });
                  }}
                  className="mt-3 text-xs font-bold text-emerald-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="e.g. John"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59] ${
                        errors.firstName ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="e.g. Smith"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59] ${
                        errors.lastName ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(226) 000-0000"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59] ${
                        errors.phone ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59] ${
                        errors.email ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59]"
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
                      Municipality
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59]"
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

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Message / Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your roof, current issues, or what you'd like to accomplish..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#434c59] ${
                      errors.message ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-bold text-white bg-[#434c59] hover:bg-[#323943] rounded-md shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Business Details & Service Areas */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 space-y-4">
              <h4 className="text-base font-bold text-neutral-900">
                Direct Contact Information
              </h4>

              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#434c59] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-neutral-500">Call Lloyd Directly:</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-neutral-900 hover:text-[#434c59]"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#434c59] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-neutral-500">Service Base:</div>
                    <div className="font-semibold text-neutral-900">
                      Kitchener - Waterloo, Ontario
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#434c59] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-neutral-500">Hours of Operation:</div>
                    <div>Monday – Friday: 7:30 AM – 6:00 PM</div>
                    <div>Saturday: 8:00 AM – 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas List */}
            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                Communities We Proudly Protect
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Koebel's Roofing has served families throughout Waterloo Region and surrounding communities since 2014.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BUSINESS_INFO.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-2.5 py-1 rounded bg-stone-200/80 text-neutral-800 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-5 rounded-xl bg-[#434c59] text-white flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-[#efebe6]">The Koebel's Guarantee</div>
                <div className="text-stone-300">
                  Every inquiry receives honest advice, accurate scopes, and zero pressure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
