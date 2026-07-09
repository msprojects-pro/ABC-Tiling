import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-neutral-50 relative overflow-hidden">
      {/* Background Decorative Graphic elements */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#A07048]/5 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#A07048]/5 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#A07048]">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-neutral-900 tracking-tight mt-3">
            What Our Kent Clients Say
          </h2>
          <div className="h-1 w-12 bg-[#A07048] mx-auto mt-6" />
          <p className="text-neutral-500 text-sm mt-6">
            We hold ourselves to the highest standards of tiling expertise and customer service. Read honest feedback from residential and commercial clients nearby.
          </p>
        </div>

        {/* Testimonials Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="relative p-6 md:p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-[#A07048]/20 transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${review.id}`}
            >
              {/* Giant quote mark background */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-neutral-100 group-hover:text-[#A07048]/10" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5" id="stars-container">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-[#A07048] fill-[#A07048]" />
                  ))}
                </div>

                {/* Review Message Text */}
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed italic relative z-10">
                  "{review.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-5 border-t border-neutral-50 flex items-center justify-between" id="testimonial-footer">
                <div>
                  <h4 className="text-neutral-950 font-sans font-extrabold text-sm tracking-tight flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="h-4 w-4 text-[#A07048]" />
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-1 font-medium font-mono uppercase tracking-wider">
                    {review.location}
                  </p>
                </div>
                
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-600 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {review.service}
                  </span>
                  <p className="text-[10px] text-neutral-400 mt-1 font-medium font-mono uppercase tracking-wider">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Notice badge */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
            <span>Overall Score: </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-[#A07048] fill-[#A07048]" />
              ))}
            </div>
            <strong className="text-neutral-800 font-bold">5.0 / 5.0 Rating</strong>
          </div>
          <p className="text-[11px] text-neutral-400 mt-1">Based on local customer reviews across Kent and direct surveys.</p>
        </div>

      </div>
    </section>
  );
}
