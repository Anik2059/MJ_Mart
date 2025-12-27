import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Thank You!</h2>
      <p>Your order has been successfully placed.</p>
      <p>We will contact you soon with the delivery details.</p>
      <button style={styles.button} onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.2s ease",
  },
};

export default ThankYou;
