
import { ArrowRight, Zap } from "lucide-react";

function Banner() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_35%,rgba(132,204,22,0.17),transparent_48%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-lime-400/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[var(--accent)]">
            <Zap size={15} />
            BUILT FOR YOUR NEXT LEVEL
          </p>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            PLAY HARD.
            <span className="mt-2 block text-[var(--accent)]">
              UPGRADE EVERYTHING.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            Discover gaming gear, powerful components and setups
            designed to take your performance further.
          </p>

          <a
            href="#products"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[var(--accent)] px-6 py-4 font-bold text-[var(--black)]  transition hover:bg-[var(--state-response)]"
          >
            Explore the collection
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-full bg-[var(--accent)] blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=90"
            alt="Gaming setup with monitor and computer hardware"
            className="relative aspect-[5/4] w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
          />

          <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
            <p className="text-xs text-zinc-400">YOUR NEXT SETUP</p>
            <p className="mt-1 font-bold">Starts right here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
