import { Camera, Award, Shield, Milestone } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '8+', label: 'Years of Vision' },
    { value: '140+', label: 'Campaigns Shot' },
    { value: '18', label: 'Global Awards' },
    { value: '100%', label: 'Visual Integrity' },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Monochrome Birth',
      desc: 'Bappa established Bappa Capture in NY, shooting raw analog portraits with custom film rolls.',
    },
    {
      year: '2021',
      title: 'Paris Vogue Editorial',
      desc: 'Commissioned for a 12-page black & white spread, defining high-contrast geometric fashion.',
    },
    {
      year: '2024',
      title: 'Milan Solo Exhibition',
      desc: '“The Silhouette of Silence” was showcased to critical acclaim, presenting 40 printed masterpieces.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white light-about-bg transition-colors duration-500 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3 block">
            01 / BIOGRAPHY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
              Bappa Capture
            </h2>
            <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase max-w-sm">
              Crafting timeless, high-contrast monochrome stories since 2018.
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-800 mt-8"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photographer Profile Photo Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 border border-white/10 rounded-sm translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative overflow-hidden border border-white/20 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
                alt="Bappa Portrait holding camera"
                referrerPolicy="no-referrer"
                className="w-full h-[550px] object-cover grayscale contrast-120 saturate-0 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay camera settings of profile photo */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 border border-white/10 rounded-xs flex justify-between font-mono text-[9px] tracking-widest uppercase text-neutral-300">
                <span>PORTRAIT WITH SUMMICRON 50MM</span>
                <span>f/2.0 · 1/160s · ISO 100</span>
              </div>
            </div>
          </div>

          {/* Biography Narrative and Achievements */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight text-neutral-100 mb-6 uppercase">
                The Silhouette is the True Language of Light
              </h3>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                I am Bappa, the visionary behind Bappa Capture. To me, photography is not about clicking shutter buttons—it is an exercise in restraint. Stripping away the distraction of color forces the human mind to confront pure emotion, visual geometry, and depth.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Whether composing an intimate bridal portrait in Tuscany or capturing the rugged volcanic textures of a storm in Greece, my team and I approach every single shoot with high-fashion precision and uncompromising artistic integrity.
              </p>
            </div>

            {/* Premium Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-neutral-900/40 p-6 border border-neutral-900 rounded-sm">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Gear & Philosophy Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-neutral-900 p-5 rounded-sm flex items-start gap-4">
                <Camera className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-white mb-2">
                    Leica & Hasselblad Systems
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Utilizing dedicated monochrome sensors to capture unmatched levels of raw luminance and optical depth.
                  </p>
                </div>
              </div>
              <div className="border border-neutral-900 p-5 rounded-sm flex items-start gap-4">
                <Award className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-white mb-2">
                    Timeless Visual Legacy
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Hand-crafted, low-key lighting configurations that make photos look outstanding on modern screens or high-end gallery prints.
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Timeline */}
            <div>
              <h4 className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6 flex items-center gap-2">
                <Milestone className="w-4 h-4" /> History & Milestones
              </h4>
              <div className="relative border-l border-neutral-800 ml-2 pl-6 flex flex-col gap-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative group/time">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-neutral-950 border border-neutral-700 rounded-full group-hover/time:bg-white group-hover/time:border-white transition-all duration-300"></div>
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover/time:text-white transition-colors duration-300">
                      {item.year}
                    </span>
                    <h5 className="font-sans font-bold text-sm text-neutral-100 uppercase mt-1">
                      {item.title}
                    </h5>
                    <p className="text-neutral-400 text-xs leading-relaxed mt-1 font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
