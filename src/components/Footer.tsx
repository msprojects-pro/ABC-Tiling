import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Shield } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-neutral-900" id="main-footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-900">
          
          {/* Col 1: Brand details (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <button onClick={scrollToTop} className="flex text-left focus:outline-none">
              <Logo size={46} light={true} />
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Premium tiling services based in Greenhithe, Kent. Proudly delivering domestic bathrooms, kitchens, large format floors, and commercial contracting for over 25 years.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <Shield className="h-4 w-4 text-[#A07048]" />
                <span>Fully Insured (£5M PLI)</span>
              </div>
              <span className="text-neutral-700">|</span>
              <span className="text-xs text-[#A07048] font-bold font-mono">10-Year Warranty</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#A07048] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors focus:outline-none">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors focus:outline-none">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors focus:outline-none">
                  Specialist Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors focus:outline-none">
                  Completed Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors focus:outline-none">
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors focus:outline-none">
                  Contact Details
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#A07048] mb-5">
              Tiling Specialties
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left focus:outline-none">
                    {srv.title}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left focus:outline-none">
                  Underfloor Heating
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details & Coverages (3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#A07048] mb-5">
              Direct Contact
            </h4>
            
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#A07048] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#A07048] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#A07048] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[10px] text-neutral-500 font-mono leading-relaxed uppercase">
                We Cover: Greenhithe • Dartford • Gravesend • Swanscombe • New Barn • Bean • Hartley
              </p>
            </div>
          </div>

        </div>

        {/* Bottom row with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div>
            <p>© {new Date().getFullYear()} ABC Tiling Kent. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600 mt-1 leading-relaxed">
              Designed for luxury, engineered for endurance. Registered tiling contractor in Kent, UK.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-neutral-900 border border-neutral-850 hover:bg-[#A07048] text-neutral-400 hover:text-white transition-all focus:outline-none flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider font-bold cursor-pointer"
            aria-label="Scroll back to top"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
