
import { useState } from "react";
import { Check, Heart, ShoppingCart } from "lucide-react";

function ProductCard({
  product,
  formatPrice,
  onAddToCart,
  isFavourite,
  onToggleFavourite,
}) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    onAddToCart(product);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[var(--state-response)] hover:bg-white/[0.05]">
      <div className="relative overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.tag && (
          <span className="absolute left-3 top-3 rounded-md border border-lime-400/20 bg-black/80 px-2.5 py-1.5 text-[10px] font-bold tracking-wider text-[var(--state-response)] backdrop-blur">
            {product.tag}
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleFavourite(product)}
          aria-label={
            isFavourite
              ? `Remove ${product.name} from favourites`
              : `Add ${product.name} to favourites`
          }
          aria-pressed={isFavourite}
          className={`absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border backdrop-blur transition ${
            isFavourite
              ? "border-[var(--accent)] bg-[var(--accent)] text-black"
              : "border-white/15 bg-black/70 text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
        >
          <Heart
            size={19}
            fill={isFavourite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
          {product.category}
        </p>

        <h3 className="mt-2 text-base font-bold leading-snug text-white">
          {product.name}
        </h3>

        <p className="mt-2 min-h-10 text-sm leading-5 text-zinc-400">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-black tracking-tight text-white">
            {formatPrice(product.price)}
          </p>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition ${
              added
                ? "bg-[var(--accent)] text-black"
                : "border border-white/10 bg-white/[0.05] text-white hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
            }`}
          >
            {added ? <Check size={19} /> : <ShoppingCart size={19} />}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
