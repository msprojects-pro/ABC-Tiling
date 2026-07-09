import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bathroom' | 'kitchen' | 'floor'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters: { label: string; id: typeof activeFilter }[] = [
    { label: 'All Projects', id: 'all' },
    { label: 'Bathrooms', id: 'bathroom' },
    { label: 'Kitchens', id: 'kitchen' },
    { label: 'Floors', id: 'floor' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#A07048]">
              OUR COMPLETED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-neutral-900 tracking-tight leading-none mt-3">
              Craftsmanship Showcase
            </h2>
            <p className="text-neutral-500 text-sm mt-4 leading-relaxed">
              Explore some of our recently completed residential tiling works across Kent. Zero compromise on leveling, spacing, and waterproofing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2" id="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-[#A07048] text-white shadow-md shadow-[#A07048]/20'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-neutral-950 aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedItem(item)}
                id={`gallery-item-${item.id}`}
              >
                {/* Main image with styling */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-75"
                  referrerPolicy="no-referrer"
                />

                {/* Dark & Terracotta subtle gradient slide-up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-300" />

                {/* Card Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-1/2">
                  <span className="text-[10px] font-mono font-bold text-[#c29672] uppercase tracking-wider">
                    {item.size || 'Standard Tiling'}
                  </span>
                  <h3 className="text-white font-sans font-extrabold text-base tracking-tight mt-1 leading-snug group-hover:text-[#A07048] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Floating Action Circle */}
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 hover:bg-[#A07048] border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Informational tagline */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-400 flex items-center justify-center gap-2">
          <ImageIcon className="h-4 w-4 text-[#A07048]" />
          <span>All photos represent genuine completed projects under our premium warranty.</span>
        </div>

        {/* Lightbox / Modal Modal View */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" id="gallery-lightbox">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 cursor-zoom-out"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl z-10 border border-neutral-800"
                id="lightbox-content-card"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#A07048] transition-colors focus:outline-none"
                  aria-label="Close Lightbox"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left: Interactive Image */}
                <div className="md:w-3/5 h-[50vh] md:h-[75vh] relative bg-neutral-950">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right: Specifications Detail */}
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between text-white">
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-[#A07048]/20 border border-[#A07048]/30 text-[#c29672] text-[10px] font-mono font-bold uppercase tracking-wider inline-block">
                      {selectedItem.category} project
                    </span>
                    
                    <h3 className="text-xl md:text-2xl font-sans font-black tracking-tight text-white mt-4">
                      {selectedItem.title}
                    </h3>
                    
                    <div className="h-[2px] w-8 bg-[#A07048] my-4" />
                    
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    {/* Quality Specs details in list */}
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between border-b border-neutral-800 pb-2 text-xs">
                        <span className="text-neutral-500">Tile Material:</span>
                        <span className="font-mono text-neutral-300 font-bold">{selectedItem.size}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-2 text-xs">
                        <span className="text-neutral-500">Service Area:</span>
                        <span className="font-mono text-neutral-300 font-bold">Kent Local</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-2 text-xs">
                        <span className="text-neutral-500">Warranty:</span>
                        <span className="font-mono text-neutral-300 font-bold">10-Year Guarantee</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-800">
                    <p className="text-[11px] text-neutral-500 italic">
                      Interested in achieving a similar premium tile finish for your home? Contact us for a precise quote.
                    </p>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
