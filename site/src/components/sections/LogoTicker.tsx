import { SITE } from '@/lib/site';

const cells = [
  'Brief',
  'Style Guide',
  'Story',
  'Characters',
  'Wardrobe',
  'Locations',
  'Script',
  'Storyboard',
  'Continuity',
  'Render',
  'Score',
  'Color',
  'Distribution',
];

export function LogoTicker() {
  return (
    <section
      aria-label="Pipeline cells"
      className="relative border-y border-bone-800/40 bg-bone-50/[0.012] py-10"
    >
      <div className="container-page mb-6 flex items-center justify-between">
        <span className="mono-label">A single pipeline, every step in canon</span>
        <span className="mono-label hidden sm:inline">
          {SITE.version} · MIT · self-host or hosted
        </span>
      </div>

      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...cells, ...cells].map((c, i) => (
            <span key={i} className="ticker-cell">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}