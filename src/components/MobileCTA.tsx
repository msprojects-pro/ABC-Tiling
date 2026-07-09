import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface MobileCTAProps {
  onOpenQuote: () => void;
}

export default function MobileCTA({ onOpenQuote }: MobileCTAProps) {
  return (
    <div 
      className="lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-neutral-150 p-2.5 flex gap-3 animate-bounce-short"
      id="mobile-floating-cta-bar"
    >
      {/* Primary Action 1: Call Directly */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 py-3 rounded-xl bg-neutral-900 active:bg-neutral-800 text-white flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-all"
        id="mobile-floating-call-btn"
      >
        <Phone className="h-4 w-4 text-[#A07048]" />
        Call Us
      </a>

      {/* Primary Action 2: Open Quote Popup */}
      <button
        onClick={onOpenQuote}
        className="flex-1 py-3 rounded-xl bg-[#A07048] active:bg-[#8F613B] text-white flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
        id="mobile-floating-quote-btn"
      >
        <Calendar className="h-4 w-4" />
        Get Quote
      </button>
    </div>
  );
}
