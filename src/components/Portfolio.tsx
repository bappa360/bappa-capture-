import { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Camera, Maximize2, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Portrait', 'Wedding', 'Nature', 'Street', 'Wildlife', 'Fashion', 'Travel'];

  // Filter & Search Items
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((fi) => fi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setZoomLevel(1);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      setZoomLevel(1);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      setZoomLevel(1);
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-500 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3 block">
            02 / MASTERPIECE GALLERY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
              The Collections
            </h2>
            <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase max-w-sm">
              Explore dynamic, atmospheric frames categorized by light, theme, and geography.
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-800 mt-8"></div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Categories slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none w-full md:w-auto -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-[11px] tracking-widest uppercase font-mono border transition-all duration-300 rounded-2xl cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-72">
            <input
              id="portfolio-search-input"
              type="text"
              placeholder="Search by location, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 bg-neutral-900 border border-neutral-800 rounded-sm text-xs tracking-wider placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-white font-mono"
            />
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Masonry-inspired Grid Layout */}
        {filteredItems.length === 0 ? (
          <div id="no-portfolio-results" className="py-24 text-center border border-dashed border-neutral-800 rounded-sm">
            <p className="font-mono text-xs text-neutral-500 tracking-wider">
              No masterpieces matched your current search parameters. Try adjusting your filter!
            </p>
          </div>
        ) : (
          <div
            id="portfolio-masonry-grid"
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className="break-inside-avoid relative overflow-hidden group border border-white/5 bg-neutral-900/10 rounded-xs cursor-pointer"
                onClick={() => handleOpenLightbox(item)}
              >
                {/* Lazy loading style preview */}
                <div className="relative overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover grayscale contrast-120 saturate-0 hover:grayscale-0 hover:saturate-100 hover:scale-103 duration-700 transition-all ease-out"
                    loading="lazy"
                  />
                  {/* Glassmorphic Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-400">
                      {item.category}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-white mt-1 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-3 text-neutral-400 text-[10px] font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Camera className="w-3 h-3" /> {item.aperture}
                      </span>
                    </div>
                  </div>

                  {/* Absolute Corner Expand Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-neutral-950/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal overlay */}
      {activeLightboxItem && (
        <div
          id="portfolio-lightbox-overlay"
          className="fixed inset-0 bg-neutral-950/98 z-50 flex flex-col justify-between p-4 md:p-8 animate-fade-in"
        >
          {/* Top Controls Header */}
          <div className="flex justify-between items-center text-white z-10">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-400">
                {activeLightboxItem.category}
              </span>
              <span className="font-sans font-bold text-sm tracking-widest uppercase">
                {activeLightboxItem.title}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Zoom Buttons */}
              <button
                id="lightbox-zoom-out"
                onClick={() => setZoomLevel((prev) => Math.max(0.5, prev - 0.25))}
                className="p-2 border border-neutral-800 rounded-full hover:border-neutral-500 text-neutral-400 hover:text-white transition-all duration-300"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                id="lightbox-zoom-in"
                onClick={() => setZoomLevel((prev) => Math.min(3, prev + 0.25))}
                className="p-2 border border-neutral-800 rounded-full hover:border-neutral-500 text-neutral-400 hover:text-white transition-all duration-300"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={handleCloseLightbox}
                className="p-2 border border-neutral-800 rounded-full hover:border-neutral-500 text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Slide Viewer Container */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden my-6">
            {/* Previous Arrow */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrevLightbox}
              className="absolute left-4 p-4 bg-black/40 border border-neutral-800/40 rounded-full text-white/50 hover:text-white hover:border-white/50 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Cinematic Slide Image */}
            <div
              className="transition-transform duration-300 ease-out flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] md:max-h-[75vh] max-w-[90vw] md:max-w-[75vw] object-contain filter grayscale contrast-110 saturate-0"
              />
            </div>

            {/* Next Arrow */}
            <button
              id="lightbox-next-btn"
              onClick={handleNextLightbox}
              className="absolute right-4 p-4 bg-black/40 border border-neutral-800/40 rounded-full text-white/50 hover:text-white hover:border-white/50 transition-all z-10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Metatags and Specs bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end border-t border-neutral-900 pt-6 text-neutral-300 z-10">
            {/* Left Description */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-500 uppercase">
                ARTWORK DESCRIPTION
              </span>
              <p className="text-xs leading-relaxed text-neutral-400">
                {activeLightboxItem.description}
              </p>
            </div>

            {/* Center Geography & Date */}
            <div className="flex flex-col gap-2 font-mono text-[10px] md:items-center">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{activeLightboxItem.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span>{activeLightboxItem.date}</span>
              </div>
            </div>

            {/* Right Camera Exposure Details */}
            <div className="flex flex-col gap-2 items-end">
              <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-500 uppercase">
                EXPOSURE METADATA
              </span>
              <div className="flex items-center gap-4 font-mono text-xs text-neutral-400">
                <span>{activeLightboxItem.aperture}</span>
                <span>{activeLightboxItem.shutterSpeed}</span>
                <span>ISO {activeLightboxItem.iso}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
