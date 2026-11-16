
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

function CartPage({
  cart,
  formatPrice,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <div className="mb-6 flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <ShoppingBag size={36} className="text-[var()]" />
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          Your cart
        </p>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Nothing here yet.
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
          Your next gaming upgrade is waiting. Explore our gear
          and add something you love.
        </p>

        <button
          type="button"
          onClick={onContinueShopping}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 font-bold text-black transition hover:bg-[var(--state-response)]"
        >
          <ArrowLeft size={18} />
          Continue shopping
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <button
        type="button"
        onClick={onContinueShopping}
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-[var(--accent)]"
      >
        <ArrowLeft size={17} />
        Continue shopping
      </button>

      <div className="mb-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          Your selection
        </p>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Shopping Cart
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-36 w-full rounded-xl bg-white/[0.04] object-cover sm:h-28 sm:w-32"
              />

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {item.category}
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {formatPrice(item.price)} each
                </p>

                <p className="mt-2 font-bold">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 px-2 py-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    aria-label={`Decrease quantity of ${item.name}`}
                    className="rounded-md p-1 text-zinc-300 transition hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-5 text-center text-sm font-bold">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity + 1)
                    }
                    aria-label={`Increase quantity of ${item.name}`}
                    className="rounded-md p-1 text-zinc-300 transition hover:text-[var(--accent)]"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-red-400"
                >
                  <Trash2 size={15} />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-28">
          <h2 className="text-xl font-black">Order Summary</h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4 text-zinc-400">
              <span>Items ({totalItems})</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="flex justify-between gap-4 text-zinc-400">
              <span>Delivery</span>
              <span>Calculated later</span>
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold">Subtotal</span>
                <span className="text-xl font-black text-[var(--accent)]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Delivery costs are not included in this estimate.
              </p>
            </div>
          </div>

          <button
            type="button"
            disabled
            className="mt-6 w-full rounded-xl bg-[var(--accent)] px-5 py-3 font-bold text-black"
          >
            Checkout — coming soon
          </button>

          <p className="mt-3 text-center text-xs text-zinc-500">
            Demo storefront · No payment will be processed
          </p>
        </aside>
      </div>
    </section>
  );
}

export default CartPage;
