import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}