import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { ALL_PROJECTS, Project } from '../data/portfolioData';

type FilterKey = 'all' | 'tops' | 'bottoms' | 'dresses' | 'co-ord-sets' | 'collaborations' | 'experiments';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filterTabs: { key: FilterKey; label: string; count: number }[] = useMemo(() => {
    return [
      { key: 'all', label: 'ALL WORKS', count: ALL_PROJECTS.length },
      { key: 'tops', label: 'TOPS', count: ALL_PROJECTS.filter((p) => p.category === 'tops').length },
      { key: 'bottoms', label: 'BOTTOMS', count: ALL_PROJECTS.filter((p) => p.category === 'bottoms').length },
      { key: 'dresses', label: 'DRESSES', count: ALL_PROJECTS.filter((p) => p.category === 'dresses').length },
      { key: 'co-ord-sets', label: 'COORD SETS', count: ALL_PROJECTS.filter((p) => p.category === 'co-ord-sets').length },
      { key: 'collaborations', label: 'COLLABS', count: ALL_PROJECTS.filter((p) => p.category === 'collaborations').length },
      { key: 'experiments', label: 'EXPERIMENTS', count: ALL_PROJECTS.filter((p) => p.category === 'experiments' || p.isExperiment).length },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return ALL_PROJECTS;
    if (activeFilter === 'experiments') {
      return ALL_PROJECTS.filter((p) => p.category === 'experiments' || p.isExperiment);
    }
    return ALL_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#EFE6DD] text-[#240B10] pt-24 sm:pt-28 md:pt-32 pb-32">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= WORK HERO ================= */}
        <div className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 mb-10 sm:mb-14 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
            <div className="space-y-2 sm:space-y-3">
              <span className="font-script text-2xl sm:text-4xl text-[#F3D8D3] block">
                handcrafted pieces ✨
              </span>
              <h1 className="hero-clamp-title font-display font-black tracking-tight text-[#FBF7F2] leading-[0.9] uppercase">
                THE ARCHIVE
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E5D7CB] pt-1">
                COLLECTIONS · UPCYCLED TEXTILES · PROTOTYPES
              </p>
            </div>
            <div className="max-w-sm space-y-2 text-left md:text-right">
              <p className="text-xs sm:text-sm font-sans text-[#FBF7F2]/85 leading-relaxed">
                A catalogue of 36 garments created through manual pattern cutting, material experimentation, and wearable craftsmanship.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-[#F3D8D3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3D8D3] animate-pulse" />
                <span>36 TOTAL CATALOGUED PIECES</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= AESTHETIC FILTER CAPSULES ================= */}
        <div className="flex items-center sm:flex-wrap gap-2 mb-10 sm:mb-14 bg-[#FBF7F2] p-2 sm:p-3 rounded-2xl sm:rounded-full border border-[#D4C3B3] shadow-sm overflow-x-auto scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 sm:px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#581822] text-[#FBF7F2] shadow-sm scale-102'
                    : 'text-[#581822] hover:bg-[#E5D7CB]/60'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-[#78222E] text-[#F3D8D3]' : 'bg-[#E5D7CB] text-[#6B4E54]'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= BENTO-STYLE AESTHETIC GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group bg-[#FBF7F2] rounded-[2rem] p-4 pb-6 border border-[#D4C3B3] shadow-[0_8px_30px_rgba(88,24,34,0.04)] hover:shadow-[0_16px_40px_rgba(88,24,34,0.1)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Frame */}
                <Link to={`/work/${project.slug}`} className="block overflow-hidden rounded-[1.5rem] aspect-[3/4] bg-[#581822] relative mb-4">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3 bg-[#581822]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                    {project.categoryLabel}
                  </div>

                  {/* Corner Expand Button */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#FBF7F2] text-[#581822] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>

                {/* Content */}
                <div className="space-y-2 px-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6B4E54]">
                    <span>STUDIO // {project.year}</span>
                    <span>{project.allImages.length} VIEWS</span>
                  </div>

                  <Link to={`/work/${project.slug}`} className="block">
                    <h3 className="font-display font-extrabold text-xl text-[#581822] group-hover:text-[#78222E] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs font-sans text-[#240B10]/75 line-clamp-2 leading-relaxed">
                    {project.concept}
                  </p>

                  <div className="pt-3 border-t border-[#D4C3B3]/60 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#581822] font-semibold">
                      HANDCRAFTED GARMENTS
                    </span>
                    <Link
                      to={`/work/${project.slug}`}
                      className="text-xs font-display font-bold uppercase text-[#581822] hover:text-[#78222E] inline-flex items-center gap-1"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
