/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { RoofAssessmentTool } from './components/RoofAssessmentTool';
import { ReviewsSection } from './components/ReviewsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'consultation' | 'quote' | 'discovery_call'>('consultation');
  const [modalService, setModalService] = useState('Roof Replacements');
  const [assessmentResult, setAssessmentResult] = useState<{
    roofAge: string;
    symptoms: string[];
    recommendation: string;
  } | null>(null);

  const handleOpenConsultation = (
    type: 'consultation' | 'quote' | 'discovery_call' = 'consultation',
    service: string = 'Roof Replacements'
  ) => {
    setModalType(type);
    setModalService(service);
    setIsConsultModalOpen(true);
  };

  const handleAssessmentCompletion = (details: {
    roofAge: string;
    symptoms: string[];
    recommendation: string;
  }) => {
    setAssessmentResult(details);
    setModalType('consultation');
    setModalService(details.recommendation);
    setIsConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-neutral-800 pb-14 md:pb-0">
      {/* 3-Zone Standard Top Bar */}
      <Header
        onOpenConsultation={(type) =>
          handleOpenConsultation(type || 'consultation')
        }
      />

      <main className="flex-1">
        {/* Hero Section with Architectural Photography & Trust Statistics */}
        <Hero
          onOpenConsultation={(type) =>
            handleOpenConsultation(type || 'consultation')
          }
        />

        {/* Certified Trust Bar (Velux, Malarkey, Referral-Driven) */}
        <TrustBar />

        {/* 6 Core Verified Services with Problem Diagnostics */}
        <ServicesSection
          onOpenConsultation={(serviceName) =>
            handleOpenConsultation('consultation', serviceName || 'Roof Replacements')
          }
        />

        {/* The 3-Step Process & 6-Step Installation Day Timeline */}
        <ProcessSection
          onOpenConsultation={() => handleOpenConsultation('consultation')}
        />

        {/* About Lloyd Koebel, Craftsmanship & Authentic Photos */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation('consultation')}
        />

        {/* Interactive Roof Health Diagnostic Tool */}
        <RoofAssessmentTool
          onStartConsultationWithAssessment={handleAssessmentCompletion}
        />

        {/* 5.0 Star Verified Reviews from Kitchener-Waterloo Homeowners */}
        <ReviewsSection />

        {/* Lloyd Koebel's Homeowner Roofing Guides */}
        <BlogSection
          onOpenConsultation={() => handleOpenConsultation('consultation')}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* 3 Contact Pathways & Verified Contact Form */}
        <ContactSection
          onSelectOption={(type) => handleOpenConsultation(type)}
        />
      </main>

      {/* Verified Footer with Exact Copyright & Location */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation('consultation')}
      />

      {/* Mobile Sticky Action Bar (strictly under 15% viewport height) */}
      <MobileStickyBar
        onOpenConsultation={() => handleOpenConsultation('consultation')}
      />

      {/* Booking & Consultation Drawer/Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => {
          setIsConsultModalOpen(false);
          setAssessmentResult(null);
        }}
        initialType={modalType}
        initialService={modalService}
        assessmentData={assessmentResult}
      />
    </div>
  );
}
