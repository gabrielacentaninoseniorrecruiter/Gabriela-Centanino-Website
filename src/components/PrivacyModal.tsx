import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A1C30]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-[#FAF8F5] text-[#0F2A47] w-full max-w-2xl rounded-xs shadow-2xl border border-[#0F2A47]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#102A43] text-white p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#D6B465]" />
            <div>
              <span className="text-[#D6B465] text-xs font-semibold uppercase tracking-widest block">
                Executive Confidentiality
              </span>
              <h3 id="privacy-modal-title" className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-normal">
                Privacy &amp; Discretion Policy
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B465] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto text-sm text-[#0F2A47]/85 font-sans font-light leading-relaxed">
          <div>
            <h4 className="font-serif text-base font-semibold text-[#0F2A47] mb-1">
              1. Non-Disclosure &amp; Client Confidentiality
            </h4>
            <p>
              Talent searches, executive replacements, and organizational restructurings frequently involve highly sensitive corporate deliberations. All communications, hiring plans, compensation benchmarks, and organizational charts submitted via this website or in direct correspondence are treated with strict confidentiality.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-[#0F2A47] mb-1">
              2. Candidate Data Stewardship
            </h4>
            <p>
              Candidate dossiers, resumes, and references evaluated during executive search engagements are maintained with rigorous data governance standards. Information is never distributed or shared without express alignment.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-[#0F2A47] mb-1">
              3. Information Collected
            </h4>
            <p>
              Information submitted via our inquiry form (name, email address, company name, and project description) is utilized strictly to evaluate potential consulting partnerships and coordinate follow-up discussions. We do not sell, rent, or commercialize any contact data.
            </p>
          </div>

          <div className="p-4 bg-[#F1EDE3] rounded-xs text-xs text-[#0F2A47]/75">
            For specific non-disclosure agreements (NDAs) prior to exploratory discussions, please indicate in your initial message or email {BRAND_ASSETS.email}.
          </div>
        </div>

        <div className="p-6 bg-[#F3EFE6] border-t border-[#0F2A47]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0F2A47] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#163657] transition-colors cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
