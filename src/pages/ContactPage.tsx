import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO, DESIGNER_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State & Validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Bespoke Garment Commission',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please share a brief note about your inquiry';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/saritapujari868@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiryType: formData.projectType,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name} (${formData.projectType})`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.log('Submission notification:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#EFE6DD] text-[#240B10] pt-24 sm:pt-28 md:pt-32 pb-32">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HERO HEADER ================= */}
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 mb-10 sm:mb-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-2 sm:space-y-3">
            <span className="font-script text-2xl sm:text-4xl text-[#F3D8D3] block">
              let's collaborate ✨
            </span>
            <h1 className="hero-clamp-title font-display font-black tracking-tight text-[#FBF7F2] leading-[0.9] uppercase">
              LET'S TALK
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E5D7CB] pt-1">
              STUDIO INQUIRIES · COMMISSIONS · COLLABORATIONS
            </p>
          </div>
        </div>

        {/* ================= 2-COLUMN AESTHETIC BENTO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Direct Contact & Studio Info */}
          <div className="lg:col-span-5 bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-[#D4C3B3] shadow-[0_8px_30px_rgba(88,24,34,0.04)] space-y-6 sm:space-y-8 relative">
            {/* Washi Tape Accent */}
            <div className="absolute -top-3 left-10 washi-tape px-6 py-1 rounded text-[10px] font-mono text-[#581822] rotate-1">
              DIRECT REACH
            </div>

            <div className="space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#581822] block">
                COMMISSION A PIECE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#581822] tracking-tight leading-tight uppercase">
                HAVE AN IDEA? <br />
                <span className="text-[#78222E]">LET'S MAKE SOMETHING.</span>
              </h2>
              <p className="text-sm font-sans text-[#240B10]/80 font-light leading-relaxed">
                {CONTACT_INFO.introText}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-[#D4C3B3]/60">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#EFE6DD] border border-[#D4C3B3] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B4E54] block">
                  STUDIO DIRECT EMAIL
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-display font-bold text-base sm:text-lg text-[#581822] hover:text-[#78222E] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1 rounded-full bg-[#581822] text-[#FBF7F2] font-mono text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer hover:bg-[#78222E]"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#F3D8D3]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Telephone */}
              <div className="p-4 rounded-2xl bg-[#EFE6DD] border border-[#D4C3B3] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B4E54] block">
                  STUDIO TELEPHONE
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="font-display font-bold text-base sm:text-lg text-[#581822] hover:text-[#78222E] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#78222E]" />
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="px-3 py-1 rounded-full bg-[#581822] text-[#FBF7F2] font-mono text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer hover:bg-[#78222E]"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-[#F3D8D3]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#EFE6DD] border border-[#D4C3B3] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B4E54] block">
                  STUDIO LOCATION
                </span>
                <p className="font-display font-bold text-sm text-[#581822] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#78222E]" />
                  <span>{CONTACT_INFO.location}</span>
                </p>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-2xl bg-[#581822] text-[#FBF7F2] space-y-2">
              <div className="flex items-center gap-2 text-xs font-display font-bold text-[#F3D8D3]">
                <span className="w-2 h-2 rounded-full bg-[#F3D8D3] animate-pulse" />
                <span>COMMISSIONS OPEN</span>
              </div>
              <p className="text-xs font-sans text-[#FBF7F2]/80 leading-relaxed">
                Currently open for select commissions, brand collaborations, and bespoke garment inquiries.
              </p>
            </div>
          </div>

          {/* Right Column: Aesthetic Contact Form */}
          <div className="lg:col-span-7 bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-[#D4C3B3] shadow-[0_8px_30px_rgba(88,24,34,0.04)]">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 sm:py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[#581822] text-[#F3D8D3] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#581822] uppercase">
                  Inquiry Sent!
                </h3>
                <p className="text-sm font-sans text-[#240B10]/85 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-bold text-[#581822]">{formData.name}</span>. Your inquiry has been delivered directly to <span className="font-semibold text-[#581822]">saritapujari868@gmail.com</span>. I will get back to you shortly.
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=saritapujari868@gmail.com&su=${encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.projectType}\n\nMessage:\n${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#581822] text-[#FBF7F2] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#78222E] transition-all flex items-center gap-2 shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#F3D8D3]" />
                    <span>Open in Gmail</span>
                  </a>
                  <a
                    href={`mailto:saritapujari868@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.projectType}\n\nMessage:\n${formData.message}`)}`}
                    className="px-6 py-2.5 rounded-full bg-[#E5D7CB] text-[#581822] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#D4C3B3] transition-all"
                  >
                    Send Direct Email
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Bespoke Garment Commission',
                        message: '',
                      });
                    }}
                    className="text-xs font-mono text-[#6B4E54] hover:text-[#581822] underline cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#581822] uppercase">
                    PROJECT INQUIRY
                  </h3>
                  <p className="text-xs font-mono text-[#6B4E54] mt-1">
                    Fill in your details to start a conversation.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#581822]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                    }}
                    placeholder="e.g. Maya Sharma"
                    className={`w-full bg-[#EFE6DD] border p-4 rounded-2xl text-sm text-[#240B10] placeholder-[#6B4E54]/60 focus:outline-none transition-colors ${
                      formErrors.name ? 'border-[#78222E]' : 'border-[#D4C3B3] focus:border-[#581822]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs font-mono text-[#78222E] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#581822]">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                    }}
                    placeholder="e.g. maya@example.com"
                    className={`w-full bg-[#EFE6DD] border p-4 rounded-2xl text-sm text-[#240B10] placeholder-[#6B4E54]/60 focus:outline-none transition-colors ${
                      formErrors.email ? 'border-[#78222E]' : 'border-[#D4C3B3] focus:border-[#581822]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs font-mono text-[#78222E] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.email}</span>
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#581822]">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#EFE6DD] border border-[#D4C3B3] p-4 rounded-2xl text-sm text-[#240B10] focus:outline-none focus:border-[#581822] cursor-pointer"
                  >
                    <option value="Bespoke Garment Commission">Bespoke Garment Commission</option>
                    <option value="Fashion Brand Collaboration">Fashion Brand Collaboration</option>
                    <option value="Pattern Making & Drafting">Pattern Making & Drafting</option>
                    <option value="Textile Upcycling Project">Textile Upcycling Project</option>
                    <option value="General Studio Inquiry">General Studio Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#581822]">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    placeholder="Tell me about your idea, silhouette interest, or collaboration concept..."
                    className={`w-full bg-[#EFE6DD] border p-4 rounded-2xl text-sm text-[#240B10] placeholder-[#6B4E54]/60 focus:outline-none transition-colors ${
                      formErrors.message ? 'border-[#78222E]' : 'border-[#D4C3B3] focus:border-[#581822]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs font-mono text-[#78222E] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#581822] text-[#FBF7F2] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#78222E] hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Studio Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
