import { Github, BookOpen, Container, FileText } from 'lucide-react';
import { Mark } from '@/components/ui/Mark';
import { SITE } from '@/lib/site';

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '#overview', external: false },
      { label: 'Capabilities', href: '#capabilities', external: false },
      { label: 'Pipeline', href: '#pipeline', external: false },
      { label: 'Plans', href: '#plans', external: false },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Architecture', href: SITE.docs, external: true },
      { label: 'Agents reference', href: 'https://github.com/sachncs/cinestudio/blob/master/docs/AGENTS.md', external: true },
      { label: 'Production model', href: 'https://github.com/sachncs/cinestudio/blob/master/docs/PRODUCTION_MODEL.md', external: true },
      { label: 'Continuity', href: 'https://github.com/sachncs/cinestudio/blob/master/docs/CONTINUITY.md', external: true },
    ],
  },
  {
    title: 'Deploy',
    links: [
      { label: 'DEPLOY.md', href: SITE.deploy, external: true },
      { label: 'Configuration', href: 'https://github.com/sachncs/cinestudio/blob/master/docs/CONFIGURATION.md', external: true },
      { label: 'Docker', href: 'https://github.com/sachncs/cinestudio/blob/master/Dockerfile', external: true },
      { label: 'Changelog', href: 'https://github.com/sachncs/cinestudio/blob/master/CHANGELOG.md', external: true },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'GitHub', href: SITE.repo, external: true },
      { label: 'Issues', href: `${SITE.repo}/issues`, external: true },
      { label: 'Discussions', href: `${SITE.repo}/discussions`, external: true },
      { label: 'License (MIT)', href: 'https://github.com/sachncs/cinestudio/blob/master/LICENSE', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-bone-800/60 pt-20 pb-12">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Mark size={32} withWordmark />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-bone-400">
              A multi-agent AI film rendering platform. 27 specialised Graph agents +
              render dispatcher + production-scoped Copilot.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={SITE.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone-800/60 text-bone-300 transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={SITE.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone-800/60 text-bone-300 transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-300"
                aria-label="Docs"
              >
                <BookOpen className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={SITE.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone-800/60 text-bone-300 transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-300"
                aria-label="Deploy"
              >
                <Container className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href="https://github.com/sachncs/cinestudio/blob/master/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone-800/60 text-bone-300 transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-300"
                aria-label="Changelog"
              >
                <FileText className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="mono-label mb-4">{c.title}</p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.external ? '_blank' : undefined}
                        rel={l.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-bone-300 transition-colors duration-200 hover:text-bone-50"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone-800/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
            © {new Date().getFullYear()} cinestudio · MIT · {SITE.version}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
            Built for the long cut.
          </p>
        </div>
      </div>
    </footer>
  );
}