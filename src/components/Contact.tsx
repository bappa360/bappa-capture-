import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { BookingFormData } from '../types';

interface ContactProps {
  initialCategory?: string;
  initialMessage?: string;
  onClearPresets?: () => void;
}

export default function Contact({ initialCategory, initialMessage, onClearPresets }: ContactProps) {
  // Form States
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    category: 'Portrait',
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Apply parent estimator presets if passed
  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        category: initialCategory,
      }));
    }
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage,
      }));
    }
  }, [initialCategory, initialMessage]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    if (!formData.date) newErrors.date = 'Preferred photoshoot date is required';
    if (!formData.message.trim()) newErrors.message = 'Please specify your vision';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'Portrait',
        date: '',
        message: '',
      });
      if (onClearPresets) onClearPresets();
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-500 border-t border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3 block">
            07 / SECURE A BOOKING
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
              Begin Your Story
            </h2>
            <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase max-w-sm">
              Secure your date with Bappa. Submit your concept proposal for a custom consultation.
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-800 mt-8"></div>
        </div>

        {/* Form and Contact Detail Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Booking Form Frame) */}
          <div className="lg:col-span-7 bg-neutral-900/15 border border-neutral-900 p-8 md:p-12 rounded-sm relative">
            {submitSuccess && (
              <div
                id="booking-success-overlay"
                className="absolute inset-0 bg-neutral-950/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-8 rounded-sm animate-fade-in"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6" />
                <h3 className="font-sans font-extrabold text-xl md:text-2xl text-white uppercase tracking-wider mb-3">
                  Proposal Transmitted
                </h3>
                <p className="font-sans text-neutral-300 text-xs md:text-sm max-w-sm leading-relaxed mb-8">
                  Your photographic project parameters have been securely registered by Bappa Capture. We will reach back in 24 hours to schedule your live concept call.
                </p>
                <button
                  id="reset-success-booking-btn"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 bg-white text-black font-mono text-[10px] tracking-widest uppercase rounded-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            )}

            <form id="photography-booking-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-name" className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                    Your Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`bg-neutral-950 border ${
                      errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } py-3 px-4 text-xs font-sans tracking-wide rounded-2xs text-white focus:outline-none transition-colors`}
                    placeholder="e.g., Jane Doe"
                  />
                  {errors.name && <span className="font-mono text-[9px] text-red-500 uppercase">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-email" className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                    Your Email Address *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`bg-neutral-950 border ${
                      errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } py-3 px-4 text-xs font-sans tracking-wide rounded-2xs text-white focus:outline-none transition-colors`}
                    placeholder="e.g., jane@domain.com"
                  />
                  {errors.email && <span className="font-mono text-[9px] text-red-500 uppercase">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-phone" className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                    Your Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`bg-neutral-950 border ${
                      errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } py-3 px-4 text-xs font-sans tracking-wide rounded-2xs text-white focus:outline-none transition-colors`}
                    placeholder="e.g., +1 (555) 019-2834"
                  />
                  {errors.phone && <span className="font-mono text-[9px] text-red-500 uppercase">{errors.phone}</span>}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-date" className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                    Preferred Shoot Date *
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`bg-neutral-950 border ${
                      errors.date ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                    } py-3 px-4 text-xs font-mono tracking-wide rounded-2xs text-white focus:outline-none transition-colors`}
                  />
                  {errors.date && <span className="font-mono text-[9px] text-red-500 uppercase">{errors.date}</span>}
                </div>
              </div>

              {/* Shoot Category */}
              <div className="flex flex-col gap-2">
                <label htmlFor="booking-category" className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                  Session Specialization
                </label>
                <select
                  id="booking-category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="bg-neutral-950 border border-neutral-800 focus:border-white py-3 px-4 text-xs font-mono tracking-wide rounded-2xs text-white focus:outline-none transition-colors"
                >
                  <option value="Portrait">Editorial Portraiture</option>
                  <option value="Wedding">Luxury Wedding Stories</option>
                  <option value="Fashion">High-Fashion Editorial</option>
                  <option value="Travel">Bespoke Travel Photography</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="booking-message" className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                  Describe Your Artistic Vision *
                </label>
                <textarea
                  id="booking-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`bg-neutral-950 border ${
                    errors.message ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                  } py-3 px-4 text-xs font-sans tracking-wide rounded-2xs text-white focus:outline-none transition-colors`}
                  placeholder="Tell us about the desired location, lighting preferences, outfit count, or any custom parameters calculated above..."
                ></textarea>
                {errors.message && <span className="font-mono text-[9px] text-red-500 uppercase">{errors.message}</span>}
              </div>

              <button
                id="submit-proposal-form-btn"
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-4 bg-white text-black font-sans font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-neutral-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Transmitting Parameters...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Submit Concept Proposal
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column (Studio maps + direct contact coords) */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-lg text-neutral-100 uppercase tracking-tight">
                Bappa Capture Flagship Studio
              </h3>
              
              <div className="flex flex-col gap-4 text-xs font-sans text-neutral-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>742 Fifth Avenue, 12th Floor, Midtown Manhattan, New York, NY 10019</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>+1 (212) 555-8933</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>bookings@bappacapture.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Concept Consultations: Mon - Sat, 10:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </div>

            {/* Google Maps Location - Grayscale styled Embedded Iframe */}
            <div className="w-full h-72 border border-neutral-900 rounded-sm overflow-hidden relative group">
              <iframe
                id="contact-google-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142293795014!2d-73.97484432426462!3d40.760114971385495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d3022.142293795014!2d-73.97484432426462!3d40.760114971385495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale invert opacity-70 hover:opacity-100 transition-opacity duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bappa Capture Studio Midtown Manhattan Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Direct WhatsApp Quick Chat Widget (Auto-triggered) */}
      <a
        id="whatsapp-chat-float-btn"
        href="https://wa.me/12125558933?text=Hello%20Bappa%20Capture!%20I'd%20like%20to%20inquire%20about%20booking%20a%20monochrome%20photography%20session."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp quick chat with Bappa"
        className="fixed bottom-6 right-6 z-40 bg-white text-black p-4 rounded-full shadow-2xl hover:bg-neutral-100 border border-neutral-800/20 hover:scale-108 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out text-[10px] tracking-wider font-mono font-bold uppercase ml-0 group-hover:ml-2 whitespace-nowrap">
          Quick Chat
        </span>
      </a>
    </section>
  );
}
