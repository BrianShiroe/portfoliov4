import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Skills } from '@/components/home/Skills';
import { Projects } from '@/components/home/Projects';
import { Experience } from '@/components/home/Experience';
import { Contact } from '@/components/home/Contact';
import { TechTicker } from '@/components/home/TechTicker'; // Import the ticker

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Hero />
      
      {/* Ticker placed here as a section divider */}
      <TechTicker />
      
      <Projects />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}