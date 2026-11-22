import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'PORTFOLIO', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ARCHIVE', path: '/work' },
    { label: 'PROCESS', path: '/process' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 md:pt-6 transition-all duration-300 pointer-events-none">
        <div className="max-w-[1380px] mx-auto pointer-events-auto">
          {/* Aesthetic Capsule Navigation Bar */}
          <div
            className={`transition-all duration-300 rounded-full px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 flex items-center justify-between border ${
              isScrolled
                ? 'bg-[#EFE6DD]/95 backdrop-blur-md border-[#D4C3B3] shadow-[0_8px_30px_rgba(88,24,34,0.08)]'
                : 'bg-[#FBF7F2]/90 backdrop-blur-sm border-[#D4C3B3]/80 shadow-[0_4px_20px_rgba(88,24,34,0.04)]'
            }`}
          >
            {/* Left: Brand Identity */}
            <Link to="/" className="group flex items-center gap-2 sm:gap-2.5 shrink-0">
              <span className="w-8 h-8 rounded-full bg-[#581822] text-[#FBF7F2] flex items-center justify-center font-display font-bold text-xs sm:text-sm tracking-tight group-hover:scale-105 transition-transform shrink-0">
                SP
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-[#581822] group-hover:text-[#78222E] transition-colors leading-none truncate">
                  SARITA PUJARI
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-[#6B4E54] mt-0.5 font-medium truncate">
                  Studio & Garments
                </span>
              </div>
            </Link>

            {/* Center: Aesthetic Capsule Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 bg-[#E5D7CB]/60 p-1.5 rounded-full border border-[#D4C3B3]/60">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#581822] text-[#FBF7F2] font-semibold shadow-sm'
                        : 'text-[#581822]/80 hover:text-[#581822] hover:bg-[#FBF7F2]/60 font-medium'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Cute Status Pill Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-4 py-1.5 rounded-full bg-[#581822] text-[#FBF7F2] hover:bg-[#78222E] text-xs font-display uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-sm hover:scale-103"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3D8D3] animate-pulse" />
                <span>INQUIRE // BESPOKE</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button (Accessible Touch Target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full bg-[#E5D7CB] text-[#581822] hover:bg-[#581822] hover:text-[#FBF7F2] transition-colors cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-3 sm:inset-x-6 top-18 sm:top-20 z-40 md:hidden max-w-md mx-auto bg-[#581822] text-[#FBF7F2] rounded-3xl p-6 shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <span className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-[#F3D8D3]">
                  SARITA PUJARI // STUDIO
                </span>
                <span className="text-[10px] font-mono text-[#E5D7CB]">
                  GARMENTS STUDIO
                </span>
              </div>

              <nav className="flex flex-col space-y-1.5 py-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-display uppercase tracking-wider transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#FBF7F2] text-[#581822] font-bold shadow-sm'
                          : 'text-[#FBF7F2]/80 hover:bg-white/10 font-medium'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#F3D8D3]">
                <span>AVAILABLE FOR COMMISSIONS</span>
                <span className="w-2 h-2 rounded-full bg-[#F3D8D3] animate-pulse" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
