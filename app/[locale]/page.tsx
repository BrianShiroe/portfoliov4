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
      {/* 1. Home Section */}
      <Hero />
      
      {/* Divider */}
      <TechTicker />

      {/* 2. Projects Section (Includes both main and enterprise list) */}
      <Projects />
      <EnterpriseProjects />
      
      {/* 3. About Section */}
      <About />
      
      {/* 4. Skills Section (GSAP Pinned Horizontal Track) */}
      <Skills />
      
      {/* 5. Services Section */}
      <Services />
      
      {/* 6. Experience Section */}
      <Experience />
      
      {/* 7. Contact Section */}
      <Contact />
    </div>
  );
}