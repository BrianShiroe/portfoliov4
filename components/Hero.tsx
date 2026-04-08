export function Hero() {
  return (
    <section className="flex min-h-[85vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center lg:items-start lg:text-left">
      {/* VERSION TAG */}
      <div className="mb-6 inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] bg-white text-ink-deep">
        Version 2026.04 // { "Dubai_UAE" }
      </div>

      {/* NAME & ALIAS */}
      <div className="mb-2">
        <span className="text-sm font-black uppercase tracking-widest text-zinc-400">
          User: Brian Haw
        </span>
      </div>
      
      <h1 className="text-gradient-ink text-6xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl leading-[0.85]">
        Brian <br /> 
        <span className="pl-0 lg:pl-4 text-ink-deep">Shiroe</span>
      </h1>

      {/* POSITION & TAGLINE */}
      <div className="mt-8 flex flex-col gap-2">
        <h2 className="text-2xl font-black uppercase tracking-tight text-ink-deep">
          [ Position: Web Developer ]
        </h2>
        <p className="max-w-xl text-lg font-medium leading-relaxed text-ink-soft">
          Building high-fidelity interfaces with a focus on 
          <span className="text-ink-deep underline decoration-4 ml-1 italic">
            brutalist simplicity
          </span> and modern performance in the heart of Dubai.
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-12 flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
        <button className="retro-border-thick bg-ink-deep px-10 py-4 text-white font-bold uppercase hover:bg-ink-mid transition-all active:translate-y-1">
          Enter System
        </button>
        <button className="retro-border-thick bg-white px-10 py-4 text-ink-deep font-bold uppercase hover:bg-zinc-50 transition-all active:translate-y-1">
          Source Code
        </button>
      </div>

      {/* DECORATIVE FOOTER SCANLINE EFFECT FOR HERO */}
      <div className="mt-16 hidden lg:block w-full border-t-2 border-dashed border-zinc-200 pt-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
          Active_Session: 25.0674° N, 55.2708° E // Local_Time: UAE_GMT+4
        </p>
      </div>
    </section>
  );
}