import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPin, Calendar, ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const heroImage = '/images/hero_tiling_project_1783622047404.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20"
    >
      {/* Background Image with Dark Vignette and Terracotta Blend Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ABC Tiling Kent luxury bathroom tiling"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.05]"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Gradients blending black-and-white base to rich warm terracotta accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#A07048]/10 via-transparent to-black/30 mix-blend-color-burn" />
      </div>

      {/* Decorative Tiled Grid Lines overlay for a subtle contractor vibe */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Quality Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A07048]/20 border border-[#A07048]/40 backdrop-blur-md mb-6"
            id="hero-quality-badge"
          >
            <Star className="h-3.5 w-3.5 text-[#A07048] fill-[#A07048]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-200">
              Premium Domestic & Commercial Tiling
            </span>
          </motion.div>

          {/* Strong Premium Tiling Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black text-white tracking-tight leading-[1.05]"
            id="hero-headline"
          >
            Crafting Perfection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A07048] via-[#c29672] to-[#A07048]">
              Tile by Precision Tile
            </span>
          </motion.h1>

          {/* Subheadline & Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl"
            id="hero-description"
          >
            Friendly • Reliable • Professional Tiling Services. Based in <strong className="text-white">Greenhithe, Kent</strong>, covering Dartford, Gravesend, Longfield, Bean, New Barn and surrounding areas. Delivering luxury finishes for over 25 years.
          </motion.p>

          {/* Locations covered preview */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-mono"
            id="hero-locations-badge"
          >
            <MapPin className="h-4 w-4 text-[#A07048] flex-shrink-0" />
            <span>Serving Greenhithe, Dartford, Gravesend, New Barn, Bean, Longfield & beyond</span>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
            id="hero-action-buttons"
          >
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-[#A07048] hover:bg-[#8F613B] text-white font-mono font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-[#A07048]/25 group active:scale-95 cursor-pointer"
              id="hero-cta-quote-btn"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-sm uppercase tracking-widest transition-all duration-300 border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              id="hero-cta-services-btn"
            >
              View Our Services
            </button>
          </motion.div>
        </div>

        {/* Feature Badges Grid at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8"
          id="hero-features-footer"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-[#A07048]/10 border border-[#A07048]/30 flex items-center justify-center text-[#A07048] flex-shrink-0">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-sans font-bold tracking-tight">Fully Insured & Certified</h4>
              <p className="text-xs text-neutral-400 mt-1">Peace of mind with public liability insurance up to £5M.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-[#A07048]/10 border border-[#A07048]/30 flex items-center justify-center text-[#A07048] flex-shrink-0">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-sans font-bold tracking-tight">Uncompromising Quality</h4>
              <p className="text-xs text-neutral-400 mt-1">Symmetric lines, smooth levels, mitered corners.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-[#A07048]/10 border border-[#A07048]/30 flex items-center justify-center text-[#A07048] flex-shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-sans font-bold tracking-tight">Kent Local Specialist</h4>
              <p className="text-xs text-neutral-400 mt-1">Prompt arrival and efficient project delivery in Kent.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
