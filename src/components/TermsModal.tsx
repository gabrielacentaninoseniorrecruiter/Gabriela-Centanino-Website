import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A1C30]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div className="bg-[#FAF8F5] text-[#0F2A47] w-full max-w-2xl rounded-xs shadow-2xl border border-[#0F2A47]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#102A43] text-white p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#D6B465]" />
            <div>
              <span className="text-[#D6B465] text-xs font-semibold uppercase tracking-widest block">
                Professional Engagement
              </span>
              <h3 id="terms-modal-title" className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-normal">
                Terms of Engagement
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
              1. Consulting Engagements
            </h4>
            <p>
              All advisory, recruitment strategy, and people operations consulting engagements are formally governed by customized Statements of Work (SOW) executed between Gabriela Centanino and the client organization.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-[#0F2A47] mb-1">
              2. Intellectual Property &amp; Work Product
            </h4>
            <p>
              Customized rubrics, interview guides, and people systems developed specifically for a client become client property upon settlement of agreed project deliverables. Proprietary advisory frameworks and methodologies remain the intellectual property of Gabriela Centanino.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-[#0F2A47] mb-1">
              3. Equal Opportunity &amp; Fair Hiring Standards
            </h4>
            <p>
              Gabriela Centanino is committed to non-discriminatory hiring and equity in workplace operations. Searches and client practices adhere to all relevant labor laws and ethical hiring guidelines.
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#F3EFE6] border-t border-[#0F2A47]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0F2A47] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#163657] transition-colors cursor-pointer"
          >
            Close Terms
          </button>
        </div>
      </div>
    </div>
  );
};
