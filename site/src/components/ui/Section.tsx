import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, lede, align = 'left', children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-24 sm:py-32 lg:py-40', className)}>
      <div className="container-page relative">
        {(eyebrow || title || lede) && (
          <header
            className={cn(
              'mb-14 max-w-3xl sm:mb-20',
              align === 'center' && 'mx-auto text-center'
            )}
          >
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            {title && (
              <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {lede && (
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
                {lede}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}