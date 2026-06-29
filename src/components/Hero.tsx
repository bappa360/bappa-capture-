import { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1920',
      title: 'Whispering Peaks',
      shutter: '1/125s',
      fstop: 'f/8.0',
      iso: '100',
    },
    {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920',
      title: 'Parisian Silhouettes',
      shutter: '1/500s',
      fstop: 'f/2.8',
      iso: '200',
    },
    {
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1920',
      title: 'Tokyo Midnight Rain',
      shutter: '1/80s',
      fstop: 'f/1.2',
      iso: '800',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(98);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center text-white"
    >
      {/* Dynamic Slide Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          id={`hero-slide-bg-${index}`}
          className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
            index === currentIndex ? 'opacity-55 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter grayscale contrast-110 saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950/80"></div>
        </div>
      ))}

      {/* Camera Viewfinder Overlays (Interactive HUD) */}
      <div id="viewfinder-hud-overlay" className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
        {/* Top HUD Row */}
        <div className="flex justify-between items-center text-white/50 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              REC
            </span>
            <span>4K RAW 24FPS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>GRID: {showGrid ? 'ACTIVE' : 'OFF'}</span>
            <span>WB: 5200K</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>BATT</span>
            <div className="w-6 h-3.5 border border-white/40 rounded-xs p-[1px] flex items-center">
              <div className="bg-emerald-500 h-full rounded-2xs" style={{ width: `${batteryLevel}%` }}></div>
            </div>
            <span>{batteryLevel}%</span>
          </div>
        </div>

        {/* Shutter grid lines */}
        {showGrid && (
          <div className="absolute inset-x-0 top-0 h-full flex justify-between pointer-events-none px-6 md:px-12 py-6 md:py-12">
            {/* Horizontal divisions */}
            <div className="absolute left-1/3 top-0 h-full w-[1px] bg-white/10"></div>
            <div className="absolute left-2/3 top-0 h-full w-[1px] bg-white/10"></div>
            {/* Vertical divisions */}
            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/10"></div>
            <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/10"></div>
          </div>
        )}

        {/* Center focusing bracket */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 pointer-events-none">
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/45"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/45"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white/45"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/45"></div>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse opacity-45"></div>
        </div>

        {/* Bottom HUD Row - Real-time camera metadata representing current active slide */}
        <div className="flex justify-between items-end text-white/50 font-mono text-[10px] tracking-[0.2em] uppercase">
          <div className="flex flex-col gap-1">
            <span className="text-white/30 text-[8px] tracking-[0.3em]">EXPOSURE METADATA</span>
            <div className="flex items-center gap-4">
              <span className="text-white text-xs">{slides[currentIndex].shutter}</span>
              <span>{slides[currentIndex].fstop}</span>
              <span>ISO {slides[currentIndex].iso}</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-1 items-end">
            <span className="text-white/30 text-[8px] tracking-[0.3em]">SHOT LOCATION</span>
            <span className="text-white tracking-[0.3em] text-[10px]">{slides[currentIndex].title}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content Frame */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full w-full pointer-events-auto">
        <div className="max-w-3xl">
          {/* Subtle Accent Label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="w-10 h-[1px] bg-white/65"></span>
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-300">
              BAPPA CAPTURE EST. 2018
            </span>
          </div>

          {/* Majestic Cinematic Title */}
          <h1
            id="hero-main-headline"
            className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight text-white mb-8 select-none"
          >
            Capturing Moments,
            <span className="block mt-2 font-light text-neutral-300 italic">
              Creating Memories
            </span>
          </h1>

          {/* Premium Subtitle */}
          <p className="font-sans text-neutral-300 text-sm md:text-base tracking-wide max-w-xl mb-12 leading-relaxed">
            A bespoke, high-contrast monochrome space dedicated to raw human emotion, avant-garde fashion campaigns, and majestic natural vistas. Built on classic optical precision and cinematic artistry.
          </p>

          {/* Action Callbacks */}
          <div className="flex flex-wrap gap-5">
            <a
              id="hero-cta-portfolio"
              href="#portfolio"
              className="px-8 py-4 bg-white text-black font-sans font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
            >
              Explore Portfolio
            </a>
            <a
              id="hero-cta-about"
              href="#about"
              className="px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/90 font-sans font-semibold text-xs tracking-widest uppercase rounded-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              Learn Biography
            </a>
          </div>
        </div>
      </div>

      {/* Image Slider Controls (Interactive Viewfinder overlay control) */}
      <div id="hero-slider-nav-arrows" className="absolute bottom-12 right-6 md:right-12 z-30 flex items-center gap-4">
        {/* Toggle Grid Control */}
        <button
          id="hero-hud-grid-toggle"
          onClick={() => setShowGrid(!showGrid)}
          aria-label="Toggle camera gridlines"
          className="p-3 border border-white/10 hover:border-white/50 rounded-full text-white/50 hover:text-white transition-all duration-300 cursor-pointer mr-2"
        >
          <Grid className="w-4 h-4" />
        </button>

        <button
          id="hero-prev-slide-btn"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="p-3 border border-white/10 hover:border-white/50 rounded-full text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          id="hero-next-slide-btn"
          onClick={handleNext}
          aria-label="Next slide"
          className="p-3 border border-white/10 hover:border-white/50 rounded-full text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Floating Scroll Indicator */}
      <div id="hero-scroll-anchor" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none opacity-60 hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[8px] tracking-[0.4em] text-white/75 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
