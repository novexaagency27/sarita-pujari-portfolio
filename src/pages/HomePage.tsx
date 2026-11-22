import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Sparkles, Heart, Check, Star, Mail, Phone, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO, ALL_PROJECTS, PROCESS_STAGES } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  // Curate aesthetic projects for the viral bento & snapshot grids
  const featuredSnapshots = ALL_PROJECTS.slice(0, 8);
  const phoneReels = [
    {
      title: "Creamsicle Set",
      category: "Co-ord Set",
      slug: "creamsicle-set",
      image: "/portfolio/collection/co-ord-sets/creamsicle-set/1.jpg",
      metric: "100% Tailored",
      detail: "Hand-drafted paper pattern with pastel balance."
    },
    {
      title: "After Hours Top",
      category: "Hardware Rebel",
      slug: "after-hours-top",
      image: "/portfolio/collection/tops/after-hours-top/1.jpg",
      metric: "Custom Draping",
      detail: "Hardware safety-pin accent with raw edge cotton."
    },
    {
      title: "Boho Mosaic Top",
      category: "Upcycled Denim",
      slug: "boho-mosaic-denim-top",
      image: "/portfolio/collection/tops/boho-mosaic-denim-top/1.png",
      metric: "Zero Waste",
      detail: "Patchwork denim mosaic from post-consumer offcuts."
    }
  ];

  // Story Highlight Bubbles (Rich Data for Interactive View)
  const storyHighlights = [
    {
      title: "STUDIO",
      subtitle: "Needle & Machine",
      image: "/portfolio/practice/garment-making.jpg",
      count: "8 posts",
      note: "Late evenings at the sewing machine in the studio workshop. Drafting master pattern balances, pressing open darts with iron heat, and constructing garments one stitch at a time.",
      tag: "GARMENT MAKING"
    },
    {
      title: "SWATCHES",
      subtitle: "Tactile Fiber Studies",
      image: "/portfolio/practice/textile-exploration.jpg",
      count: "12 posts",
      note: "Handling cotton twills, natural linen yardages, and hand-feel samples. Testing bias response, drape elasticity, and how cloth breathes on the skin.",
      tag: "MATERIAL RESEARCH"
    },
    {
      title: "FITTINGS",
      subtitle: "Body Ease & Poise",
      image: "/portfolio/practice/inclusive-design.jpg",
      count: "15 posts",
      note: "Pinning live silhouettes on diverse bodies. Checking armhole movement, shoulder line balance, and ensuring clothing empowers confidence.",
      tag: "HUMAN ERGONOMICS"
    },
    {
      title: "REWORK",
      subtitle: "Deconstructed Denim",
      image: "/portfolio/practice/upcycling-reworking.jpg",
      count: "9 posts",
      note: "Deconstructing vintage denim panels, rearranging pocket geometries, and transforming discarded fabrics into wearable sculptural garments.",
      tag: "UPCYCLING"
    },
    {
      title: "ZERO-WASTE",
      subtitle: "Offcut Redirection",
      image: "/portfolio/practice/textile-waste-to-lifestyle.jpg",
      count: "6 posts",
      note: "Gathering cutting-table offcuts and piecing them into mosaic patchworks, interior home accessories, and zero-waste lifestyle creations.",
      tag: "SUSTAINABILITY"
    },
    {
      title: "DETAILS",
      subtitle: "Hardware & Finishes",
      image: "/portfolio/collection/tops/safety-pin-rebellion-tee/1.jpg",
      count: "18 posts",
      note: "Industrial safety pins, contrast thread work, hand-finished hems, and tactile hardware accents that give each garment an unmistakable personality.",
      tag: "HARDWARE ACCENTS"
    },
  ];

  // Specialties Pill Cloud
  const nichePills = [
    "Bespoke Corsetry", "Pattern Drafting", "Textile Upcycling", 
    "Drape & Volume", "Hand Finished Hems", "Bias Cut Tops", 
    "Tailored Bottoms", "Statement Coords", "Hardware Pinning", 
    "Zero Waste Panels", "Handcrafted Silhouettes", "Human Body Ergonomics"
  ];

  return (
    <div className="bg-[#EFE6DD] text-[#240B10] pt-24 sm:pt-28 pb-24 overflow-hidden">
      {/* =========================================================================
          01. HERO: "PORTFOLIO // SARITA PUJARI" (CHIC WINE CREATOR THEME)
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(88,24,34,0.3)]">
          {/* Subtle paper crease gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-black/30 pointer-events-none" />

          {/* Top floating pill info */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-white/15">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F3D8D3] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#F3D8D3] font-semibold">
                INDEPENDENT FASHION & GARMENTS STUDIO
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5D7CB]">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px]">
                VOLUME 01 // 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 hidden sm:inline text-[11px]">
                HANDCRAFTED GARMENTS
              </span>
            </div>
          </div>

          {/* Giant Curvy Typography & Portrait Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 sm:pt-12 pb-4">
            {/* Left: Oversized Curvy Typography */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Cute Handwritten script greeting */}
              <div className="flex items-center gap-2">
                <span className="font-script text-2xl sm:text-4xl text-[#F3D8D3] -rotate-2 inline-block">
                  Hey, it's Sarita ✨
                </span>
              </div>

              {/* Massive Retro Display Title */}
              <div className="space-y-1">
                <h1 className="hero-clamp-title font-display font-black tracking-tight text-[#FBF7F2] leading-[0.9] uppercase drop-shadow-sm">
                  PORTFOLIO
                </h1>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F3D8D3] uppercase mt-1">
                  SARITA PUJARI
                </h2>
              </div>

              {/* Aesthetic Subtitle */}
              <p className="text-sm sm:text-lg text-[#FBF7F2]/90 font-light leading-relaxed max-w-lg">
                Fashion designer, garment maker & material explorer. Turning raw fabric, paper patterns, and creative ideas into wearable art.
              </p>

              {/* Action Buttons & Badges */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/work"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FBF7F2] text-[#581822] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F3D8D3] hover:scale-104 transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>Explore The Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FBF7F2] font-display font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  About The Maker
                </Link>
              </div>

              {/* Social / Studio Footer Stamps */}
              <div className="pt-6 sm:pt-8 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-mono text-[#E5D7CB]">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#F3D8D3]">status:</span> Independent Practice
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#F3D8D3]">craft:</span> Pattern Drafting & Making
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#F3D8D3]">pieces:</span> 36 Catalogued
                </span>
              </div>
            </div>

            {/* Right: Framed Portrait with Washi Tape */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                {/* Washi Tape Pin at Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 washi-tape px-6 sm:px-8 py-1 rounded text-[10px] font-mono tracking-widest text-[#581822] uppercase shadow-sm rotate-1">
                  CREATIVE STUDIO
                </div>

                {/* Main Photo Card */}
                <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] aspect-[4/5] bg-[#3A0D14] p-2 border-2 border-white/20 shadow-2xl group">
                  <img
                    src={DESIGNER_INFO.portrait}
                    alt="Sarita Pujari fashion designer"
                    className="w-full h-full object-cover object-top rounded-[1.5rem] sm:rounded-[1.75rem] filter contrast-[1.03] group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A0D14]/80 via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />

                  {/* Overlaid Pill Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                    <span className="bg-[#581822]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15 text-[10px] sm:text-[11px] font-display font-bold">
                      SARITA PUJARI · 2026
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#F3D8D3] text-[#581822] flex items-center justify-center font-bold text-xs">
                      ★
                    </span>
                  </div>
                </div>

                {/* Floating Aesthetic Badge Sticker (Bottom Right) */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-3 z-20 bg-[#FBF7F2] text-[#581822] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border border-[#D4C3B3] flex items-center gap-2 rotate-2">
                  <span className="w-2 h-2 rounded-full bg-[#581822] animate-pulse" />
                  <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-tight">
                    AVAILABLE FOR BESPOKE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. STORY HIGHLIGHTS: STUDIO DIARIES // PROMINENT & INTERACTIVE
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-[#D4C3B3] shadow-[0_10px_35px_rgba(88,24,34,0.05)]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-[#D4C3B3]/60 gap-4">
            <div>
              <span className="font-display font-extrabold text-xs uppercase tracking-[0.22em] text-[#581822] block mb-1">
                STUDIO DIARIES // BTS SNAPSHOTS
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#581822] tracking-tight uppercase">
                STORY HIGHLIGHTS
              </h3>
              <p className="text-xs sm:text-sm text-[#6B4E54] mt-1 max-w-lg font-light leading-relaxed">
                A tactile visual diary from the cutting table, fitting room, and fabric swatches in the studio. Tap any bubble to inspect its diary note.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#581822] bg-[#E5D7CB] px-3.5 py-1 rounded-full uppercase tracking-wider font-semibold self-start sm:self-auto shrink-0">
              6 CURATED ALBUMS
            </span>
          </div>

          {/* Highlights Row (Responsive Grid / Touch Carousel) */}
          <div className="flex items-center sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 scrollbar-none snap-x snap-mandatory">
            {storyHighlights.map((hl, idx) => {
              const isSelected = activeHighlight === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveHighlight(isSelected ? null : idx)}
                  className="group flex flex-col items-center space-y-2.5 cursor-pointer shrink-0 snap-center min-w-[95px] sm:min-w-0 transition-transform hover:-translate-y-1"
                >
                  {/* Outer Ring */}
                  <div className={`p-[3px] rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#581822] scale-108 shadow-lg'
                      : 'bg-gradient-to-tr from-[#581822] via-[#F3D8D3] to-[#581822] group-hover:scale-105 group-hover:shadow-md'
                  }`}>
                    <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full overflow-hidden p-[2px] bg-[#FBF7F2]">
                      <img
                        src={hl.image}
                        alt={hl.title}
                        className="w-full h-full object-cover rounded-full filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-0.5">
                    <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#581822] block">
                      {hl.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#6B4E54] block">
                      {hl.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Story Diary Card (Expands when clicked!) */}
          <AnimatePresence>
            {activeHighlight !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden mt-8 pt-8 border-t border-[#D4C3B3]"
              >
                <div className="bg-[#E5D7CB] rounded-3xl p-5 sm:p-8 relative shadow-sm">
                  {/* Washi Tape Stamp */}
                  <div className="absolute -top-3 left-6 washi-tape px-6 py-1 rounded text-[10px] font-mono tracking-widest text-[#581822] uppercase">
                    STUDIO NOTE // {storyHighlights[activeHighlight].title}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveHighlight(null)}
                    className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#581822] text-[#FBF7F2] flex items-center justify-center text-xs hover:bg-[#78222E] transition-colors cursor-pointer"
                    aria-label="Close story detail"
                  >
                    ✕
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                    <div className="md:col-span-4 flex justify-center">
                      <div className="overflow-hidden rounded-2xl aspect-square w-full max-w-[240px] bg-[#3A0D14] border-2 border-white/40 shadow-md">
                        <img
                          src={storyHighlights[activeHighlight].image}
                          alt={storyHighlights[activeHighlight].title}
                          className="w-full h-full object-cover filter contrast-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-8 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-0.5 rounded-full bg-[#581822] text-[#F3D8D3] text-[10px] font-mono uppercase font-bold">
                          {storyHighlights[activeHighlight].tag}
                        </span>
                        <span className="text-xs font-mono text-[#6B4E54]">
                          {storyHighlights[activeHighlight].subtitle}
                        </span>
                      </div>

                      <h4 className="font-display font-black text-xl sm:text-2xl text-[#581822] uppercase">
                        {storyHighlights[activeHighlight].title} STUDIO DIARY
                      </h4>

                      <p className="text-sm font-sans text-[#240B10]/85 font-light leading-relaxed">
                        {storyHighlights[activeHighlight].note}
                      </p>

                      <div className="pt-2 flex items-center gap-4">
                        <Link
                          to="/work"
                          className="text-xs font-display font-bold uppercase tracking-wider text-[#581822] hover:text-[#78222E] flex items-center gap-1.5"
                        >
                          <span>View Related Works In Archive</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================================
          03. "ABOUT ME" & STUDIO PROFILE BENTO
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Instagram-Style Studio Profile Card Widget */}
          <div className="lg:col-span-5 bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F3D8D3]" />
                  <span className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-[#F3D8D3]">
                    @sarita.pujari
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-[#E5D7CB]">
                  VERIFIED MAKER
                </span>
              </div>

              {/* Profile Avatar & Quick Stats */}
              <div className="pt-6 flex items-center justify-between gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-[#F3D8D3] shrink-0">
                  <img
                    src={DESIGNER_INFO.portrait}
                    alt="Sarita profile avatar"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center flex-1">
                  <div>
                    <span className="font-display font-extrabold text-lg sm:text-2xl text-[#FBF7F2] block">
                      36
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#E5D7CB] uppercase">
                      Pieces
                    </span>
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-lg sm:text-2xl text-[#F3D8D3] block">
                      08
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#E5D7CB] uppercase">
                      Phases
                    </span>
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-lg sm:text-2xl text-[#FBF7F2] block">
                      01
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#E5D7CB] uppercase">
                      Studio
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Copy */}
              <div className="pt-6 space-y-1.5 sm:space-y-2">
                <h4 className="font-display font-bold text-base sm:text-lg text-[#FBF7F2]">
                  Sarita Pujari
                </h4>
                <p className="text-[11px] sm:text-xs font-mono text-[#F3D8D3] uppercase tracking-wider">
                  Fashion Designer · Garment Maker
                </p>
                <p className="text-xs sm:text-sm font-sans text-[#FBF7F2]/85 leading-relaxed pt-1">
                  I make clothes. I collect ideas. I create stories. Independent practice focused on pattern drafting, textile exploration & wearable craftsmanship.
                </p>
              </div>
            </div>

            {/* Profile Action Buttons */}
            <div className="pt-6 sm:pt-8 grid grid-cols-2 gap-3">
              <Link
                to="/contact"
                className="py-3 px-3 sm:px-4 rounded-xl bg-[#FBF7F2] text-[#581822] font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider text-center hover:bg-[#F3D8D3] transition-colors"
              >
                Inquire Project
              </Link>
              <Link
                to="/work"
                className="py-3 px-3 sm:px-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#FBF7F2] font-display font-semibold text-[11px] sm:text-xs uppercase tracking-wider text-center transition-colors"
              >
                Browse Works
              </Link>
            </div>
          </div>

          {/* Right: "ABOUT ME" Polaroid & Creative Philosophy Spread */}
          <div className="lg:col-span-7 bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-[#D4C3B3] flex flex-col justify-between shadow-[0_8px_30px_rgba(88,24,34,0.04)] relative">
            {/* Washi Tape Accent */}
            <div className="absolute -top-3 right-8 sm:right-12 washi-tape px-5 sm:px-6 py-1 rounded text-[10px] font-mono text-[#581822] rotate-2">
              PHILOSOPHY // 01
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display font-extrabold text-xs uppercase tracking-[0.2em] text-[#581822]">
                  THE PHILOSOPHY
                </span>
                <span className="text-[#581822]">✦</span>
              </div>
              <h3 className="section-clamp-heading font-display font-black text-[#581822] tracking-tight leading-[0.95] mb-6">
                ABOUT ME
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left Text */}
                <div className="md:col-span-7 space-y-3.5">
                  <p className="font-serif italic text-lg sm:text-2xl text-[#581822] leading-snug">
                    &ldquo;{DESIGNER_INFO.bioIntro}&rdquo;
                  </p>
                  <p className="text-xs sm:text-base text-[#240B10]/80 font-light leading-relaxed">
                    {DESIGNER_INFO.bioDescription}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#E5D7CB] text-[#581822] text-[11px] font-mono font-medium">
                      Design Studio
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#E5D7CB] text-[#581822] text-[11px] font-mono font-medium">
                      Hand Pattern Cutting
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#E5D7CB] text-[#581822] text-[11px] font-mono font-medium">
                      Zero Waste Focus
                    </span>
                  </div>
                </div>

                {/* Right Polaroid Photo with washi tape */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="bg-[#EFE6DD] p-3 pb-5 rounded-2xl shadow-md border border-[#D4C3B3] -rotate-2 hover:rotate-0 transition-transform">
                    <div className="overflow-hidden rounded-xl aspect-[3/4] bg-[#581822]">
                      <img
                        src="/portfolio/practice/garment-making.jpg"
                        alt="Garment making machine work"
                        className="w-full h-full object-cover filter contrast-[1.02]"
                      />
                    </div>
                    <p className="font-script text-base text-[#581822] text-center pt-2">
                      hands at work ✨
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D4C3B3]/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#6B4E54]">
                AUTHENTIC CRAFT OVER MASS PRODUCTION
              </span>
              <Link
                to="/about"
                className="font-display font-bold text-xs uppercase tracking-wider text-[#581822] hover:text-[#78222E] flex items-center gap-1"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. "MY NICHE & SPECIALTIES" // "I CREATE"
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#E5D7CB] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-[#D4C3B3] shadow-[0_10px_35px_rgba(88,24,34,0.05)] relative overflow-hidden">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="font-display font-extrabold text-xs uppercase tracking-[0.25em] text-[#581822]">
              WHAT I BRING TO LIFE // SKILLS & SPECIALTIES
            </span>
            <h2 className="section-clamp-heading font-display font-black text-[#581822] tracking-tight uppercase">
              I CREATE
            </h2>
            <p className="text-xs sm:text-base text-[#240B10]/75 font-light">
              From initial fabric observation to structural pattern cutting and precision sewing machine assembly.
            </p>
          </div>

          {/* Dual Pill Category Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {/* Column 1: Garment Making */}
            <div className="bg-[#FBF7F2] rounded-3xl p-5 sm:p-8 border border-[#D4C3B3] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4C3B3]/60">
                <h4 className="font-display font-extrabold text-base sm:text-lg text-[#581822] uppercase tracking-wider">
                  GARMENT MAKING
                </h4>
                <span className="px-3 py-0.5 rounded-full bg-[#581822] text-[#FBF7F2] text-[10px] font-mono">
                  CORE CRAFT
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {["Manual Pattern Drafting", "Bias Cutting", "Garment Construction", "Fitting & Tailoring", "Precision Dart Alignment", "Seam Iron Pressing"].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#EFE6DD] border border-[#D4C3B3]/70 font-display font-bold text-xs text-[#581822] flex items-center justify-between">
                    <span>{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#581822]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Textile Exploration & Upcycling */}
            <div className="bg-[#FBF7F2] rounded-3xl p-5 sm:p-8 border border-[#D4C3B3] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4C3B3]/60">
                <h4 className="font-display font-extrabold text-base sm:text-lg text-[#581822] uppercase tracking-wider">
                  TEXTILE DESIGN
                </h4>
                <span className="px-3 py-0.5 rounded-full bg-[#581822] text-[#FBF7F2] text-[10px] font-mono">
                  EXPLORATION
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {["Upcycling & Reworking", "Zero-Waste Fabric Panels", "Hardware Pinning", "Fiber Hand-Feel Research", "Natural Draping", "Surface Manipulation"].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#EFE6DD] border border-[#D4C3B3]/70 font-display font-bold text-xs text-[#581822] flex items-center justify-between">
                    <span>{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#581822]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Floating Pill Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2">
            {nichePills.map((pill, idx) => (
              <span
                key={idx}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#581822] text-[#FBF7F2] font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-[#78222E] hover:scale-104 transition-all shadow-sm cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. "PHOTOGRAPHY SNAPSHOT" // STUDIO GALLERY
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-white/15 gap-4">
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#F3D8D3] block mb-1">
                STUDIO GALLERY // CURATED MOMENTS
              </span>
              <h2 className="section-clamp-heading font-display font-black text-[#FBF7F2] tracking-tight uppercase">
                PHOTOGRAPHY SNAPSHOT
              </h2>
            </div>
            <Link
              to="/work"
              className="px-5 sm:px-6 py-2.5 rounded-full bg-[#FBF7F2] text-[#581822] hover:bg-[#F3D8D3] font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <span>View All 36 Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4x2 Aesthetic Grid of Rounded Snapshot Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-6">
            {featuredSnapshots.map((item) => (
              <Link
                key={item.id}
                to={`/work/${item.slug}`}
                className="group flex flex-col space-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#3A0D14] border border-white/15 shadow-md">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 sm:p-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FBF7F2] text-[#581822] font-display font-bold text-[9px] sm:text-[10px] uppercase">
                      Inspect Piece →
                    </span>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#FBF7F2] group-hover:text-[#F3D8D3] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] font-mono text-[#E5D7CB] uppercase tracking-wider">
                    {item.categoryLabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. STUDIO REELS & CASE STUDIES // 3D SMARTPHONE MOCKUPS
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="font-display font-extrabold text-xs uppercase tracking-[0.25em] text-[#581822]">
            GARMENTS IN MOTION // REELS & CASE STUDIES
          </span>
          <h2 className="section-clamp-heading font-display font-black text-[#581822] tracking-tight uppercase">
            STUDIO REELS
          </h2>
          <p className="text-xs sm:text-base text-[#240B10]/75 font-light">
            Experiencing the silhouette, drape, and material behavior in real light.
          </p>
        </div>

        {/* 3 Realistic Smartphone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {phoneReels.map((reel, idx) => (
            <Link
              key={idx}
              to={`/work/${reel.slug}`}
              className="group w-full max-w-[280px] sm:max-w-[310px] bg-[#581822] text-[#FBF7F2] p-4 pt-3 pb-5 rounded-[2.5rem] shadow-2xl border-4 border-[#3A0D14] flex flex-col items-center hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Dynamic Island Pill at top */}
              <div className="w-20 h-3.5 bg-black rounded-full mb-3 flex items-center justify-end px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>

              {/* Screen Area */}
              <div className="w-full aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-black relative shadow-inner">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-104 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.png')) {
                      target.src = target.src.replace('.png', '.jpg');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#581822]/90 text-[10px] font-mono tracking-wider text-[#F3D8D3] self-start mb-1">
                    {reel.category}
                  </span>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {reel.title}
                  </h4>
                  <p className="text-[11px] font-sans text-white/80 line-clamp-2">
                    {reel.detail}
                  </p>
                </div>
              </div>

              {/* Bottom Phone Bar */}
              <div className="w-full pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#E5D7CB]">
                <span>{reel.metric}</span>
                <span className="text-[#F3D8D3] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Case →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          07. "MY VALUES" // DOUBLE-OUTLINE TYPOGRAPHY & BURGUNDY CARDS
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-[#D4C3B3] shadow-[0_8px_30px_rgba(88,24,34,0.04)] overflow-hidden">
          {/* Double Outline Large Title */}
          <div className="relative mb-10 sm:mb-14 text-center overflow-hidden">
            <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-outline-wine tracking-tighter opacity-25 uppercase block select-none truncate">
              MY VALUES MY VALUES
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-[#581822] tracking-tight uppercase absolute inset-0 flex items-center justify-center">
              MY VALUES & ETHOS
            </h2>
          </div>

          {/* 4 Rich Burgundy Square Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                number: "01",
                title: "AUTHENTICITY",
                desc: "Clothing that originates from real manual craftsmanship, not automated fast-fashion templates. Every seam carries personal maker intention."
              },
              {
                number: "02",
                title: "SUSTAINABILITY",
                desc: "Repurposing post-industrial fabric offcuts and vintage denim into striking new silhouettes. Zero waste isn't an afterthought, it's the core."
              },
              {
                number: "03",
                title: "CRAFTSMANSHIP",
                desc: "Master paper drafting, precision grainline cutting, and tailor-level construction. Building garments built to last and be lived in."
              },
              {
                number: "04",
                title: "WEARABLE ART",
                desc: "Clothing that balances sculptural volume with effortless comfort. Form that respects human movement, breath, and confidence."
              }
            ].map((val) => (
              <div
                key={val.number}
                className="bg-[#581822] text-[#FBF7F2] p-5 sm:p-7 rounded-3xl border border-[#3A0D14] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-md"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs text-[#F3D8D3] font-semibold tracking-widest block">
                    ETHOS // {val.number}
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#FBF7F2] tracking-tight">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FBF7F2]/80 font-light leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#E5D7CB]">
                  <span>STUDIO VALUE</span>
                  <span className="text-[#F3D8D3]">✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          08. CREATIVE JOURNEY // "FROM THOUGHT TO THREAD" PREVIEW
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#E5D7CB] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-[#D4C3B3] flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2.5 max-w-xl">
            <span className="font-display font-extrabold text-xs uppercase tracking-[0.25em] text-[#581822]">
              METHODOLOGY // THE 8 PHASES
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#581822] tracking-tight uppercase">
              FROM THOUGHT TO THREAD
            </h3>
            <p className="text-xs sm:text-base text-[#240B10]/80 font-light leading-relaxed">
              Explore the complete 8-stage fashion design journey: from everyday tactile inspiration to master paper drafting, machine needlework, and final archive pieces.
            </p>
          </div>

          <Link
            to="/process"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#581822] text-[#FBF7F2] hover:bg-[#78222E] font-display font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-md shrink-0 self-start md:self-auto"
          >
            <span>Experience The 8 Stages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          09. FINAL INVITATION // WINE BURGUNDY BANNER & WASHI TAPE
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-14 md:p-18 text-center relative overflow-hidden shadow-2xl">
          {/* Washi Tape Pin at Top */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 washi-tape px-8 sm:px-10 py-1 rounded text-[10px] sm:text-[11px] font-mono tracking-widest text-[#581822] uppercase shadow-sm">
            LET'S COLLABORATE
          </div>

          <div className="max-w-2xl mx-auto space-y-5 pt-3">
            <span className="font-script text-2xl sm:text-4xl text-[#F3D8D3] block">
              Have an idea in mind? ✨
            </span>

            <h2 className="section-clamp-heading font-display font-black text-[#FBF7F2] tracking-tight leading-[0.92] uppercase">
              LET'S CREATE SOMETHING BEAUTIFUL
            </h2>

            <p className="text-xs sm:text-base text-[#FBF7F2]/85 font-light leading-relaxed">
              Currently accepting select bespoke commissions, creative collaborations, and brand partnerships.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/contact"
                className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#FBF7F2] text-[#581822] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F3D8D3] hover:scale-104 transition-all shadow-xl"
              >
                Get In Touch With Sarita
              </Link>
              <Link
                to="/work"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FBF7F2] font-display font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Explore Archive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
