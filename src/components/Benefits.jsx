
import { ShieldCheck, Truck, Zap } from "lucide-react";

function Benefits() {
  return (
    <section
      id="benefits"
      className="border-y border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div className="flex gap-4">
          <Truck className="shrink-0 text-[var(--accent)]" size={28} />
          <div>
            <h3 className="font-bold">Delivery-ready concept</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              A storefront designed around a smooth shopping experience.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <ShieldCheck className="shrink-0 text-[var(--accent)]" size={28} />
          <div>
            <h3 className="font-bold">Built with care</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Clear product information and intuitive navigation.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Zap className="shrink-0 text-[var(--accent)]" size={28} />
          <div>
            <h3 className="font-bold">Performance-focused</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              A responsive interface for desktop, tablet and mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
