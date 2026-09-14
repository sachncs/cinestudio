import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { valueProps } from '@/content/data';

export function Overview() {
  return (
    <section id="overview" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Overview</p>
            <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-6xl">
              A Production is the
              <br />
              <span className="text-gold-300">central object.</span>
            </h2>
            <p className="mt-7 max-w-md text-pretty leading-relaxed text-bone-300">
              Characters, Wardrobe, Locations, Scenes, Shots, Transitions, Continuity,
              Knowledge, Assets, Comments, Versions, Runs and Copilot threads — all
              scoped to one Production. The Graph orchestrates; you direct.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                'Characters',
                'Wardrobe',
                'Locations',
                'Scenes',
                'Shots',
                'Continuity',
                'Knowledge',
                'Assets',
                'Versions',
                'Runs',
                'Copilot',
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-bone-800/60 bg-bone-50/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-bone-800/60 bg-bone-800/30 sm:grid-cols-1">
              {valueProps.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-film p-7 sm:p-9"
                >
                  <div className="flex items-start gap-5">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-500/[0.06]">
                      <Check className="h-3 w-3 text-gold-300" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="display text-2xl text-bone-50 sm:text-3xl">{v.title}</h3>
                      <p className="mt-2.5 text-pretty leading-relaxed text-bone-300">
                        {v.body}
                      </p>
                    </div>
                  </div>

                  <span className="absolute right-7 top-7 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-600">
                    0{i + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}