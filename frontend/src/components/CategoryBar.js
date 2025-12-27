import React from "react";

function CategoryBar() {
  const categories = [
    "Clothes",
    "Toys",
    "Daily Goods",
    "Electronics",
    "Accessories",
  ];

  return (
    <div style={styles.container}>
      {categories.map((cat, index) => (
        <div key={index} style={styles.category}>
          {cat}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  category: {
    padding: "10px 20px",
    backgroundColor: "#e5e7eb",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default CategoryBar;