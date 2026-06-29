import { useState, FormEvent } from 'react';
import { Camera, Instagram, Youtube, Pin, Globe, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;

    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
    { name: 'Pinterest', icon: <Pin className="w-4 h-4" />, href: 'https://pinterest.com' },
    { name: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com' },
    { name: '500px', icon: <Globe className="w-4 h-4" />, href: 'https://500px.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Biography', href: '#about' },
    { name: 'Masterpieces', href: '#portfolio' },
    { name: 'Offering Rates', href: '#services' },
    { name: 'Inquire Booking', href: '#contact' },
  ];

  return (
    <footer
      id="main-luxury-footer"
      className="bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white border-t border-neutral-900 pt-20 pb-10 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Col 1: Brand details (Col 4) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="p-2 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold tracking-widest text-lg uppercase">
                  Bappa Capture
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-400">
                  Luxury Monochrome
                </span>
              </div>
            </a>
            <p className="font-sans text-neutral-400 text-xs leading-relaxed max-w-sm">
              An award-winning, independent space dedicated to capturing timeless cinematic raw portraits, wedding stories, and avant-garde editorials.
            </p>
          </div>

          {/* Col 2: Useful navigation links (Col 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-300">
              EXPLORATIONS
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs text-neutral-400 hover:text-white transition-colors py-1 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Newsletter form (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-300">
              THE MONOCHROME CLUB
            </h4>
            <p className="font-sans text-neutral-400 text-xs leading-relaxed mb-2">
              Subscribe to receive exclusive print showcases, lighting theory journals, and booking availability announcements.
            </p>

            <form id="newsletter-subscription-form" onSubmit={handleSubscribe} className="relative w-full">
              {subscribed ? (
                <div id="newsletter-success-state" className="flex items-center gap-2 text-xs font-mono text-emerald-400 animate-fade-in p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <div className="relative">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="Enter email for art updates..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 pl-4 pr-12 bg-neutral-900 border border-neutral-800 focus:border-neutral-500 rounded-sm text-xs font-mono text-white focus:outline-none"
                  />
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    aria-label="Subscribe email"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-neutral-900"></div>

        {/* Bottom block */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[10px] text-neutral-500">
          <p>© {new Date().getFullYear()} Bappa Capture. All rights reserved.</p>
          
          {/* Social Profiles */}
          <div className="flex items-center gap-5">
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.name}
                className="p-2 border border-neutral-900 rounded-full text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
