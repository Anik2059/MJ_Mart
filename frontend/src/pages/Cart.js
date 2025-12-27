import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // for navigation to checkout page

function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Increase quantity
  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  // Remove item
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // Clear cart
  const handleClearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  // Proceed to checkout
  const handleCheckout = () => {
    // Navigate to checkout page (replace '/checkout' with your route)
    navigate("/checkout");
  };

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div style={styles.info}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div style={styles.quantity}>
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                  <p>Total: ${item.price * (item.quantity || 1)}</p>
                  <button
                    style={styles.removeBtn}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 style={styles.total}>Grand Total: ${totalPrice}</h3>

          <div style={styles.actions}>
            <button style={styles.clearBtn} onClick={handleClearCart}>
              Clear Cart
            </button>
            <button style={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cartItem: {
    display: "flex",
    gap: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    alignItems: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  info: {
    flex: 1,
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "5px 0",
  },
  removeBtn: {
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  total: {
    marginTop: "20px",
    textAlign: "right",
    fontSize: "18px",
    fontWeight: "bold",
  },
  actions: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },
  clearBtn: {
    padding: "8px 15px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  checkoutBtn: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Cart;
