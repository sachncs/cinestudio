import { cn } from '@/lib/cn';

type PreviewProps = {
  className?: string;
};

export function HeroPreview({ className }: PreviewProps) {
  return (
    <div className={cn('relative isolate', className)}>
      <div className="pointer-events-none absolute -inset-x-20 -inset-y-10 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(212,175,55,0.18),transparent_70%)]" />
      </div>

      <div className="surface-warm p-1.5 shadow-warm">
        <div className="rounded-[14px] border border-bone-800/60 bg-film">
          <div className="flex items-center justify-between border-b border-bone-800/60 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-bone-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-bone-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-bone-700" />
            </div>
            <div className="flex items-center gap-2 rounded-md border border-bone-800/80 bg-bone-50/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
              production · the_alchemist
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-500">
              02:14 / 18:00
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(212,175,55,0.12),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_70%,rgba(184,138,31,0.08),transparent_70%)]" />

            <svg
              className="absolute inset-0 h-full w-full opacity-[0.18]"
              viewBox="0 0 800 500"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
              <div className="col-span-7 row-span-6 flex items-end p-6">
                <div className="space-y-1.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-300/80">
                    SCENE 04 · SHOT 12
                  </p>
                  <p className="display text-2xl text-bone-50 sm:text-3xl">The Alchemist</p>
                  <p className="max-w-md text-xs leading-relaxed text-bone-300 sm:text-sm">
                    Wide establishing — amber hour, slow push-in, 35mm. Wardrobe continuity
                    held across shots 09–14.
                  </p>
                </div>
              </div>

              <div className="col-span-5 row-span-6 flex flex-col justify-between p-4">
                <div className="flex justify-end gap-1.5">
                  {['b01', 'b02', 'b03'].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-bone-700/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-bone-400"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="rounded-md border border-bone-800/60 bg-bone-50/[0.02] p-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-bone-500">
                    <span>Continuity</span>
                    <span className="text-gold-300/90">98.2%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bone-800/60">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-gold-700 to-gold-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 border-t border-bone-800/60 bg-film/80 px-4 py-2.5 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-400">
                  rendering · shot 12/47
                </span>
              </div>
              <div className="flex flex-1 items-center gap-1">
                {Array.from({ length: 47 }).map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      'h-1 flex-1 rounded-full',
                      i < 12
                        ? 'bg-gold-400/80'
                        : i === 12
                          ? 'bg-gold-300 animate-pulse-soft'
                          : 'bg-bone-800'
                    )}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-500">
                6m 12s
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-gold-400/30 lg:block">
        <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="fill-bone-400 font-mono text-[8px] uppercase tracking-[0.3em]">
              <textPath href="#circle">GRAPH · SWARM · WORKFLOW · COPLIOT · </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}