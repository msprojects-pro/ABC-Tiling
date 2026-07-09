import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#A07048] selection:text-white" id="app-root-layout">
      {/* Premium Sticky Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        {/* Full Viewport Hero */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Company Core Values & Description */}
        <About />

        {/* 8 Specialist Tiling Services Grid */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Filterable Showcase Gallery with Built-in Lightbox */}
        <Gallery />

        {/* Local Kent Client Testimonials */}
        <Testimonials />

        {/* Interactive Contact Channels, Google Map & Tiling FAQ */}
        <Contact />
      </main>

      {/* Structured Footer with Location Coverage Checklists */}
      <Footer />

      {/* Floating Call & Quote CTA bar for Mobile Devices */}
      <MobileCTA onOpenQuote={handleOpenQuote} />

      {/* Framer-Motion Animated Contact Quote Request Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
