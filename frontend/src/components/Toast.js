import React from "react";

function Toast({ message }) {
  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
}

const styles = {
  toast: {
    backgroundColor: "#4ade80",
    color: "#064e3b",
    padding: "10px 15px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    fontWeight: "bold",
    minWidth: "200px",
  },
};

export default Toast;
