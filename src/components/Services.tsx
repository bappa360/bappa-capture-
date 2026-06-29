import { useState, useMemo } from 'react';
import { Check, Info, Sliders, DollarSign, Clock, HelpCircle } from 'lucide-react';
import { servicePackages } from '../data';

interface ServicesProps {
  onSelectEstimate: (category: string, message: string) => void;
}

export default function Services({ onSelectEstimate }: ServicesProps) {
  // Calculator States
  const [sessionType, setSessionType] = useState<'Portrait' | 'Wedding' | 'Fashion' | 'Travel'>('Portrait');
  const [hours, setHours] = useState<number>(4);
  const [secondShooter, setSecondShooter] = useState<boolean>(false);
  const [albumInclude, setAlbumInclude] = useState<boolean>(false);

  // Live Estimate Logic
  const calculatedEstimate = useMemo(() => {
    let baseRatePerHour = 150; // Portrait base
    if (sessionType === 'Wedding') baseRatePerHour = 250;
    if (sessionType === 'Fashion') baseRatePerHour = 200;
    if (sessionType === 'Travel') baseRatePerHour = 180;

    let subtotal = baseRatePerHour * hours;
    if (secondShooter) subtotal += 350;
    if (albumInclude) subtotal += 250;

    return subtotal;
  }, [sessionType, hours, secondShooter, albumInclude]);

  const handleApplyEstimate = () => {
    const formattedMsg = `Hello! I generated an estimate for a custom ${sessionType} Shoot (${hours} hours, ${
      secondShooter ? 'with assistant' : 'solo'
    }, ${albumInclude ? 'includes custom album' : 'digital only'}). My estimated total: $${calculatedEstimate}. Let's discuss details!`;
    
    onSelectEstimate(sessionType, formattedMsg);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-500 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3 block">
            03 / RATES & SPECIALTIES
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
              The Offerings
            </h2>
            <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase max-w-sm">
              Transparent, premium services tailored to editorial, wedding, and high-fashion publications.
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-800 mt-8"></div>
        </div>

        {/* Pricing Cards Column */}
        <div id="pricing-packages-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`service-pkg-card-${pkg.id}`}
              className={`relative flex flex-col p-8 md:p-10 rounded-sm border transition-all duration-500 ${
                pkg.featured
                  ? 'bg-white text-black border-white shadow-2xl scale-102 lg:scale-104 z-10'
                  : 'bg-neutral-900/40 text-white border-neutral-900 hover:border-neutral-800'
              }`}
            >
              {/* Feature Badge */}
              {pkg.featured && (
                <span className="absolute top-4 right-4 bg-black text-white font-mono text-[8px] tracking-[0.3em] uppercase px-3 py-1 rounded-full">
                  MOST REQUESTED
                </span>
              )}

              {/* Package Meta */}
              <span className={`font-mono text-[9px] tracking-[0.3em] uppercase mb-2 ${
                pkg.featured ? 'text-neutral-500' : 'text-neutral-400'
              }`}>
                {pkg.duration}
              </span>
              <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tight mb-4">
                {pkg.title}
              </h3>
              <p className={`text-xs leading-relaxed mb-8 font-sans ${
                pkg.featured ? 'text-neutral-700' : 'text-neutral-400'
              }`}>
                {pkg.description}
              </p>

              {/* Package Pricing */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-sans font-extrabold text-4xl tracking-tight">
                  {pkg.price}
                </span>
                <span className={`font-mono text-[10px] tracking-widest uppercase ${
                  pkg.featured ? 'text-neutral-500' : 'text-neutral-400'
                }`}>
                  / flat rate
                </span>
              </div>

              <div className={`w-full h-[1px] mb-8 ${pkg.featured ? 'bg-neutral-200' : 'bg-neutral-800'}`}></div>

              {/* Package Deliverables */}
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {pkg.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs leading-normal font-sans">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                      pkg.featured ? 'text-black' : 'text-neutral-300'
                    }`} />
                    <span className={pkg.featured ? 'text-neutral-800' : 'text-neutral-300'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Quick Book CTA */}
              <a
                id={`book-pkg-btn-${pkg.id}`}
                href="#contact"
                className={`py-3.5 text-center text-xs tracking-widest font-mono uppercase font-semibold transition-all duration-300 rounded-sm ${
                  pkg.featured
                    ? 'bg-black text-white hover:bg-neutral-900 shadow-lg'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                Inquire Package
              </a>
            </div>
          ))}
        </div>

        {/* Dynamic Bespoke Calculator Dashboard */}
        <div
          id="custom-estimate-calculator-widget"
          className="bg-neutral-900/30 border border-neutral-900 rounded-sm p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sliders className="w-5 h-5 text-neutral-400" />
            <h3 className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-neutral-300">
              03.1 / BESPOKE ESTIMATE CALCULATOR
            </h3>
          </div>
          
          <p className="text-neutral-400 text-xs md:text-sm max-w-xl mb-10 font-sans leading-relaxed">
            Have a highly customized vision or require specific hours? Use our transparent interactive calculator to build a real-time estimate.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Calculator Inputs (Col 7) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Step 1: Session Category */}
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-3 block">
                  Step 1: Choose Shoot Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(['Portrait', 'Wedding', 'Fashion', 'Travel'] as const).map((type) => (
                    <button
                      key={type}
                      id={`calc-type-select-${type.toLowerCase()}`}
                      onClick={() => setSessionType(type)}
                      className={`py-2.5 px-4 font-mono text-[10px] tracking-widest uppercase border rounded-xs transition-all duration-300 ${
                        sessionType === type
                          ? 'bg-white text-black border-white'
                          : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Duration slider */}
              <div>
                <div className="flex justify-between items-center mb-3 font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                  <span>Step 2: Shoot Duration</span>
                  <span className="text-white font-bold">{hours} Hours</span>
                </div>
                <input
                  id="calc-hours-range-slider"
                  type="range"
                  min="2"
                  max="12"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[9px] text-neutral-500 font-mono mt-1.5">
                  <span>2 HOURS (MIN)</span>
                  <span>12 HOURS (MAX)</span>
                </div>
              </div>

              {/* Step 3: Optional Add-ons */}
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-3.5 block">
                  Step 3: Optional Craft Add-ons
                </label>
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Add Assistant */}
                  <label className="flex-1 flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800/80 rounded-sm cursor-pointer hover:border-neutral-700 transition-colors">
                    <input
                      id="calc-second-shooter-checkbox"
                      type="checkbox"
                      checked={secondShooter}
                      onChange={(e) => setSecondShooter(e.target.checked)}
                      className="w-4 h-4 accent-neutral-900 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-xs text-neutral-200">Second Shooter</span>
                      <span className="font-mono text-[9px] text-neutral-500 uppercase mt-0.5">+ $350 assistant</span>
                    </div>
                  </label>

                  {/* Add Premium Album */}
                  <label className="flex-1 flex items-center gap-3 p-4 bg-neutral-900/50 border border-neutral-800/80 rounded-sm cursor-pointer hover:border-neutral-700 transition-colors">
                    <input
                      id="calc-album-checkbox"
                      type="checkbox"
                      checked={albumInclude}
                      onChange={(e) => setAlbumInclude(e.target.checked)}
                      className="w-4 h-4 accent-neutral-900 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-xs text-neutral-200">Linen Album Book</span>
                      <span className="font-mono text-[9px] text-neutral-500 uppercase mt-0.5">+ $250 leather print</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Result Dashboard Frame (Col 5) */}
            <div className="lg:col-span-5 p-8 bg-neutral-950 border border-neutral-850 rounded-sm flex flex-col justify-between h-full min-h-[290px]">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 uppercase">
                  LIVE ESTIMATED STATEMENT
                </span>
                <span className="font-sans font-extrabold text-lg text-white mt-2 uppercase tracking-tight">
                  Bespoke {sessionType} Suite
                </span>
                
                <div className="w-full h-[1px] bg-neutral-900 my-4"></div>

                <div className="flex flex-col gap-2 font-mono text-[11px] text-neutral-400">
                  <div className="flex justify-between">
                    <span>Base Duration Rate ({hours}h):</span>
                    <span>${hours * (sessionType === 'Portrait' ? 150 : sessionType === 'Wedding' ? 250 : sessionType === 'Fashion' ? 200 : 180)}</span>
                  </div>
                  {secondShooter && (
                    <div className="flex justify-between">
                      <span>Second Photographer:</span>
                      <span>+$350</span>
                    </div>
                  )}
                  {albumInclude && (
                    <div className="flex justify-between">
                      <span>Linen Print Album:</span>
                      <span>+$250</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                    ESTIMATED SUM:
                  </span>
                  <div className="flex items-center text-white">
                    <DollarSign className="w-5 h-5 text-neutral-400" />
                    <span className="font-sans font-extrabold text-3xl tracking-tight">
                      {calculatedEstimate}
                    </span>
                  </div>
                </div>

                <button
                  id="apply-calculated-estimate-btn"
                  onClick={handleApplyEstimate}
                  className="w-full py-3 bg-white hover:bg-neutral-200 text-black font-sans font-semibold text-xs tracking-widest uppercase transition-colors rounded-sm cursor-pointer"
                >
                  Apply & Inquire Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
