import React from 'react';
import { motion } from 'motion/react';
import { 
  Bath, 
  UtensilsCrossed, 
  Grid, 
  Layers, 
  Hammer, 
  Gem, 
  Flame, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onOpenQuote: () => void;
}

// Map icon string names to actual Lucide Icon components
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Bath: Bath,
  UtensilsCrossed: UtensilsCrossed,
  Grid: Grid,
  Layers: Layers,
  Hammer: Hammer,
  Gem: Gem,
  Flame: Flame,
  Briefcase: Briefcase
};

export default function Services({ onOpenQuote }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-neutral-950 text-white relative">
      {/* Subtle tile pattern grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#A07048]">
            OUR SPECIALIST RANGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight mt-3">
            Professional Tiling Built To Last
          </h2>
          <div className="h-1 w-12 bg-[#A07048] mx-auto mt-6" />
          <p className="text-neutral-400 text-sm sm:text-base mt-6">
            We offer bespoke, high-end tiling services matching British standards (BS 5385). From residential bathroom sanctuaries to expansive commercial showrooms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Grid;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-900 border border-neutral-850 hover:border-[#A07048]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#A07048]/5"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon & Cover Overlay */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#A07048]/10 group-hover:bg-[#A07048] text-[#A07048] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-[#A07048] transition-colors font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-sans font-extrabold tracking-tight text-white group-hover:text-[#A07048] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#A07048] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Trigger CTA */}
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 rounded-lg bg-neutral-850 group-hover:bg-[#A07048] transition-all duration-300 text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 group-hover:text-white flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner Section bottom */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#A07048]/10 via-[#A07048]/5 to-transparent p-8 md:p-12 rounded-3xl border border-[#A07048]/25 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-sans font-black tracking-tight text-white">
              Need custom tiling not listed here?
            </h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-xl leading-relaxed">
              We frequently handle custom projects including outdoor patio tiling, fireplace surrounds, feature mosaics, and architectural tile restoration. Let us know your requirements.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#A07048] hover:bg-[#8F613B] active:scale-95 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex-shrink-0 cursor-pointer"
            id="services-custom-cta-btn"
          >
            Ask Us Anything
          </button>
        </div>

      </div>
    </section>
  );
}
