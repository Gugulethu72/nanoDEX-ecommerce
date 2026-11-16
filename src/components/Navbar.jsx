
import {
  Gamepad2,
  Heart,
  Search,
  ShoppingCart,User,
} from "lucide-react";

function NavBar({
  cartCount,
  favouritesCount,
  activeView,
  onViewChange,
  searchTerm,
  onSearchChange,
}) {


  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
           href="/"
           onClick={(event) => {
           event.preventDefault();
           onViewChange("shop");
          }}
          className="flex shrink-0 items-center gap-2"
          aria-label="GameForge home"
        >
          <div className="flex size-30 items-center justify-center   h-1 text-black">
            <img src="/public/nanoDEX v2-01.png" alt="" />
          </div>

          
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={() => onViewChange("shop")}
            className={`text-sm font-semibold transition hover:text-[var(--state-response)] ${
              activeView === "shop"
                ? "text-[var(--accent)]"
                : "text-zinc-300"
            }`}
          >
            Shop
          </button>

          <button
            type="button"
            onClick={() => onViewChange("favourites")}
            className={`flex items-center gap-2 text-sm font-semibold transition hover:text-[var(--state-response)] ${
              activeView === "favourites"
                ? "text-[var(--accent)]"
                : "text-zinc-300"
            }`}
          >
            <Heart size={16} />
            Favourites

            {favouritesCount > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-black text-black">
                {favouritesCount}
              </span>
            )}
          </button>
        </nav>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <label className="hidden min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:flex">
            <Search size={17} className="shrink-0 text-zinc-500" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search gear..."
              aria-label="Search products"
              className="w-24 min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 focus-visible:outline-none lg:w-36"
            />
          </label>

          <button
            type="button"
            onClick={() => onViewChange("cart")}
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 hover:bg-[var(--background)] transition hover:text-[var(--state-response)]"
          >
            <ShoppingCart size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-black text-black">
                {cartCount}
              </span>
            )}
          </button>

           <button
        onClick={() => onViewChange("account")}
        className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[var(--background)]  hover:text-[var(--state-response)]"
        >
         <User size={27} />
      </button>
        </div>
      </div>

      <div className="flex gap-5 border-t border-white/5 px-5 py-3 lg:hidden sm:px-8">
        <button
          type="button"
          onClick={() => onViewChange("shop")}
          className={`text-sm font-semibold ${
            activeView === "shop" ? "text-lime-400" : "text-zinc-400"
          }`}
        >
          Shop
        </button>

        <button
          type="button"
          onClick={() => onViewChange("favourites")}
          className={`flex items-center gap-1.5 text-sm font-semibold ${
            activeView === "favourites"
              ? "text-lime-400"
              : "text-zinc-400"
          }`}
        >
          <Heart size={15} />
          Favourites ({favouritesCount})
        </button>

           <button
        onClick={() => onViewChange("account")}
        className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-cyan-300"
        >
        <User size={15} />
      </button>
       
      </div>
    </header>
  );
}

export default NavBar;
