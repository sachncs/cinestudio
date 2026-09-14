import { ArrowRight, Github, BookOpen } from 'lucide-react';
import { SITE } from '@/lib/site';

export function CTA() {
  return (
    <section id="cta" className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="surface-warm relative overflow-hidden p-10 sm:p-16 lg:p-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'radial-gradient(60% 60% at 80% 20%, rgba(212,175,55,0.18), transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(184,138,31,0.12), transparent 70%)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              mixBlendMode: 'overlay',
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">Get started</p>
              <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-[64px]">
                Make a film this weekend.
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
                Clone the repo, set one API key, and run <code className="rounded bg-bone-50/[0.04] px-1.5 py-0.5 font-mono text-[13px] text-gold-300">docker compose up</code>.
                The first run takes a coffee. The next takes a line of dialogue.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-end">
              <a
                href={SITE.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full justify-center sm:w-auto"
              >
                Read DEPLOY.md
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </a>
              <a
                href={SITE.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center sm:w-auto"
              >
                <Github className="h-4 w-4" strokeWidth={1.75} />
                Star on GitHub
              </a>
              <a
                href={SITE.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center sm:justify-end"
              >
                <BookOpen className="h-3.5 w-3.5" strokeWidth={1.75} />
                Read the architecture
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}