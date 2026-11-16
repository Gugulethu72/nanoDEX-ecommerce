import { useMemo, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

import { products, categories, formatPrice } from "./data/products";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
import ShopPage from "./pages/ShopPage";

import useLocalStorage from "./hooks/useLocalStorage";

import AccountPage from "./pages/AccountPage";




function App() {
  
const navigate = useNavigate();
const location = useLocation();

const activeView =
  location.pathname === "/favourites"
    ? "favourites"
    : location.pathname === "/cart"
      ? "cart"
      : "shop";

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [cart, setCart] = useLocalStorage("gameforge-cart", []);
  const [favourites, setFavourites] = useLocalStorage(
  "gameforge-favourites",[]);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const searchText =
        `${product.name} ${product.category} ${product.description}`.toLowerCase();

      const matchesSearch = searchText.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const visibleProducts =
    activeView === "favourites"
      ? filteredProducts.filter((product) =>
          favourites.some((item) => item.id === product.id),
        )
      : filteredProducts;

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  function handleAddToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setNotice(`${product.name} added to cart.`);
  }

  function toggleFavourite(product) {
    const isFavourite = favourites.some(
      (item) => item.id === product.id,
    );

    setFavourites((currentFavourites) =>
      isFavourite
        ? currentFavourites.filter((item) => item.id !== product.id)
        : [...currentFavourites, product],
    );

    setNotice(
      isFavourite
        ? `${product.name} removed from favourites.`
        : `${product.name} added to favourites.`,
    );
  }

  
    const handleViewChange = (view) => {
      setActiveCategory("All Products");
      setSearchTerm("");
      setNotice("");

      const paths = {
        shop: "/",
        favourites: "/favourites",
        cart: "/cart",
        account: "/account",
      };

      navigate(paths[view] ?? "/");
    };


  function handleUpdateQuantity(productId, quantity) {
    setCart((currentCart) =>
      currentCart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, quantity) }
        : item,
     ),
    );
  }

  function handleRemoveFromCart(productId) {
    setCart((currentCart) =>
    currentCart.filter((item) => item.id !== productId),
    );
  }

  return (
    <div
      id="top"
      className="min-h-screen bg-[#090b0a] text-white"
    >
      <NavBar
        cartCount={cartCount}
        favouritesCount={favourites.length}
        activeView={activeView}
        onViewChange={handleViewChange}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      
    <main>
      <Routes>
        <Route
         path="/"
         element={
          <>
          <Banner />

          <ShopPage
            products={filteredProducts}
            categories={categories}
            formatPrice={formatPrice}
            onAddToCart={handleAddToCart}
            favourites={favourites}
            onToggleFavourite={toggleFavourite}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            notice={notice}
          />

          <Benefits />
          </>
         }
        />

      <Route
        path="/favourites"
        element={
          <FavouritesPage
           favourites={favourites}
           formatPrice={formatPrice}
           onAddToCart={handleAddToCart}
           onToggleFavourite={toggleFavourite}
          />
         }
        />

        <Route
        path="/cart"
        element={
           <CartPage
            cart={cart}
            formatPrice={formatPrice}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onContinueShopping={() => handleViewChange("shop")}
            />
          }
         />

        <Route
          path="/account"
          element={
            <AccountPage
              cartCount={cartCount}
              favouritesCount={favourites.length}
              onContinueShopping={() => handleViewChange("shop")}
              onViewFavourites={() => handleViewChange("favourites")}
              onViewCart={() => handleViewChange("cart")}
            />
          }
        />
        </Routes>
      </main>


      <Footer />
    </div>
  );
}

export default App;
