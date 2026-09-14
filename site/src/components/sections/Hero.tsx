import { ArrowRight, Github, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroPreview } from '@/components/visuals/HeroPreview';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow mb-6">
            <span>v0.1.0 · open source · MIT</span>
          </span>

          <h1 className="display max-w-4xl text-balance text-5xl leading-[1.02] text-bone-50 sm:text-6xl lg:text-7xl xl:text-[80px]">
            A film, from one prompt.
            <br />
            <span className="bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              Coordinated by 27 agents.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
            Brief, script, storyboard, render, score, color, distribution — a continuous
            flow that turns an idea into a 30-second to 20-minute film. The Production is
            the unit of truth. Runs are execution traces you can resume.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a href={SITE.deploy} className="btn-primary group">
              Self-host in 5 minutes
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
            <a href={SITE.repo} className="btn-secondary group">
              <Github className="h-4 w-4" strokeWidth={1.75} />
              View on GitHub
            </a>
            <a href="#overview" className="btn-ghost">
              <Play className="h-3.5 w-3.5" strokeWidth={1.75} />
              Watch the flow
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-28"
        >
          <HeroPreview />

          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-bone-800/60 bg-film/80 px-4 py-2 backdrop-blur-xl lg:flex">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.75} />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
              Live production · the_alchemist · shot 12 of 47
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-28 grid grid-cols-2 gap-y-8 sm:mt-32 lg:mt-40 lg:grid-cols-4"
        >
          {[
            { value: '27', label: 'Graph agents' },
            { value: '20m', label: 'Max film length' },
            { value: '5+', label: 'Render providers' },
            { value: '∞', label: 'Resumable runs' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1 border-l border-bone-800/60 pl-6">
              <span className="display text-4xl text-bone-50 sm:text-5xl">{s.value}</span>
              <span className="mono-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[60%] -z-10 h-[600px] bg-[radial-gradient(50%_60%_at_50%_50%,rgba(212,175,55,0.06),transparent_70%)]"
      />
    </section>
  );
}