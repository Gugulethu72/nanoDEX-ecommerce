
import ProductCard from "../components/ProductCard";

function ShopPage({
  products,
  categories,
  formatPrice,
  onAddToCart,
  favourites,
  onToggleFavourite,
  activeCategory,
  onCategoryChange,
  notice,
}) {
  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            THE GAMEFORGE COLLECTION
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Gear up. Game on.
          </h2>

          <p className="mt-3 text-zinc-400">
            Find the right gear for your next upgrade.
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          {products.length}{" "}
          {products.length === 1 ? "product" : "products"} found
        </p>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
              activeCategory === category
                ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-[var(--state-response)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {notice && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-sm text-lime-300"
        >
          {notice}
        </p>
      )}

      {products.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              formatPrice={formatPrice}
              onAddToCart={onAddToCart}
              isFavourite={favourites.some(
                (item) => item.id === product.id
              )}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-white/10 px-5 py-16 text-center">
          <h3 className="text-lg font-bold">No products found</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Try another search term or category.
          </p>
        </div>
      )}
    </section>
  );
}

export default ShopPage;
