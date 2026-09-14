import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/content/data';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">FAQ</p>
            <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl">
              Things people ask first.
            </h2>
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-bone-300">
              If you have a question we haven't answered, open an issue — we read every
              one.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-bone-800/60 border-y border-bone-800/60">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-bone-50"
                  >
                    <span className="display text-lg text-bone-50 sm:text-xl">{f.q}</span>
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-bone-800/60 text-bone-300 transition-colors duration-300 group-hover:border-gold-400/50 group-hover:text-gold-300">
                      {open === i ? (
                        <Minus className="h-3 w-3" strokeWidth={2} />
                      ) : (
                        <Plus className="h-3 w-3" strokeWidth={2} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-pretty leading-relaxed text-bone-300">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}