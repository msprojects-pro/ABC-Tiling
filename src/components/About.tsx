import React from 'react';
import { Check, Compass, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const kitchenImage = '/images/kitchen_tiling_1783622067209.jpg';

export default function About() {
  const values = [
    {
      icon: <Compass className="h-5 w-5 text-[#A07048]" />,
      title: 'Precision Layout Planning',
      desc: 'We calculate dry layouts and symetrical centering points before setting a single tile to ensure uniform border cuts and eye-catching alignment.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#A07048]" />,
      title: 'Waterproofing & Tanking',
      desc: 'No-shortcut wetrooms. We apply premium elastomeric tanking membranes and reinforcement tapes to protect your substrate permanently.'
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-[#A07048]" />,
      title: 'Local & Dependable Service',
      desc: 'As Greenhithe locals, we pride ourselves on friendly communication, punctuality, and keeping your living space dust-free.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Graphic/Image Layout */}
          <div className="lg:col-span-5 relative" id="about-image-column">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src={kitchenImage}
                alt="ABC Tiling luxury kitchen tiling project"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Stats Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#A07048] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-[#A07048]/30">
              <p className="text-4xl font-sans font-black tracking-tight">100%</p>
              <p className="text-xs font-mono font-bold uppercase tracking-wider mt-1 text-white/80">
                Customer Satisfaction Guarantee
              </p>
              <div className="h-[1px] bg-white/20 my-3" />
              <p className="text-xs text-white/70 leading-relaxed">
                Tiling executed to NHBC & British Standards for a lifetime of beauty.
              </p>
            </div>
          </div>

          {/* Right Column - Text & Value Props */}
          <div className="lg:col-span-7" id="about-content-column">
            <div className="space-y-4">
              <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#A07048]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-neutral-900 tracking-tight leading-tight">
                Your Local Elite Tiling Specialists in Greenhithe & Kent
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                At <strong className="text-neutral-900">ABC Tiling Kent</strong>, tiling is more than just laying down ceramics; it is a meticulous craft. Based in Greenhithe, we serve residential homeowners and commercial contractors across Dartford, Gravesend, Longfield, and nearby communities with a focus on durability, aesthetics, and premium-grade water resistance.
              </p>
            </div>

            {/* Values / Core competencies */}
            <div className="mt-8 space-y-6" id="about-values-list">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#A07048]/10 flex items-center justify-center flex-shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-extrabold text-neutral-900 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Areas Covered Pills */}
            <div className="mt-10 pt-8 border-t border-neutral-100">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-4">
                Local Areas We Actively Service:
              </h4>
              <div className="flex flex-wrap gap-2" id="about-areas-pills">
                {BUSINESS_INFO.areasCovered.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-150 text-[11px] text-neutral-600 font-medium hover:bg-neutral-100 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
