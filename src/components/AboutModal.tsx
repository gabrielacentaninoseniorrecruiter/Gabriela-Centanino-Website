import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_ASSETS, TRUST_CATEGORIES, VOLUNTEER_ORGS } from '../data/content';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A1C30]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div className="bg-[#FAF8F5] text-[#0F2A47] w-full max-w-4xl rounded-xs shadow-2xl border border-[#0F2A47]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Top Bar */}
        <div className="bg-[#102A43] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#F3EFE6]/10">
          <div>
            <span className="text-[#D6B465] text-xs font-semibold uppercase tracking-widest block mb-1">
              About the Consultant
            </span>
            <h2 id="about-modal-title" className="text-2xl sm:text-3xl font-serif text-[#FAF8F5] font-normal">
              Gabriela Centanino
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B465] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-10">
          {/* Top Editorial Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative border border-[#D6B465]/40 p-2 bg-[#102A43] rounded-xs shadow-lg">
                <img
                  src={BRAND_ASSETS.portraitUrl}
                  alt="Gabriela Centanino"
                  className="w-full h-auto object-cover object-top rounded-xs"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BA9544]">
                <span>8+ Years Executive Experience</span>
                <span>·</span>
                <span>Los Angeles &amp; Remote</span>
              </div>
              <h3 className="text-2xl font-serif text-[#0F2A47] leading-snug">
                Helping growth-oriented organizations attract exceptional talent and build cultures designed for scale.
              </h3>
              <p className="text-sm text-[#0F2A47]/80 font-sans font-light leading-relaxed">
                Gabriela brings a strategic, human-centered approach to talent acquisition and people operations, combining recruiting expertise with a deep understanding of culture, candidate experience, employee engagement, and organizational growth.
              </p>
              <p className="text-sm text-[#0F2A47]/80 font-sans font-light leading-relaxed">
                Her career has traversed dynamic consumer-facing brands, beauty, wellness, hospitality, and technology ecosystems—environments where hiring the wrong profile or tolerating misaligned culture carries immediate business consequences.
              </p>
            </div>
          </div>

          {/* Industry Focus Matrix */}
          <div className="p-6 bg-[#F1EDE3] rounded-xs border border-[#0F2A47]/10">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#BA9544] mb-3">
              Sector Specializations
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-serif font-medium text-[#0F2A47]">
              {TRUST_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="bg-white/80 px-3 py-1.5 border border-[#0F2A47]/10 rounded-xs shadow-2xs"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Three Core Tenets */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#BA9544]">
              Consulting Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white border border-[#0F2A47]/10 rounded-xs">
                <h5 className="font-serif font-bold text-sm text-[#0F2A47] mb-1">
                  1. Business Alignment First
                </h5>
                <p className="text-[#0F2A47]/75 font-light leading-relaxed">
                  Every search criteria and HR policy originates from your bottom-line company goals, not boilerplate HR templates.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#0F2A47]/10 rounded-xs">
                <h5 className="font-serif font-bold text-sm text-[#0F2A47] mb-1">
                  2. Dignified Candidate Journeys
                </h5>
                <p className="text-[#0F2A47]/75 font-light leading-relaxed">
                  Applicants remember how they were treated. High-touch communication protects your employer brand long after offers close.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#0F2A47]/10 rounded-xs">
                <h5 className="font-serif font-bold text-sm text-[#0F2A47] mb-1">
                  3. Scalable Systems Architecture
                </h5>
                <p className="text-[#0F2A47]/75 font-light leading-relaxed">
                  Leveraging modern tooling (Greenhouse, BambooHR, ADP) so your internal team can operate smoothly without friction.
                </p>
              </div>
            </div>
          </div>

          {/* Human Side */}
          <div className="pt-6 border-t border-[#0F2A47]/10">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#BA9544] mb-2">
              The Human Dimension
            </h4>
            <p className="text-sm text-[#0F2A47]/80 font-sans font-light leading-relaxed mb-3">
              Beyond commercial engagements, Gabriela actively contributes to humanitarian and animal welfare causes, including Direct Relief, the Santa Monica Homeless Shelter, Dream Foundation, DAWG Canine Shelter, and Big Brothers Big Sisters.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F3EFE6] border-t border-[#0F2A47]/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-medium text-[#0F2A47]/70 hover:text-[#0F2A47] cursor-pointer"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="px-6 py-2.5 bg-[#0F2A47] hover:bg-[#163657] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xs shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Let's Talk About Your Team</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D6B465]" />
          </button>
        </div>
      </div>
    </div>
  );
};
