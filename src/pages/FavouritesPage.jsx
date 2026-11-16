import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function FavouritesPage({
  favourites,
  formatPrice,
  onAddToCart,
  onToggleFavourite,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
          Your personal collection
        </p>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Your Favourites
        </h1>

        <p className="mt-3 text-gray-400">
          Keep the gear you're interested in all in one place.
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center">
          <Heart
            size={40}
            className="mx-auto mb-4 text-gray-500"
          />

          <h2 className="text-xl font-semibold text-white">
            No favourites yet
          </h2>

          <p className="mt-2 text-gray-400">
            Browse the catalogue and tap the heart on products you like.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Explore products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favourites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              formatPrice={formatPrice}
              onAddToCart={onAddToCart}
              isFavourite={true}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FavouritesPage;