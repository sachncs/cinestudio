import { motion } from 'framer-motion';
import { pipeline } from '@/content/data';

export function Pipeline() {
  return (
    <section id="pipeline" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="mb-14 max-w-3xl sm:mb-20">
          <p className="eyebrow mb-6">The Pipeline</p>
          <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-6xl">
            From brief to distribution, one continuous flow.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
            Every stage is a specialised agent with a deterministic contract. The Graph
            orchestrates them as a DAG — branching, checking, looping where creative
            judgment requires it.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-bone-800/80 to-transparent" />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-bone-800/60 bg-bone-800/30 sm:grid-cols-2 lg:hidden">
            {pipeline.map((step, i) => (
              <PipelineCell key={step.index} step={step} delay={i * 0.04} />
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="relative grid grid-cols-13 gap-px overflow-hidden rounded-2xl border border-bone-800/60 bg-bone-800/30">
              {pipeline.map((step, i) => (
                <PipelineCell key={step.index} step={step} delay={i * 0.03} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-bone-800/60 bg-bone-50/[0.015] p-6 sm:grid-cols-3 sm:p-8">
          {[
            {
              k: 'Branching',
              v: 'Conditions, checks, loops',
              d: 'Deterministic DAG with conditional edges and supervisor fan-out.',
            },
            {
              k: 'Swarm',
              v: 'Convergence probe',
              d: 'Story ↔ Cast ↔ Wardrobe ↔ World iterate to a locked canon.',
            },
            {
              k: 'Resumable',
              v: 'Session files on disk',
              d: 'Crash mid-run? Pick up exactly where the Workflow stopped.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l border-gold-400/30 pl-5"
            >
              <p className="mono-label">{c.k}</p>
              <p className="mt-2 display text-xl text-bone-50">{c.v}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-bone-400">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineCell({
  step,
  delay,
}: {
  step: (typeof pipeline)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-2 bg-film p-5 lg:p-4"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
          {step.index}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" />
      </div>
      <p className="display text-base text-bone-50">{step.name}</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-300/80">
        {step.agent}
      </p>
      <p className="text-[12px] leading-relaxed text-bone-400">{step.desc}</p>
    </motion.div>
  );
}