import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { Overview } from '@/components/sections/Overview';
import { Capabilities } from '@/components/sections/Capabilities';
import { Pipeline } from '@/components/sections/Pipeline';
import { Showcase } from '@/components/sections/Showcase';
import { Plans } from '@/components/sections/Plans';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <LogoTicker />
        <Overview />
        <Capabilities />
        <Pipeline />
        <Showcase />
        <Plans />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}