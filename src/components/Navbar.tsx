import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section highlights on scroll
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-100'
          : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center focus:outline-none"
            id="navbar-logo-btn"
          >
            <Logo size={42} light={false} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-navbar">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-mono font-bold uppercase tracking-widest transition-colors py-2 relative group focus:outline-none ${
                  activeSection === link.id ? 'text-[#A07048]' : 'text-neutral-800 hover:text-neutral-950'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#A07048] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    activeSection === link.id ? 'scale-x-100' : ''
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-5" id="desktop-ctas">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-800 hover:text-[#A07048] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#A07048]" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full bg-[#A07048] hover:bg-[#8F613B] active:scale-95 transition-all text-white text-xs font-mono font-bold uppercase tracking-widest shadow-md hover:shadow-lg shadow-[#A07048]/15"
              id="navbar-quote-btn"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 rounded-full bg-neutral-100 text-[#A07048] hover:bg-neutral-200 transition-colors"
              aria-label="Call ABC Tiling Kent"
            >
              <Phone className="h-4 w-4" />
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 transition-all focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-neutral-100 shadow-xl transition-all duration-300 transform origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0'
        }`}
        id="mobile-drawer-container"
      >
        <div className="px-4 py-6 space-y-3 bg-white">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-mono font-bold uppercase tracking-wider transition-colors focus:outline-none ${
                activeSection === link.id
                  ? 'bg-neutral-50 text-[#A07048]'
                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-3 py-3 rounded-xl border border-neutral-200 text-neutral-800 text-sm font-mono font-bold uppercase tracking-wider"
            >
              <Phone className="h-4 w-4 text-[#A07048]" />
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>
            
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-xl bg-[#A07048] text-white text-center text-sm font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              id="mobile-drawer-quote-btn"
            >
              <Calendar className="h-4 w-4" />
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
