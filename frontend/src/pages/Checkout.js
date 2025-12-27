import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [focus, setFocus] = useState({
    name: false,
    address: false,
    phone: false,
  });

  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverBack, setHoverBack] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      alert("Please fill in all fields.");
      return;
    }

    // Clear the cart
    dispatch({ type: "CLEAR" });

    // Navigate to Thank You page
    navigate("/thank-you");
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <button
            onClick={handleBackToCart}
            onMouseEnter={() => setHoverBack(true)}
            onMouseLeave={() => setHoverBack(false)}
            style={{
              ...styles.backBtn,
              backgroundColor: hoverBack ? "#555" : "#777",
            }}
          >
            ← Back to Cart
          </button>

          <div style={styles.items}>
            {cart.map((item) => (
              <div key={item.id} style={styles.item}>
                <span>{item.name} (x{item.quantity || 1})</span>
                <span>${item.price * (item.quantity || 1)}</span>
              </div>
            ))}
          </div>

          <h3 style={styles.total}>Total: ${totalPrice}</h3>

          <form style={styles.form} onSubmit={handleConfirmOrder}>
            {["name", "address", "phone"].map((field) => (
              <label key={field} style={styles.label}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
                <input
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  onFocus={() => setFocus({ ...focus, [field]: true })}
                  onBlur={() => setFocus({ ...focus, [field]: false })}
                  placeholder={`Enter your ${field}`}
                  required
                  style={{
                    ...styles.input,
                    borderColor: focus[field] ? "#28a745" : "#ccc",
                    boxShadow: focus[field]
                      ? "0 0 5px rgba(40, 167, 69, 0.5)"
                      : "none",
                  }}
                />
              </label>
            ))}

            <button
              type="submit"
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              style={{
                ...styles.confirmBtn,
                backgroundColor: hoverBtn ? "#218838" : "#28a745",
              }}
            >
              Confirm Order
            </button>
          </form>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  backBtn: {
    padding: "8px 15px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
    fontWeight: "bold",
    transition: "all 0.2s ease",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  total: {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s ease",
  },
  confirmBtn: {
    padding: "12px 20px",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.2s ease",
  },
};

export default Checkout;
