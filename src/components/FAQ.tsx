import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqItems } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-500 border-t border-neutral-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3">
            06 / GENERAL INQUIRIES
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
            Frequently Asked
          </h2>
          <div className="w-24 h-[1px] bg-neutral-800 mt-6"></div>
        </div>

        {/* Accordions Stack */}
        <div id="faq-accordions-container" className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-accordion-card-${item.id}`}
                className="bg-neutral-900/10 border border-neutral-900 hover:border-neutral-800 rounded-sm transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  id={`faq-trigger-btn-${index}`}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer group"
                >
                  <span className="font-sans font-semibold text-sm md:text-base text-neutral-100 group-hover:text-white transition-colors uppercase tracking-wide">
                    {item.question}
                  </span>
                  <div className="p-1 border border-neutral-800 group-hover:border-neutral-600 rounded-full text-neutral-400 group-hover:text-white transition-colors ml-4 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer container */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-neutral-900/60' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-neutral-400 text-xs md:text-sm font-sans leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
