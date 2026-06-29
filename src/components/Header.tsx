import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Camera } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Journal', href: '#journal' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-950/90 dark:bg-neutral-950/90 light-scrolled border-b border-neutral-900/40 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          id="header-brand-logo"
          href="#home"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-102"
        >
          <div className="relative p-2 bg-white/5 border border-white/10 dark:border-white/10 light-logo-border rounded-full overflow-hidden flex items-center justify-center">
            <Camera className="w-5 h-5 text-white dark:text-white transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-widest text-lg text-white dark:text-white uppercase">
              Bappa Capture
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-400">
              Luxury Monochrome
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              id={`desktop-nav-link-${index}`}
              href={item.href}
              className="relative text-xs tracking-widest uppercase font-mono font-medium text-neutral-300 hover:text-white dark:text-neutral-300 dark:hover:text-white transition-colors duration-300 py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Theme Switcher Toggle */}
          <button
            id="theme-toggle-btn-desktop"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 border border-neutral-800/60 hover:border-neutral-700 hover:bg-white/5 rounded-full text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-sky-400" />
            )}
          </button>

          {/* Luxury CTA Button */}
          <a
            id="header-cta-booking-btn"
            href="#contact"
            className="relative overflow-hidden px-5 py-2.5 bg-white text-black font-sans font-medium text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 rounded-sm"
          >
            Book Session
          </a>
        </div>

        {/* Mobile menu trigger + theme icon */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            id="theme-toggle-btn-mobile"
            onClick={toggleTheme}
            aria-label="Toggle theme mobile"
            className="p-2.5 border border-neutral-800/60 rounded-full text-neutral-400 hover:text-white"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-sky-400" />
            )}
          </button>

          <button
            id="mobile-menu-hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open navigation menu"
            className="p-2 text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-900 shadow-2xl backdrop-blur-xl transition-all duration-300 z-40 animate-fade-in"
        >
          <div className="flex flex-col py-6 px-8 gap-4">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                id={`mobile-nav-link-${index}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-widest uppercase font-mono font-medium text-neutral-400 hover:text-white py-2 border-b border-neutral-900/35 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              id="mobile-cta-booking-btn"
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-3 bg-white text-black text-center font-sans font-medium text-xs tracking-widest uppercase rounded-sm hover:bg-neutral-200"
            >
              Book Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
