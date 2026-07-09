import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, CheckCircle2, MapPin } from 'lucide-react';
import { QuoteRequest } from '../types';
import { BUSINESS_INFO } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceType: 'Bathroom Tiling',
    description: '',
    preferredContact: 'phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (type: 'phone' | 'email') => {
    setFormData((prev) => ({ ...prev, preferredContact: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      console.log('--- FREE QUOTE REQUEST SUBMITTED ---', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      serviceType: 'Bathroom Tiling',
      description: '',
      preferredContact: 'phone',
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="quote-modal-container">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm"
            id="quote-modal-backdrop"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl text-neutral-900 z-10 border border-neutral-100"
            id="quote-modal-card"
          >
            {/* Terracotta Top Accent Bar */}
            <div className="h-2 w-full bg-[#A07048]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700 transition-colors p-1.5 rounded-full hover:bg-neutral-100"
              aria-label="Close modal"
              id="quote-modal-close-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-sans font-extrabold tracking-tight text-neutral-950">
                    Request a Free Quote
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    No obligation site visit and precision tiling cost estimation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="quote-modal-form">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Robert Smith"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 text-neutral-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone field */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07961 795424"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 text-neutral-900"
                      />
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. r.smith@gmail.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 text-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Location field */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Your Location *
                      </label>
                      <select
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 text-neutral-900 cursor-pointer"
                      >
                        <option value="" disabled>Select Kent Area</option>
                        {BUSINESS_INFO.areasCovered.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                        <option value="Other Kent Area">Other (Surrounding Kent)</option>
                      </select>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Required Service *
                      </label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 text-neutral-900 cursor-pointer"
                      >
                        <option value="Bathroom Tiling">Bathroom Tiling</option>
                        <option value="Kitchen Tiling">Kitchen Tiling</option>
                        <option value="Floor Tiling">Floor Tiling</option>
                        <option value="Wall Tiling">Wall Tiling</option>
                        <option value="Porcelain & Ceramic">Porcelain & Ceramic</option>
                        <option value="Natural Stone Tiling">Natural Stone Tiling</option>
                        <option value="Underfloor Heating">Underfloor Heating</option>
                        <option value="Commercial Tiling">Commercial Tiling</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Tell us about your project
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="e.g. Kitchen splashback, herringbone metro tiles, approx 4.5 sqm..."
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A07048] focus:border-transparent transition-all text-sm bg-neutral-50 text-neutral-900 resize-none"
                    />
                  </div>

                  {/* Preferred Contact Mode */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleRadioChange('phone')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                          formData.preferredContact === 'phone'
                            ? 'bg-[#A07048] text-white border-transparent'
                            : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        <Phone className="h-3.5 w-3.5" />
                        Phone Call
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRadioChange('email')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                          formData.preferredContact === 'email'
                            ? 'bg-[#A07048] text-white border-transparent'
                            : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 mt-4 rounded-xl bg-[#A07048] hover:bg-[#8F613B] active:scale-[0.98] transition-all text-white font-sans font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#A07048]/20 disabled:bg-neutral-300 disabled:shadow-none"
                    id="quote-modal-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating Quote Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-4 w-4" />
                        Book Free Consultation
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center flex flex-col items-center"
                id="quote-modal-success-state"
              >
                <div className="h-16 w-16 bg-[#A07048]/10 text-[#A07048] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-sans font-extrabold text-neutral-900 tracking-tight">
                  Quote Request Received!
                </h3>
                
                <p className="text-sm text-neutral-600 mt-3 max-w-md">
                  Thank you, <strong className="text-neutral-900">{formData.name}</strong>. We have logged your request for <strong className="text-neutral-900">{formData.serviceType}</strong> in <strong className="text-neutral-900">{formData.location}</strong>.
                </p>

                <div className="w-full bg-neutral-50 border border-neutral-100 rounded-xl p-4 my-6 text-left text-xs text-neutral-500 space-y-2">
                  <div className="flex justify-between">
                    <span>Contact Method:</span>
                    <span className="font-mono font-bold text-neutral-700 capitalize">{formData.preferredContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Direct Line:</span>
                    <span className="font-mono font-bold text-neutral-700">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reference Time:</span>
                    <span className="font-mono font-bold text-neutral-700">Within 24 Hours</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400">
                  Prefer direct booking? Call us anytime on{' '}
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#A07048] font-bold underline">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </p>

                <button
                  onClick={handleReset}
                  className="mt-8 px-6 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-850 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
                  id="quote-modal-done-btn"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
