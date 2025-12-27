import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div>
          <h3>MJ Mart</h3>
          <p>Your trusted online shopping platform</p>
          <p>Dhaka, Bangladesh</p>
          <p>📞 +880-XXXXXXXXX</p>
          <p>✉ support@mjmart.com</p>
        </div>

        <div>
          <h4>About</h4>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4>Help</h4>
          <p>Payment</p>
          <p>Shipping</p>
          <p>Return & Replacement</p>
        </div>

        <div>
          <h4>Download App</h4>
          <button style={styles.appBtn}>Google Play</button>
          <button style={styles.appBtn}>App Store</button>
        </div>
      </div>

      <div style={styles.bottom}>
        © 2025 MJ Mart | All Rights Reserved
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f2a44",
    color: "white",
    marginTop: "40px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
    flexWrap: "wrap",
    gap: "20px",
  },
  bottom: {
    textAlign: "center",
    padding: "15px",
    borderTop: "1px solid #1e3a5f",
  },
  appBtn: {
    display: "block",
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Footer;
