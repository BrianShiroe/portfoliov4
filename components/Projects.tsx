export function Projects() {
  const logs = [
    { id: '01', title: 'E-Commerce Engine', tag: 'Fullstack' },
    { id: '02', title: 'Neural Dashboard', tag: 'Frontend' },
    { id: '03', title: 'Protocol Alpha', tag: 'Web3' }
  ];

  return (
    <section className="w-full max-w-5xl px-6 py-24 mx-auto">
      <h2 className="mb-16 text-center text-3xl font-black uppercase tracking-[0.2em] text-ink-deep">Selected_Logs</h2>
      <div className="space-y-4">
        {logs.map((work) => (
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
  );
}