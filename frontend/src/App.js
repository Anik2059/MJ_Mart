import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import HeroBanner from "./components/HeroBanner";
import CategoryBar from "./components/CategoryBar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import axios from "axios";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastProvider";

// Home Page Component
function HomePage({ products }) {
  return (
    <div style={{ padding: "20px" }}>
      <HeroBanner />
      <CategoryBar />

      <div style={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  // Use the Vercel Environment Variable if it exists, otherwise fallback to localhost
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products`)
      .then((response) => {
        console.log("PRODUCTS FROM BACKEND:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products", error);
      });
  }, [API_BASE_URL]);

  return (
    <ToastProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage products={products} />} />

            {/* Product Details Page */}
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} />}
            />

            {/* Cart Page */}
            <Route path="/cart" element={<Cart />} />

            {/* Checkout Page */}
            <Route path="/checkout" element={<Checkout />} />

            {/* Thank You Page */}
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ToastProvider>
  );
}

const styles = {
  products: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",           // Cards wrap to next line on smaller screens
    justifyContent: "center",     // Center cards horizontally
  },
};

export default App;