import React from "react";

function HeroBanner() {
  return (
    <div style={styles.banner}>
      <h1 style={styles.title}>Welcome to MJ Mart</h1>
      <p style={styles.subtitle}>
        Everything you need — clothes, toys & daily goods
      </p>
    </div>
  );
}

const styles = {
  banner: {
    background: "linear-gradient(to right, #2563eb, #1e40af)",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
  },
};

export default HeroBanner;
