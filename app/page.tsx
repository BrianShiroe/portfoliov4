import { Hero } from "../components/Hero";
import { About } from "@/components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "@/components/Experience";
import { CurriculumVitae } from "@/components/CurriculumVitae";
import { Contact } from "@/components/Contact";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Clients />
      {/* <CurriculumVitae /> */}
      <Contact />
    </div>
  );
}
