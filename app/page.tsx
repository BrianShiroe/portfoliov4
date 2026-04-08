import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      
      {/* SECTION 1: HERO (GRADIENT TEXT FOCUS) */}
      <section className="flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-[0.3em]">
          Version 2026.04
        </div>
        <h1 className="text-gradient-ink text-6xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl">
          DIGITAL <br /> ARCHITECT
        </h1>
        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink-soft">
          Building high-fidelity interfaces with a focus on 
          <span className="text-ink-deep underline decoration-4"> brutalist simplicity</span> and modern performance.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button className="retro-border-thick bg-ink-deep px-10 py-4 text-white font-bold uppercase hover:bg-ink-mid">
            Enter System
          </button>
          <button className="retro-border-thick bg-white px-10 py-4 text-ink-deep font-bold uppercase hover:bg-zinc-50">
            Source Code
          </button>
        </div>
      </section>

      {/* SECTION 2: THE "GRID" (SKILLS / TECH) */}
      <section className="w-full border-t-4 border-black bg-zinc-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-ink-deep">Core_Modules</h2>
            <p className="text-sm font-bold text-ink-soft uppercase tracking-widest">[ 04 Loaded ]</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL'].map((tech) => (
              <div key={tech} className="retro-border-thick retro-card-hover bg-white p-6">
                <p className="text-xs font-bold text-zinc-400 mb-2">TYPE: TOOL_SET</p>
                <h3 className="text-xl font-bold uppercase text-ink-deep">{tech}</h3>
                <div className="mt-4 h-1 w-full bg-gradient-to-r from-ink-deep to-zinc-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WORK HISTORY (MINIMALIST LIST) */}
      <section className="w-full max-w-5xl px-6 py-24">
        <h2 className="mb-16 text-center text-3xl font-black uppercase tracking-[0.2em] text-ink-deep">Selected_Logs</h2>
        <div className="space-y-4">
          {[
            { id: '01', title: 'E-Commerce Engine', tag: 'Fullstack' },
            { id: '02', title: 'Neural Dashboard', tag: 'Frontend' },
            { id: '03', title: 'Protocol Alpha', tag: 'Web3' }
          ].map((work) => (
            <div key={work.id} className="group flex items-center justify-between border-b-2 border-zinc-200 py-8 hover:border-black transition-colors cursor-pointer">
              <div className="flex items-center gap-8">
                <span className="text-sm font-bold text-zinc-400 group-hover:text-ink-deep">{work.id}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-ink-mid group-hover:text-ink-deep">
                  {work.title}
                </h3>
              </div>
              <span className="hidden sm:block text-xs font-black uppercase bg-zinc-100 px-3 py-1 group-hover:bg-ink-deep group-hover:text-white transition-colors">
                {work.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full py-10 border-t-2 border-zinc-100 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400">
          Built with precision / 2026
        </span>
      </footer>
    </div>
  );
}