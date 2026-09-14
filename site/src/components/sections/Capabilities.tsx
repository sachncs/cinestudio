import { motion } from 'framer-motion';
import { features } from '@/content/data';
import { cn } from '@/lib/cn';

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="mb-16 max-w-3xl sm:mb-20">
          <p className="eyebrow mb-6">Capabilities</p>
          <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-6xl">
            Six systems, one Production.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
            Each capability is a distinct subsystem with a deterministic contract. They
            compose into the full creative pipeline — and they can be inspected, paused
            and resumed independently.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-bone-800/60 bg-bone-800/30 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCell key={f.id} feature={f} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCell({
  feature,
  delay,
}: {
  feature: (typeof features)[number];
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative flex flex-col bg-film p-7 sm:p-8',
        'min-h-[340px]'
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-500">
          {feature.index}
        </span>
        {feature.metric && (
          <div className="flex items-baseline gap-1.5">
            <span className="display text-2xl text-gold-300">{feature.metric.value}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone-500">
              {feature.metric.label}
            </span>
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="eyebrow mb-3">{feature.eyebrow}</p>
        <h3 className="display text-balance text-2xl leading-tight text-bone-50 sm:text-[26px]">
          {feature.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-bone-300">
          {feature.description}
        </p>
      </div>

      <ul className="mt-6 space-y-1.5 border-t border-bone-800/60 pt-5">
        {feature.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-[13px] leading-relaxed text-bone-400"
          >
            <span className="mt-2 h-px w-3 shrink-0 bg-gold-400/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />
    </motion.article>
  );
}