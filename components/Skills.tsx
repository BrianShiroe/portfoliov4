export function Skills() {
  const techStack = ['TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL'];

  return (
    <section className="w-full border-t-4 border-black bg-zinc-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-ink-deep">Core_Modules</h2>
          <p className="text-sm font-bold text-ink-soft uppercase tracking-widest">[ 04 Loaded ]</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
            <div key={tech} className="retro-border-thick retro-card-hover bg-white p-6">
              <p className="text-xs font-bold text-zinc-400 mb-2">TYPE: TOOL_SET</p>
              <h3 className="text-xl font-bold uppercase text-ink-deep">{tech}</h3>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-ink-deep to-zinc-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}