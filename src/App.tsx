import { Nav } from '@/components/Nav';
import { Introduction } from '@/sections/Introduction';
import { Overview } from '@/sections/Overview';
import { Challenge } from '@/sections/Challenge';
import { Process } from '@/sections/Process';
import { Research } from '@/sections/Research';
import { BrandDesign } from '@/sections/BrandDesign';
import { UxWireframes } from '@/sections/UxWireframes';
import { ThreeDModel } from '@/sections/ThreeDModel';
import { WebsiteDevelopment } from '@/sections/WebsiteDevelopment';
import { Challenges } from '@/sections/Challenges';
import { FinalResult } from '@/sections/FinalResult';
import { Reflection } from '@/sections/Reflection';
import { Links, Footer } from '@/sections/Links';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Introduction />
        <Overview />
        <Challenge />
        <Process />
        <Research />
        <BrandDesign />
        <UxWireframes />
        <ThreeDModel />
        <WebsiteDevelopment />
        <Challenges />
        <FinalResult />
        <Reflection />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
