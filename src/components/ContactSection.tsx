import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Mail, Shield, Clock, Send } from 'lucide-react';
import { BRAND_ASSETS } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
}

interface FormState {
  name: string;
  email: string;
  company: string;
  helpType: string;
  message: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    helpType: initialService || 'Talent Acquisition',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'Talent Acquisition',
    'Recruiting',
    'People Operations',
    'Culture & Engagement',
    'Employer Branding',
    'Other',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid business email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share brief context on your team or hiring timeline.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) {
        throw new Error(data.error || 'Unable to send message at this time.');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        helpType: 'Talent Acquisition',
        message: '',
      });
      setErrors({});
    } catch (err: any) {
      console.error('Submission failed:', err);
      setErrorMessage(
        err?.message ||
          'Unable to send your message at this time. Please try again or reach out directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#102A43] text-[#F3EFE6] relative overflow-hidden bg-grain-dark border-t border-[#F3EFE6]/10">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D6B465]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Executive Invitation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#D6B465]" />
                <span className="text-[#D6B465] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
                  Direct Inquiries
                </span>
              </div>

              {/* Exact specified headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF8F5] leading-[1.12] font-normal mb-6">
                Let's build what comes <span className="italic font-serif font-light text-[#D6B465]">next</span><span className="text-[#D6B465]">.</span>
              </h2>

              {/* Exact specified supporting text */}
              <p className="text-base sm:text-lg text-[#F3EFE6]/85 font-light font-sans leading-relaxed mb-8">
                Whether you're scaling a team, strengthening your recruiting function, or thinking more intentionally about people and culture, start the conversation.
              </p>

              {/* Discretion & Integrity Pillars */}
              <div className="space-y-4 pt-6 border-t border-[#F3EFE6]/10 text-sm text-[#F3EFE6]/80 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D6B465]/20 text-[#D6B465] flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    <strong className="text-white font-medium">Discreet &amp; Confidential:</strong> Executive searches and organizational restructurings handled with high discretion.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D6B465]/20 text-[#D6B465] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    <strong className="text-white font-medium">Direct Dialogue:</strong> You speak directly with Gabriela—no junior account managers or outsourced handoffs.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Card with Brass Framing */}
            <div className="mt-12 p-6 sm:p-7 bg-[#0F2A47] border border-[#D6B465]/40 rounded-xs shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#D6B465] block mb-2">
                  Direct Correspondence
                </span>
                <a
                  href={`mailto:${BRAND_ASSETS.email}`}
                  className="text-base sm:text-lg text-[#FAF8F5] hover:text-[#D6B465] transition-colors flex items-center gap-3 font-medium break-all font-sans"
                >
                  <Mail className="w-5 h-5 text-[#D6B465] shrink-0" />
                  <span>{BRAND_ASSETS.email}</span>
                </a>
                <p className="text-xs text-[#F3EFE6]/60 mt-2.5 font-sans">
                  Response typically within 24 to 48 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Luxury Editorial Styling */}
          <div className="lg:col-span-7 bg-[#FAF8F5] text-[#0F2A47] p-8 sm:p-12 rounded-xs border border-[#F3EFE6]/20 shadow-2xl relative">
            {isSuccess ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D6B465]/20 text-[#0F2A47] mx-auto flex items-center justify-center border border-[#D6B465]/40">
                  <CheckCircle2 className="w-10 h-10 text-[#0F2A47]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#BA9544] block mb-1">
                    Transmission Successful
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#0F2A47] font-normal">
                    Inquiry Received
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#0F2A47]/80 max-w-md mx-auto font-light leading-relaxed font-sans">
                  Your inquiry has been sent to <strong className="text-[#0F2A47] font-semibold">{BRAND_ASSETS.email}</strong>. Gabriela will review your context with executive discretion and follow up directly to schedule a strategy dialogue.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-7 py-3 bg-[#0F2A47] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold rounded-xs hover:bg-[#163657] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={`mailto:${BRAND_ASSETS.email}?subject=Follow-up:%20Consultation%20Inquiry`}
                    className="px-6 py-3 border border-[#0F2A47]/20 text-[#0F2A47] text-xs uppercase tracking-[0.16em] font-semibold rounded-xs hover:bg-[#0F2A47]/5 transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#BA9544]" />
                    <span>Direct Email Client</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-4 border-b border-[#0F2A47]/10">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#BA9544] block mb-1">
                    Consultation Inquiry
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#0F2A47] font-normal">
                    Start the Conversation
                  </h3>
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2A47] mb-2 font-sans">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-3.5 bg-white border text-sm text-[#0F2A47] placeholder-[#0F2A47]/40 rounded-xs focus:outline-none focus:ring-1 focus:ring-[#D6B465] transition-colors ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#0F2A47]/20 focus:border-[#0F2A47]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1 font-sans">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2A47] mb-2 font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. eleanor@company.com"
                    className={`w-full px-4 py-3.5 bg-white border text-sm text-[#0F2A47] placeholder-[#0F2A47]/40 rounded-xs focus:outline-none focus:ring-1 focus:ring-[#D6B465] transition-colors ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#0F2A47]/20 focus:border-[#0F2A47]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1 font-sans">{errors.email}</p>}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2A47] mb-2 font-sans">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Atelier Botanics"
                    className="w-full px-4 py-3.5 bg-white border border-[#0F2A47]/20 text-sm text-[#0F2A47] placeholder-[#0F2A47]/40 rounded-xs focus:outline-none focus:ring-1 focus:ring-[#D6B465] focus:border-[#0F2A47] transition-colors"
                  />
                </div>

                {/* Dropdown: What can Gabriela help with? */}
                <div>
                  <label htmlFor="helpType" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2A47] mb-2 font-sans">
                    What can Gabriela help with? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="helpType"
                    value={formData.helpType}
                    onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-[#0F2A47]/20 text-sm text-[#0F2A47] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#D6B465] focus:border-[#0F2A47] transition-colors cursor-pointer font-sans"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2A47] mb-2 font-sans">
                    Message &amp; Project Context <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell Gabriela about your immediate hiring objectives, team stage, or organizational goals..."
                    className={`w-full px-4 py-3.5 bg-white border text-sm text-[#0F2A47] placeholder-[#0F2A47]/40 rounded-xs focus:outline-none focus:ring-1 focus:ring-[#D6B465] transition-colors resize-y ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#0F2A47]/20 focus:border-[#0F2A47]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1 font-sans">{errors.message}</p>}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#D6B465] via-[#E8D59D] to-[#D6B465] hover:brightness-105 text-[#0A1C30] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-xs shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A47]"
                  >
                    <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Start the Conversation'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[11px] text-[#0F2A47]/60 mt-3 font-sans">
                    All correspondence is held in strict professional confidence.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
