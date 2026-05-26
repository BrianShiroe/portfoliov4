import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import { TopProjects } from "@/components/home/TopProjects";
import { AllProjects } from "@/components/home/AllProjects";
import { Experience } from "@/components/home/Experience";
import { Contact } from "@/components/home/Contact";
import { TechTicker } from "@/components/home/TechTicker";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <Hero />

      {/* Divider */}
      <TechTicker />
      <About />

      <TopProjects />
      <AllProjects />

      <Skills />
      <Services />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
