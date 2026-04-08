import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-white pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <div className="retro-border-thick bg-white p-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-ink-deep mb-6">
            Ready to start the next level?
          </h2>
          <a href="mailto:hello@example.com" className="inline-block bg-ink-deep text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-ink-soft transition-all active:scale-95">
            Send_Message.exe
          </a>
        </div>
      </div>

      <div className="w-full border-t-4 border-black bg-ink-deep py-8 px-6 text-white">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-black uppercase tracking-tight">Your_Name_Archive</span>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-400">Github</a>
            <a href="#" className="hover:text-zinc-400">LinkedIn</a>
          </div>
          <div className="text-[10px] font-mono opacity-50">© 2026 // BUILD_V1.0.4</div>
        </div>
      </div>
    </footer>
  );
}