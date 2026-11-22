import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Sparkles, Layers, Maximize2 } from 'lucide-react';
import { ALL_PROJECTS, Project } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  const project = ALL_PROJECTS[currentIndex] || ALL_PROJECTS[0];

  const prevProject = ALL_PROJECTS[(currentIndex - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length];
  const nextProject = ALL_PROJECTS[(currentIndex + 1) % ALL_PROJECTS.length];

  // Garment photography studies only (excluding any internal product-detail cards)
  const galleryImages = project.allImages.filter((img) => !img.includes('product-detail'));

  // Fullscreen interactive lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setActiveImageIndex(idx);
    setLightboxOpen(true);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    },
    [lightboxOpen, galleryImages.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, lightboxOpen]);

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center max-w-xl mx-auto">
        <h2 className="font-display font-bold text-3xl text-[#581822]">Project Not Found</h2>
        <Link to="/work" className="text-sm underline mt-4 inline-block font-mono text-[#581822]">
          Return to The Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#EFE6DD] text-[#240B10] pt-24 sm:pt-28 md:pt-32 pb-32">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb Navigation */}
        <div className="mb-8 sm:mb-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#6B4E54]">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF7F2] text-[#581822] hover:bg-[#581822] hover:text-[#FBF7F2] transition-colors border border-[#D4C3B3]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ARCHIVE</span>
          </Link>
          <span className="px-3 py-1 rounded-full bg-[#581822] text-[#F3D8D3] font-bold text-[11px]">
            {project.categoryLabel}
          </span>
        </div>

        {/* ================= PROJECT HERO ================= */}
        <section className="bg-[#581822] text-[#FBF7F2] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 mb-10 sm:mb-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end relative z-10">
            <div className="lg:col-span-8 space-y-2 sm:space-y-3">
              <span className="font-script text-2xl sm:text-4xl text-[#F3D8D3] block">
                studio archive // {project.year} ✨
              </span>
              <h1 className="hero-clamp-title font-display font-black tracking-tight text-[#FBF7F2] leading-[0.9] uppercase">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-4 space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-[#FBF7F2]/85 leading-relaxed">
              <p>{project.concept}</p>
            </div>
          </div>
        </section>

        {/* ================= FULL-WIDTH HERO PHOTOGRAPH ================= */}
        <section className="mb-14 sm:mb-20">
          <div
            onClick={() => openLightbox(0)}
            className="group cursor-pointer relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] aspect-[16/10] sm:aspect-[21/10] bg-[#3A0D14] border-2 border-[#D4C3B3] shadow-xl"
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-[1.01] group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
            
            {/* Washi Tape Pin at Top */}
            <div className="absolute top-4 left-6 washi-tape px-6 py-1 rounded text-[10px] font-mono tracking-widest text-[#581822] uppercase shadow-sm">
              MAIN PIECE STUDY
            </div>

            <div className="absolute bottom-5 right-5 bg-[#581822]/90 backdrop-blur-sm px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest text-[#FBF7F2] flex items-center gap-2 border border-white/10">
              <Maximize2 className="w-3.5 h-3.5 text-[#F3D8D3]" />
              <span>Click to Expand</span>
            </div>
          </div>
        </section>

        {/* ================= CRAFT SPECIFICATIONS & MULTI-ANGLE GALLERY ================= */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Craft Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FBF7F2] rounded-[2rem] p-7 border border-[#D4C3B3] shadow-sm space-y-4">
                <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#581822] block">
                  CRAFT SPECIFICATIONS
                </span>
                <p className="text-sm font-sans text-[#240B10]/80 leading-relaxed">
                  {project.craftDetails}
                </p>
                <div className="pt-4 border-t border-[#D4C3B3]/60 space-y-2 text-xs font-mono text-[#6B4E54]">
                  <p>· Original handmade paper pattern</p>
                  <p>· Manual grainline cutting & reinforced margins</p>
                  <p>· Handcrafted studio construction</p>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Angle Studies */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4C3B3]">
                <h3 className="font-display font-bold text-2xl text-[#581822]">
                  Angle & Detail Studies ({galleryImages.length})
                </h3>
                <span className="text-xs font-mono text-[#6B4E54]">CLICK ANY PHOTO TO INSPECT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group cursor-pointer relative overflow-hidden rounded-[1.75rem] aspect-[3/4] bg-[#581822] border border-[#D4C3B3] shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`${project.title} study ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-1.5 rounded-full bg-[#FBF7F2] text-[#581822] font-display font-bold text-[11px] uppercase tracking-wider">
                        ANGLE 0{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PREV / NEXT PROJECT SWITCHER ================= */}
        <section className="pt-12 border-t border-[#D4C3B3]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to={`/work/${prevProject.slug}`}
              className="group p-6 rounded-[2rem] bg-[#FBF7F2] border border-[#D4C3B3] flex items-center gap-5 hover:bg-[#E5D7CB] transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-[#581822] group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B4E54]">
                  PREVIOUS PIECE
                </span>
                <p className="font-display font-bold text-lg text-[#581822] mt-0.5">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            <Link
              to={`/work/${nextProject.slug}`}
              className="group p-6 rounded-[2rem] bg-[#FBF7F2] border border-[#D4C3B3] flex items-center justify-between hover:bg-[#E5D7CB] transition-colors shadow-sm text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B4E54]">
                  NEXT PIECE
                </span>
                <p className="font-display font-bold text-lg text-[#581822] mt-0.5">
                  {nextProject.title}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#581822] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>

      {/* ================= FULLSCREEN LIGHTBOX ================= */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#3A0D14]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[#FBF7F2] pb-4 border-b border-white/15">
              <span className="font-display font-bold text-sm tracking-wider uppercase text-[#F3D8D3]">
                {project.title} · Study 0{activeImageIndex + 1}
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF7F2] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image with Navigation Arrows */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={() => setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={galleryImages[activeImageIndex]}
                alt={`${project.title} full view`}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnails */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pt-4 border-t border-white/15">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#F3D8D3] scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
