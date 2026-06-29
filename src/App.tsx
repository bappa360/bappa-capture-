import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  
  // Bespoke estimator communication state
  const [estimateCategory, setEstimateCategory] = useState<string>('');
  const [estimateMessage, setEstimateMessage] = useState<string>('');

  // Handle document theme classes on load or change
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSelectEstimate = (category: string, message: string) => {
    setEstimateCategory(category);
    setEstimateMessage(message);
    
    // Smooth scroll to contact form section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearPresets = () => {
    setEstimateCategory('');
    setEstimateMessage('');
  };

  return (
    <div
      id="app-root-container"
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isDarkMode
          ? 'bg-neutral-950 text-white'
          : 'bg-zinc-50 text-neutral-900'
      }`}
    >
      {/* Sticky Header Navigation */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Structural Layout blocks */}
      <main id="portfolio-main-layout">
        {/* Full-screen Hero Shot Viewfinder */}
        <Hero />

        {/* Detailed Bio timeline & equipment profiles */}
        <About />

        {/* Dynamic Category filtering & full Lightbox */}
        <Portfolio />

        {/* Rate Cards & Bespoke Estimate Calculator */}
        <Services onSelectEstimate={handleSelectEstimate} />

        {/* Premium Star client reviews slider */}
        <Testimonials />

        {/* Editorial Journal entries & Fullscreen modal reader */}
        <Blog />

        {/* Direct helpful accordions */}
        <FAQ />

        {/* Inline Validated Booking proposal form & Maps */}
        <Contact
          initialCategory={estimateCategory}
          initialMessage={estimateMessage}
          onClearPresets={handleClearPresets}
        />

        {/* Curated Instagram grid previews */}
        <InstagramFeed />
      </main>

      {/* Newsletter, Social channels, & legal details */}
      <Footer />
    </div>
  );
}
