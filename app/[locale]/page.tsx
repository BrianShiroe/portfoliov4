import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Skills } from '@/components/home/Skills';
import { Projects } from '@/components/home/Projects';
import { EnterpriseProjects } from '@/components/home/EnterpriseProjects'; // Import the new compact section
import { Experience } from '@/components/home/Experience';
import { Contact } from '@/components/home/Contact';
import { TechTicker } from '@/components/home/TechTicker'; // Import the ticker

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <Hero />
      
      {/* Ticker placed here as a section divider */}
      <TechTicker />
      
      {/* Personal Showcase Projects */}
      <Projects />

      {/* Production / Enterprise Directory Links */}
      <EnterpriseProjects />
      
      <About />
      <Services />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}