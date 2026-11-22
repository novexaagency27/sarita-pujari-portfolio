import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import { DESIGNER_INFO, CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'PORTFOLIO', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ARCHIVE', path: '/work' },
    { label: 'PROCESS', path: '/process' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <footer className="bg-[#3A0D14] text-[#FBF7F2] pt-20 pb-12 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.04] font-display font-black text-[22rem] leading-none text-white -mb-20 -mr-20">
        SP
      </div>

      <div className="max-w-[1380px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/15 items-start">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-script text-2xl sm:text-3xl text-[#F3D8D3]">
                Sarita Pujari ✨
              </span>
            </div>
            <h3 className="font-display font-black text-4xl sm:text-6xl text-[#FBF7F2] tracking-tight uppercase leading-[0.92]">
              PORTFOLIO <br />
              <span className="text-[#F3D8D3]">STUDIO</span>
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E5D7CB] pt-1">
              Fashion Designer · Garment Maker
            </p>
            <p className="font-serif italic text-base sm:text-lg text-[#FBF7F2]/75 max-w-md pt-2 leading-relaxed">
              &ldquo;I make clothes. I collect ideas. I create stories.&rdquo;
            </p>
          </div>

          {/* Capsule Directory Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#F3D8D3] block">
              DIRECTORY
            </span>
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-display uppercase tracking-wider text-[#E5D7CB] hover:text-[#FBF7F2] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span className="text-[#F3D8D3]">✦</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#F3D8D3] block">
              STUDIO INQUIRIES
            </span>
            <div className="space-y-3 text-xs font-mono text-[#E5D7CB]">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-[#F3D8D3] transition-colors block font-display font-bold text-lg sm:text-xl text-[#FBF7F2]"
              >
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-[#F3D8D3] transition-colors flex items-center gap-2 text-xs text-[#E5D7CB]"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3D8D3]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <p className="text-xs text-[#E5D7CB]/80 flex items-center gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#F3D8D3]" />
                <span>{CONTACT_INFO.location}</span>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#F3D8D3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F3D8D3] animate-pulse" />
                  <span>COMMISSIONS OPEN</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#E5D7CB]/60 gap-4">
          <p>© {new Date().getFullYear()} SARITA PUJARI. Handcrafted with intention.</p>
          <div className="flex items-center gap-6">
            <span>Studio & Garments · Independent Fashion</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#FBF7F2] transition-colors cursor-pointer flex items-center gap-1.5 tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 hover:bg-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
