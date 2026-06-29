import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-500 border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3">
            04 / VOICES OF PRESTIGE
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
            Client Stories
          </h2>
          <div className="w-24 h-[1px] bg-neutral-800 mt-6"></div>
        </div>

        {/* Testimonial Active Display Window */}
        <div id="testimonial-active-window" className="relative bg-neutral-900/20 border border-neutral-900/60 p-8 md:p-16 rounded-sm min-h-[380px] flex flex-col justify-between items-center text-center">
          <Quote className="w-10 h-10 text-neutral-600/50 mb-6 shrink-0" />

          {/* Review Content */}
          <div className="flex-1 flex flex-col items-center justify-center max-w-3xl">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
              ))}
            </div>

            {/* Quote text */}
            <p className="font-sans text-base md:text-xl md:leading-relaxed text-neutral-200 tracking-wide font-light italic mb-8">
              "{activeReview.quote}"
            </p>
          </div>

          {/* Author Meta Profile */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-neutral-800 p-0.5 overflow-hidden">
              <img
                src={activeReview.avatar}
                alt={activeReview.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full grayscale saturate-0"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xs tracking-widest uppercase text-white">
                {activeReview.name}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase mt-0.5">
                {activeReview.role}
              </span>
            </div>
          </div>

          {/* Navigation Controls Overlay */}
          <div id="testimonial-navigation" className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label="Previous review"
              className="p-2 border border-neutral-800/80 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label="Next review"
              className="p-2 border border-neutral-800/80 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              id={`testimonial-dot-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-800'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
