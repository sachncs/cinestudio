import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { plans } from '@/content/data';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

export function Plans() {
  return (
    <section id="plans" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="mb-14 max-w-3xl sm:mb-20">
          <p className="eyebrow mb-6">Plans</p>
          <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-6xl">
            Self-host forever. Or let us run it.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
            Producer is the open-source build — MIT licensed, single container, your
            hardware. Studio and Cinema add hosted convenience, multi-provider render
            and team workflows.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-bone-800/60 bg-bone-800/30 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={cn(
                'relative flex flex-col bg-film p-8 sm:p-10',
                p.highlight && 'bg-gradient-to-b from-bone-50/[0.04] via-film to-film'
              )}
            >
              {p.highlight && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-b-md bg-gold-400 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-film">
                    Most popular
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="display text-3xl text-bone-50">{p.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-bone-300">{p.blurb}</p>

              <div className="mt-7 flex items-baseline gap-1.5">
                <span className="display text-5xl text-bone-50">{p.price}</span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-bone-500">
                  {p.period}
                </span>
              </div>

              <a
                href={p.id === 'producer' ? SITE.deploy : SITE.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                  p.highlight
                    ? 'bg-bone-50 text-film hover:bg-white hover:shadow-glow-gold'
                    : 'border border-bone-700/60 bg-bone-50/[0.02] text-bone-100 hover:border-gold-400/50 hover:bg-bone-50/[0.06]'
                )}
              >
                {p.cta}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>

              <ul className="mt-8 space-y-3 border-t border-bone-800/60 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-bone-300">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400"
                      strokeWidth={2.25}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
          All plans ship the same 27-agent Graph · MIT for the self-hosted build
        </p>
      </div>
    </section>
  );
}