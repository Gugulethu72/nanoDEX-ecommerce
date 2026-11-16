
import {
  UserRound,
  Package,
  Heart,
  ShoppingCart,
  MapPin,
  Mail,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function AccountPage({
  cartCount,
  favouritesCount,
  onContinueShopping,
  onViewFavourites,
  onViewCart,
}) {
  const demoUser = {
    name: "Gugulethu Nkabinde",
    email: "gugulethunkabinde48@gmail.com",
    memberSince: "January 2026",
    membership: "Level 1 Gamer",
  };

  const demoOrders = [
    {
      id: "GF-1042",
      date: "12 October 2026",
      item: "Phantom Gaming Keyboard",
      total: "R 1,499.00",
      status: "Delivered",
    },
    {
      id: "GF-1038",
      date: "28 September 2026",
      item: "Velocity Gaming Headset",
      total: "R 899.00",
      status: "In transit",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Player headquarters
          </p>
          <h1 className="text-3xl font-black sm:text-4xl">
            My Account
          </h1>
          <p className="mt-2 text-zinc-400">
            Manage your demo profile, orders and gaming gear.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <UserRound size={34} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">
                  {demoUser.name}
                </h2>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Demo account
                </span>
              </div>

              <p className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                <Mail size={16} />
                {demoUser.email}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Member since {demoUser.memberSince}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Gamer status
              </p>
              <p className="mt-1 font-bold text-cyan-300">
                {demoUser.membership}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <button
            onClick={onViewCart}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-5 text-left transition hover:border-cyan-400/40"
          >
            <ShoppingCart className="mb-4 text-cyan-400" size={26} />
            <p className="text-sm text-zinc-400">Items in cart</p>
            <p className="mt-1 text-3xl font-black">{cartCount}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-cyan-300">
              View cart <ArrowRight size={16} />
            </p>
          </button>

          <button
            onClick={onViewFavourites}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-5 text-left transition hover:border-pink-400/40"
          >
            <Heart className="mb-4 text-pink-400" size={26} />
            <p className="text-sm text-zinc-400">Saved favourites</p>
            <p className="mt-1 text-3xl font-black">{favouritesCount}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-pink-300">
              View favourites <ArrowRight size={16} />
            </p>
          </button>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
            <Package className="mb-4 text-purple-400" size={26} />
            <p className="text-sm text-zinc-400">Demo orders</p>
            <p className="mt-1 text-3xl font-black">
              {demoOrders.length}
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Sample order history
            </p>
          </div>
        </div>

        <section className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <Package className="text-cyan-400" size={23} />
            <h2 className="text-xl font-bold sm:text-2xl">
              Recent orders
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            {demoOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-4 border-b border-white/10 p-5 last:border-b-0 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <p className="font-bold">{order.item}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Order {order.id} · {order.date}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">{order.total}</p>
                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-zinc-600">
            These orders are illustrative sample data and are not real purchases.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="text-cyan-400" size={23} />
            <h2 className="text-xl font-bold">Account details</h2>
          </div>

          <p className="text-sm text-zinc-400">
            This portfolio demo does not store real personal or delivery
            information.
          </p>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 p-4">
            <ShieldCheck className="mt-0.5 shrink-0 text-emerald-400" size={20} />
            <div>
              <p className="font-semibold">Frontend demo mode</p>
              <p className="mt-1 text-sm text-zinc-500">
                Profile details and order history are sample content.
                There is no real account login or checkout.
              </p>
            </div>
          </div>
        </section>

        <button
          onClick={onContinueShopping}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
        >
          Continue shopping <ArrowRight size={18} />
        </button>
      </div>
    </main>
  );
}
