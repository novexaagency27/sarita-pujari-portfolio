import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Layers, Scissors, Check, Eye } from 'lucide-react';
import { PROCESS_STAGES, ProcessStage } from '../data/portfolioData';

export const ProcessPage: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation across stages (Arrow Left / Right)
  const handlePrev = useCallback(() => {
    setActiveStageIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveStageIndex((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1));
  }, []);

  const selectStage = (index: number) => {
    setActiveStageIndex(index);
    showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const activeStage = PROCESS_STAGES[activeStageIndex];
  const progressPercent = Math.round(((activeStageIndex + 1) / PROCESS_STAGES.length) * 100);

  return (
    <div className="bg-[#EFE6DD] text-[#240B10] pt-24 sm:pt-28 md:pt-32 pb-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            01. PAGE HERO: BALANCED & CENTERED
        ========================================================================== */}
        <section className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 mb-10 sm:mb-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-4">
            <span className="font-script text-2xl sm:text-3xl text-[#F3D8D3] block">
              the 8 creative stages ✨
            </span>
            <h1 className="hero-clamp-title font-display font-black tracking-tight text-[#FBF7F2] leading-[0.92] uppercase">
              FROM THOUGHT TO THREAD
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E5D7CB]">
              METHODOLOGY · MATERIAL EXPERIMENTATION · STUDIO CRAFT
            </p>
            <p className="text-sm sm:text-base text-[#FBF7F2]/85 font-light leading-relaxed pt-2">
              &ldquo;Every garment passes through a series of observations, decisions, experiments and refinements. The process is not always linear, but each stage brings an idea closer to its final form.&rdquo;
            </p>
          </div>
        </section>

        {/* =========================================================================
            02. INTERACTIVE STUDIO PROCESS SHOWCASE (CENTERED 50/50 WORKBENCH)
        ========================================================================== */}
        <section
          ref={showcaseRef}
          id="process-showcase"
          className="bg-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 border border-[#D4C3B3] shadow-[0_10px_35px_rgba(88,24,34,0.05)] mb-14"
        >
          {/* Top Stage Navigation Stepper Bar */}
          <div className="mb-8 space-y-4">
            {/* Horizontal Stage Buttons */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-[#E5D7CB]/70 border border-[#D4C3B3] overflow-x-auto scrollbar-none">
              {PROCESS_STAGES.map((stg, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stg.step}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`px-3 sm:px-4 py-2 rounded-xl sm:rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#581822] text-[#FBF7F2] shadow-sm scale-102'
                        : 'text-[#581822] hover:bg-[#EFE6DD]'
                    }`}
                  >
                    <span className={isActive ? 'text-[#F3D8D3]' : 'opacity-70'}>
                      {stg.step}
                    </span>
                    <span className="text-[11px]">{stg.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Stepper Progress Metadata Track */}
            <div className="flex items-center justify-between text-xs font-mono text-[#6B4E54] px-1 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#581822] animate-pulse" />
                <span className="font-display font-bold text-[#581822] uppercase tracking-wider text-xs">
                  PHASE {activeStage.step} OF 08 · {activeStage.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24 sm:w-36 h-2 bg-[#E5D7CB] rounded-full overflow-hidden border border-[#D4C3B3]">
                  <div
                    className="h-full bg-[#581822] transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="font-bold text-[#581822]">{progressPercent}%</span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Balanced Stage Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Stage Storytelling & Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  {/* Phase Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C3B3]/60">
                    <span className="font-display font-extrabold text-xs uppercase tracking-[0.2em] text-[#581822]">
                      {activeStage.phase} // 08
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#E5D7CB] font-mono text-[11px] text-[#581822] uppercase font-bold">
                      {activeStage.name}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#581822] tracking-tight leading-tight uppercase">
                    {activeStage.title}
                  </h2>

                  {/* Stage Narrative Paragraph */}
                  <p className="text-sm sm:text-base text-[#240B10]/85 font-light leading-relaxed font-sans">
                    {activeStage.description}
                  </p>

                  {/* Designer Observation Quote Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#E5D7CB] border-l-4 border-[#581822] space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B4E54] block font-semibold">
                      STUDIO OBSERVATION
                    </span>
                    <blockquote className="font-serif italic text-base sm:text-lg text-[#581822] leading-snug">
                      &ldquo;{activeStage.studioNote || activeStage.studioNote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Visual Artifact Box */}
                  <div className="p-4 rounded-2xl bg-[#EFE6DD] border border-[#D4C3B3] space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-display font-bold text-[#581822]">
                      <Sparkles className="w-3.5 h-3.5 text-[#581822]" />
                      <span>VISUAL ARTIFACT EXAMINED</span>
                    </div>
                    <p className="text-xs text-[#240B10]/80">
                      {activeStage.visualType}
                    </p>
                  </div>

                  {/* Key Disciplines Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeStage.keyDisciplines.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1 rounded-full bg-[#E5D7CB] text-[10px] font-mono uppercase tracking-wider text-[#581822] font-semibold"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stepper Navigation Buttons (Left & Right Controls) */}
              <div className="pt-6 border-t border-[#D4C3B3]/60 flex items-center justify-between gap-4">
                <button
                  disabled={activeStageIndex === 0}
                  onClick={handlePrev}
                  className="px-4 sm:px-6 py-2.5 rounded-full border border-[#581822] text-[#581822] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#581822] hover:text-[#FBF7F2] disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                  <span className="hidden sm:inline font-mono text-[10px] opacity-60">(←)</span>
                </button>

                <span className="font-display font-bold text-xs text-[#581822] uppercase tracking-wider">
                  STAGE {activeStage.step} OF 08
                </span>

                <button
                  disabled={activeStageIndex === PROCESS_STAGES.length - 1}
                  onClick={handleNext}
                  className="px-4 sm:px-6 py-2.5 rounded-full bg-[#581822] text-[#FBF7F2] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#78222E] disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Next</span>
                  <span className="hidden sm:inline font-mono text-[10px] opacity-60">(→)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Framed Image Visual (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] bg-[#3A0D14] rounded-[2rem] overflow-hidden shadow-xl border-2 border-[#D4C3B3]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.step}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeStage.image}
                      alt={activeStage.title}
                      className="w-full h-full object-cover filter contrast-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

                    {/* Top Studio Stamp Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <div className="bg-[#581822]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10 font-display font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3D8D3] animate-pulse" />
                        <span className="text-[11px] uppercase tracking-wider">{activeStage.phase} // {activeStage.name}</span>
                      </div>
                      <span className="text-[#F3D8D3] bg-black/50 px-3 py-1 rounded-full text-[10px] font-mono">
                        [ 0{activeStageIndex + 1} / 08 ]
                      </span>
                    </div>

                    {/* Bottom Caption Card */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-[#581822]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 text-white space-y-1">
                        <span className="text-[10px] font-mono uppercase text-[#F3D8D3] block font-bold">
                          {activeStage.caption}
                        </span>
                        <p className="font-serif italic text-sm sm:text-base text-[#FBF7F2] leading-snug truncate">
                          {activeStage.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            03. ALL 8 STAGES VISUAL TIMELINE GRID (BROWSE ENTIRE CYCLE AT A GLANCE)
        ========================================================================== */}
        <section className="bg-[#E5D7CB] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-[#D4C3B3] mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#D4C3B3] gap-3">
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#581822] block mb-1">
                CYCLE OVERVIEW
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#581822] tracking-tight uppercase">
                THE 8 STAGES AT A GLANCE
              </h3>
            </div>
            <span className="text-xs font-mono text-[#6B4E54]">
              CLICK ANY STAGE TO INSPECT IN DETAIL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS_STAGES.map((stg, idx) => {
              const isCurrent = activeStageIndex === idx;
              return (
                <div
                  key={stg.step}
                  onClick={() => selectStage(idx)}
                  className={`group p-4 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 border ${
                    isCurrent
                      ? 'bg-[#581822] text-[#FBF7F2] border-[#581822] shadow-lg scale-102'
                      : 'bg-[#FBF7F2] text-[#240B10] border-[#D4C3B3] hover:border-[#581822] hover:-translate-y-1 shadow-sm'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-[#3A0D14]">
                      <img
                        src={stg.image}
                        alt={stg.title}
                        className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#581822]/90 text-[10px] font-mono text-[#F3D8D3] font-bold">
                        {stg.step}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                        <span className={isCurrent ? 'text-[#F3D8D3]' : 'text-[#581822] font-bold'}>
                          {stg.name}
                        </span>
                        <span className={isCurrent ? 'text-white/60' : 'text-[#6B4E54]'}>
                          PHASE {stg.step}
                        </span>
                      </div>
                      <h4 className={`font-display font-bold text-sm line-clamp-2 leading-snug ${isCurrent ? 'text-white' : 'text-[#581822]'}`}>
                        {stg.title}
                      </h4>
                    </div>
                  </div>

                  <div className={`pt-2 border-t flex items-center justify-between text-[10px] font-mono uppercase tracking-wider ${
                    isCurrent ? 'border-white/15 text-[#F3D8D3]' : 'border-[#D4C3B3]/60 text-[#6B4E54] group-hover:text-[#581822]'
                  }`}>
                    <span>{isCurrent ? 'ACTIVE VIEW' : 'INSPECT'}</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            04. PROCESS END: FINAL INVITATION
        ========================================================================== */}
        <section className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-14 md:p-16 text-center space-y-6 shadow-2xl">
          <span className="font-script text-3xl sm:text-4xl text-[#F3D8D3] block">
            from idea to cloth ✨
          </span>
          <h2 className="section-clamp-heading font-display font-black text-[#FBF7F2] tracking-tight uppercase leading-[0.92]">
            FROM A THOUGHT TO SOMETHING REAL
          </h2>
          <p className="text-sm sm:text-base text-[#FBF7F2]/85 font-light max-w-xl mx-auto leading-relaxed">
            Every garment catalogued in the archive carries this full cycle of intention, human effort, and material discovery.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/work"
              className="px-8 py-3.5 rounded-full bg-[#FBF7F2] text-[#581822] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#F3D8D3] hover:scale-104 transition-all shadow-lg"
            >
              Explore Complete Archive (36)
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FBF7F2] font-display font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Commission a Piece
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
