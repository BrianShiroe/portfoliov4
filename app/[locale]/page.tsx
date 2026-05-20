import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Skills } from '@/components/home/Skills';
import { Projects } from '@/components/home/Projects';
import { EnterpriseProjects } from '@/components/home/EnterpriseProjects'; 
import { Experience } from '@/components/home/Experience';
import { Contact } from '@/components/home/Contact';
import { TechTicker } from '@/components/home/TechTicker'; 

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <Hero />
      <About />
      
      {/* Divider */}
      <TechTicker />

      <Projects />
      <EnterpriseProjects />
      
      <Skills />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}