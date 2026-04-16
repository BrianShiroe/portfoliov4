// app/page.tsx
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Experience } from "@/components/home/Experience";
import { Clients } from "@/components/home/Clients";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      {/* <Clients /> */}

      <Contact />
    </div>
  );
}
