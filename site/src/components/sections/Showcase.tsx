import { motion } from 'framer-motion';
import { Aperture, Film, Layers, Mic2, Palette, Wand2 } from 'lucide-react';

const surfaces = [
  {
    icon: Film,
    name: 'Storyboard',
    body: 'Every shot mapped to framing, lens, and movement — generated, then supervised.',
  },
  {
    icon: Layers,
    name: 'Continuity',
    body: 'Wardrobe, lighting, props and pacing checked before render gates open.',
  },
  {
    icon: Wand2,
    name: 'Render Pool',
    body: 'MiniMax, Veo, Sora, Runway — parallel dispatch, isolated failures.',
  },
  {
    icon: Palette,
    name: 'Color & Grade',
    body: 'Cinematographer plans the look; Colorist executes, scene by scene.',
  },
  {
    icon: Mic2,
    name: 'Score & Foley',
    body: 'Original score, atmospheric foley, voice casting — all in canon.',
  },
  {
    icon: Aperture,
    name: 'Distribution',
    body: 'Cutdowns, thumbnails, press kits — generated when the cut is locked.',
  },
];

export function Showcase() {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Inside the Production</p>
            <h2 className="display text-balance text-4xl leading-[1.05] text-bone-50 sm:text-5xl lg:text-[56px]">
              A workspace that
              <br />
              <span className="text-gold-300">thinks in scenes.</span>
            </h2>
            <p className="mt-7 max-w-md text-pretty leading-relaxed text-bone-300">
              The dashboard mirrors the Production model. Sidebars for Characters,
              Wardrobe, Locations. A storyboard canvas. A Copilot rail with citations.
              Every action is undoable, every version is inspectable.
            </p>

            <dl className="mt-10 space-y-5">
              {[
                { k: '01', l: 'Storyboard canvas', d: 'Drag, drop, regenerate — per shot.' },
                { k: '02', l: 'Production-scoped Copilot', d: 'Citations to Characters, Scenes, Shots.' },
                { k: '03', l: 'Versioned everywhere', d: 'Wardrobe, palette, script — diff and rollback.' },
              ].map((row) => (
                <div key={row.k} className="flex gap-4">
                  <span className="font-mono text-xs text-gold-400">{row.k}</span>
                  <div>
                    <dt className="display text-lg text-bone-50">{row.l}</dt>
                    <dd className="text-sm text-bone-400">{row.d}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="surface relative grain-low p-2 shadow-warm">
              <div className="rounded-[14px] border border-bone-800/60 bg-gradient-to-br from-ink-950 via-film to-ink-950 p-1">
                <div className="rounded-[12px] border border-bone-800/40 bg-film/95">
                  <div className="flex items-center justify-between border-b border-bone-800/60 px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
                        the_alchemist · storyboard
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                      v12 · 47 shots
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-px bg-bone-800/30 p-px">
                    <div className="col-span-3 bg-film p-4">
                      <p className="mono-label">Cast</p>
                      <div className="mt-3 space-y-2">
                        {[
                          { n: 'Ada', r: 'protagonist' },
                          { n: 'Marek', r: 'mentor' },
                          { n: 'The Foundry', r: 'location' },
                        ].map((c) => (
                          <div
                            key={c.n}
                            className="flex items-center justify-between rounded-md border border-bone-800/60 bg-bone-50/[0.02] px-2.5 py-1.5"
                          >
                            <span className="text-sm text-bone-100">{c.n}</span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-bone-500">
                              {c.r}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="mono-label mt-6">Continuity</p>
                      <div className="mt-3 space-y-2">
                        {[
                          { l: 'Wardrobe', v: 98 },
                          { l: 'Lighting', v: 96 },
                          { l: 'Props', v: 92 },
                          { l: 'Pacing', v: 88 },
                        ].map((row) => (
                          <div key={row.l}>
                            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-bone-500">
                              <span>{row.l}</span>
                              <span className="text-bone-300">{row.v}%</span>
                            </div>
                            <div className="mt-1 h-1 overflow-hidden rounded-full bg-bone-800/60">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-gold-700 to-gold-300"
                                style={{ width: `${row.v}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-6 bg-film p-4">
                      <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, i) => {
                          const shades = ['from-gold-700/30', 'from-amber-700/20', 'from-ink-700/40'];
                          const tone = shades[i % shades.length];
                          return (
                            <div
                              key={i}
                              className={`relative aspect-video overflow-hidden rounded-md border border-bone-800/60 bg-gradient-to-br ${tone} via-ink-950 to-film`}
                            >
                              <div className="absolute inset-x-2 bottom-2 flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.16em] text-bone-400">
                                <span>{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-gold-300/80">{['A', 'B', 'C'][i % 3]}</span>
                              </div>
                              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(212,175,55,0.16),transparent_70%)]" />
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-3 rounded-md border border-bone-800/60 bg-bone-50/[0.02] p-3">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-bone-500">
                          <span>shot 04 · wide · 35mm</span>
                          <span className="text-gold-300">ready</span>
                        </div>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-bone-300">
                          Slow push-in across the foundry floor. Amber hour. Ada in
                          the doorway — costume continuity locked from shot 02.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-3 bg-film p-4">
                      <p className="mono-label">Copilot</p>
                      <div className="mt-3 space-y-2">
                        <div className="rounded-md border border-bone-800/60 bg-bone-50/[0.02] p-2.5">
                          <p className="text-[11px] leading-relaxed text-bone-200">
                            "Tighten pacing in scene 3 and add a focus pull to shot 11."
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            <span className="rounded-full border border-gold-400/30 px-1.5 py-0.5 text-[9px] text-gold-300">
                              scene.03
                            </span>
                            <span className="rounded-full border border-gold-400/30 px-1.5 py-0.5 text-[9px] text-gold-300">
                              shot.11
                            </span>
                          </div>
                        </div>
                        <div className="rounded-md border border-bone-800/60 bg-bone-50/[0.02] p-2.5">
                          <p className="text-[11px] leading-relaxed text-bone-300">
                            Proposed a tighter cut (62s → 48s) and added a 200mm rack
                            focus. Continuity holds: costume 02 across shots 09–14.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {surfaces.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="surface p-5"
                >
                  <s.icon className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                  <p className="mt-3 display text-lg text-bone-50">{s.name}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-bone-400">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}