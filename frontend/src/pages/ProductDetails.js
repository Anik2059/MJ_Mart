import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastProvider";
import ProductCard from "../components/ProductCard";

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { addToast } = useToast();
  const [isAddHovered, setIsAddHovered] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Update product when id changes
  const [product, setProduct] = useState(
    products.find((p) => p.id === Number(id))
  );

  useEffect(() => {
    const newProduct = products.find((p) => p.id === Number(id));
    setProduct(newProduct);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  }, [id, products]);

  if (!product) return <h2>Product not found</h2>;

  // Get related products (exclude current product, max 4)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // Add product to cart with toast
  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: product });
    addToast(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            ...styles.image,
            transform: isImageHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isImageHovered
              ? "0 8px 16px rgba(0,0,0,0.2)"
              : "0 2px 6px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        />

        <div style={styles.info}>
          <h2>{product.name}</h2>
          <h3>Price: ${product.price}</h3>
          <p>{product.description || "No description available"}</p>

          <div style={styles.buttons}>
            <button
              style={{
                ...styles.button,
                backgroundColor: isAddHovered ? "#1e40af" : "#2563eb",
              }}
              onClick={handleAddToCart}
              onMouseEnter={() => setIsAddHovered(true)}
              onMouseLeave={() => setIsAddHovered(false)}
            >
              Add to Cart
            </button>

            <button
              style={{
                ...styles.button,
                backgroundColor: isBackHovered ? "#555" : "#888",
              }}
              onClick={() => navigate("/")}
              onMouseEnter={() => setIsBackHovered(true)}
              onMouseLeave={() => setIsBackHovered(false)}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div style={styles.relatedSection}>
          <h3>Related Products</h3>
          <div style={styles.relatedProducts}>
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  info: {
    flex: "1",
    minWidth: "250px",
    maxWidth: "500px",
    textAlign: "left",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 20px",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.2s",
  },
  relatedSection: {
    marginTop: "40px",
  },
  relatedProducts: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ProductDetails;
