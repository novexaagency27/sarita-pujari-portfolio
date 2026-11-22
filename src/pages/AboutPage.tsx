import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Scissors, Sparkles, Layers, Heart, Star } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#EFE6DD] text-[#240B10] pt-24 sm:pt-28 md:pt-32 pb-32">
      {/* =========================================================================
          01. ABOUT HERO: EDITORIAL HEADING & POLAROID SPREAD
          (Inspired by Reference 1: ABOUT ME & Reference 4: Tiara)
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 mb-10 sm:mb-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-3 sm:space-y-4">
            <span className="font-script text-2xl sm:text-4xl text-[#F3D8D3] block">
              behind the garments ✨
            </span>
            <h1 className="hero-clamp-title font-display font-black tracking-tight text-[#FBF7F2] leading-[0.9] uppercase">
              ABOUT ME
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E5D7CB] pt-1">
              SARITA PUJARI · FASHION DESIGNER & GARMENT MAKER
            </p>
          </div>
        </div>

        {/* Asymmetrical Portrait & Bio Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Polaroid Portrait with Washi Tape */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg bg-[#FBF7F2] p-5 pb-8 rounded-[2rem] border border-[#D4C3B3] shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              {/* Washi Tape Pin at Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape px-8 py-1 rounded text-[10px] font-mono tracking-widest text-[#581822] uppercase shadow-sm">
                STUDIO PORTRAIT // 2026
              </div>

              <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-[#3A0D14]">
                <img
                  src={DESIGNER_INFO.portrait}
                  alt="Sarita Pujari in studio"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#581822]">
                <span className="font-display font-bold">SARITA PUJARI</span>
                <span className="text-[#6B4E54]">DESIGNER & MAKER</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio & Perspective */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-8">
            <div className="p-6 rounded-3xl bg-[#FBF7F2] border border-[#D4C3B3] space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#581822] block">
                CREATIVE CORE
              </span>
              <h2 className="font-serif italic text-2xl sm:text-3xl text-[#581822] leading-snug">
                &ldquo;{DESIGNER_INFO.bioIntro}&rdquo;
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#240B10]/85 font-light leading-relaxed">
              {DESIGNER_INFO.bioDescription}
            </p>

            <p className="text-sm sm:text-base text-[#240B10]/75 font-light leading-relaxed">
              {DESIGNER_INFO.collaborativeJourney}
            </p>

            <div className="p-6 rounded-3xl bg-[#E5D7CB] border border-[#D4C3B3] space-y-2">
              <p className="font-serif italic text-lg text-[#581822]">
                &ldquo;I work with clothes, explore ideas, experiment with materials and turn thoughts into tangible things.&rdquo;
              </p>
              <p className="text-xs font-mono text-[#6B4E54] uppercase tracking-wider">
                India · Design Studio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. STUDIO PHILOSOPHY: "THE WAY I SEE CLOTHING"
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-[#D4C3B3] shadow-[0_8px_30px_rgba(88,24,34,0.04)]">
          <div className="max-w-2xl mb-10 sm:mb-14 space-y-2">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#581822] block">
              TRIPTYCH // PERSPECTIVE
            </span>
            <h2 className="section-clamp-heading font-display font-black text-[#581822] tracking-tight uppercase">
              THE WAY I SEE CLOTHING
            </h2>
          </div>

          {/* Three Varied Editorial Bento Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {DESIGNER_INFO.philosophyBlocks.map((block) => (
              <div
                key={block.number}
                className="bg-[#EFE6DD] rounded-3xl p-5 pb-7 border border-[#D4C3B3] space-y-5 hover:-translate-y-1 transition-transform shadow-sm"
              >
                <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-[#581822]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2 px-1">
                  <span className="font-mono text-xs text-[#581822] font-bold">
                    PILLAR {block.number}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-[#581822] tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#240B10]/80 font-light leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. STUDIO ARCHIVE: VISUAL COLLAGE
      ========================================================================== */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/15 gap-4">
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#F3D8D3] block mb-1">
                STUDIO WALL & MOMENTS
              </span>
              <h2 className="section-clamp-heading font-display font-black text-[#FBF7F2] tracking-tight uppercase">
                THE STUDIO ARCHIVE
              </h2>
            </div>
            <p className="text-xs font-mono text-[#E5D7CB] uppercase tracking-wider">
              SWATCHES · PINS · SEAMS · PATTERN PAPERS
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESIGNER_INFO.studioArchiveCollage.map((item, idx) => (
              <div key={idx} className="group space-y-2">
                <div className="overflow-hidden rounded-2xl aspect-square bg-[#3A0D14] border border-white/15 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="font-display font-bold text-xs text-[#FBF7F2] truncate">
                  {item.title}
                </p>
                <p className="text-[10px] font-mono text-[#E5D7CB] -mt-1">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
