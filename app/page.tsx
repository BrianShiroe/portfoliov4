import { Hero } from "../components/Hero";
import { About } from "@/components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "@/components/Experience";
import { CurriculumVitae } from "@/components/CurriculumVitae";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CurriculumVitae />
    </div>
  );
}
