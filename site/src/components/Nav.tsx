import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Mark } from '@/components/ui/Mark';
import { navLinks } from '@/content/data';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-bone-800/40 bg-film/70 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-2.5">
          <Mark size={28} withWordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
          <a href="#cta" className="btn-primary">
            Get started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone-800/60 text-bone-200 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container-page pb-6">
            <div className="surface p-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-bone-200 hover:bg-bone-50/[0.04]"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-bone-800/60 pt-2">
                <a
                  href={SITE.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 justify-center"
                >
                  GitHub
                </a>
                <a href="#cta" className="btn-primary flex-1 justify-center">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}