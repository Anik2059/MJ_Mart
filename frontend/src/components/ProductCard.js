import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastProvider"; // use global toast

function ProductCard({ product }) {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const { addToast } = useToast(); // get addToast function
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent card click
    dispatch({ type: "ADD", payload: product });
    addToast(`${product.name} added to cart!`); // show toast
  };

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered
          ? "0 8px 16px rgba(0,0,0,0.2)"
          : "0 2px 6px rgba(0,0,0,0.1)",
      }}
      onClick={handleNavigate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} style={styles.image} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button
        style={{
          ...styles.button,
          backgroundColor: isButtonHovered ? "#1e40af" : "#2563eb",
        }}
        onClick={handleAddToCart}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    flex: "1 1 200px",
    maxWidth: "220px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  button: {
    marginTop: "10px",
    padding: "8px",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.2s",
  },
};

export default ProductCard;
