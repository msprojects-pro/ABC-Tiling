import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      console.log('--- CONTACT MESSAGE SUBMITTED ---', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Enquiry',
      message: ''
    });
    setIsSubmitted(false);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-[#A07048]">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-neutral-900 tracking-tight mt-3">
            Contact Our Tiling Team
          </h2>
          <div className="h-1 w-12 bg-[#A07048] mx-auto mt-6" />
          <p className="text-neutral-500 text-sm mt-6">
            Have a project in mind? Fill out our form, call us directly, or explore our frequently asked questions. We are here to help you turn your design ideas into a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Channels & Map (5 columns) */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-column">
            
            {/* Quick Details Cards */}
            <div className="bg-neutral-50 rounded-3xl p-6 md:p-8 border border-neutral-100 space-y-6">
              <h3 className="text-lg font-sans font-extrabold text-neutral-950 tracking-tight mb-4">
                ABC Tiling Kent Headquarters
              </h3>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-[#A07048]/10 text-[#A07048] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Direct Hotline</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-base font-sans font-black text-neutral-900 hover:text-[#A07048] transition-colors mt-0.5 block">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">Mobile support (Free quotes booking)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-[#A07048]/10 text-[#A07048] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Email Correspondence</h4>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm font-semibold text-neutral-850 hover:text-[#A07048] transition-colors mt-0.5 block">
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">Typically responds within 4 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-[#A07048]/10 text-[#A07048] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Office Location</h4>
                  <p className="text-sm font-semibold text-neutral-850 mt-0.5">{BUSINESS_INFO.location}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Greenhithe, Dartford & surrounding areas</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-[#A07048]/10 text-[#A07048] flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Operating Hours</h4>
                  <p className="text-sm font-semibold text-neutral-850 mt-0.5">{BUSINESS_INFO.workingHours}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Emergency support available upon request</p>
                </div>
              </div>
            </div>

            {/* Premium Kent Coverage List */}
            <div className="bg-neutral-50 rounded-3xl p-6 md:p-8 border border-neutral-100" id="contact-coverage-card">
              <h3 className="text-sm font-mono font-extrabold text-[#A07048] uppercase tracking-widest mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Kent Coverage Areas
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                We provide professional, fully-insured domestic and commercial tiling services across North Kent and surrounding areas. Our primary active working zones include:
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-neutral-700 font-semibold" id="coverage-areas-list">
                {BUSINESS_INFO.areasCovered.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A07048]" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Contact Form & FAQ Accordions (7 columns) */}
          <div className="lg:col-span-7 space-y-10" id="contact-form-column">
            
            {/* Contact Form Card */}
            <div className="bg-white border border-neutral-100 p-6 md:p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-sans font-extrabold text-neutral-950 tracking-tight mb-6">
                Send a Quick Message
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-message-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. David Jones"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Your Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07961 795424"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. d.jones@gmail.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Enquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 cursor-pointer"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Domestic Estimate">Domestic Tiling Estimate</option>
                      <option value="Commercial Contract">Commercial Sub-Contracting</option>
                      <option value="Repair & Restoration">Grout Repair / Tile Replacement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Detailed Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Explain your project dimensions, desired tiles, current substrate condition, or timeline..."
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 mt-4 rounded-xl bg-neutral-900 hover:bg-[#A07048] active:scale-[0.98] transition-all text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 flex flex-col items-center"
                  id="contact-success-state"
                >
                  <div className="h-16 w-16 bg-[#A07048]/10 text-[#A07048] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-sans font-extrabold text-neutral-900 tracking-tight">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 max-w-sm">
                    Thank you, <strong className="text-neutral-900">{formData.name}</strong>. We have received your query about <strong className="text-neutral-900">"{formData.subject}"</strong> and will get back to you shortly.
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-mono text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Dynamic FAQ Accordions */}
            <div className="space-y-4" id="faq-accordions">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-5 w-5 text-[#A07048]" />
                <h3 className="text-lg font-sans font-black text-neutral-950 tracking-tight">
                  Tiling Frequently Asked Questions
                </h3>
              </div>
              
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-100 rounded-2xl overflow-hidden transition-all bg-neutral-50"
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-neutral-100/50 transition-colors cursor-pointer"
                  >
                    <span className="font-sans font-bold text-sm text-neutral-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-500 flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === idx ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-5 text-xs text-neutral-500 leading-relaxed pt-1 bg-white border-t border-neutral-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
