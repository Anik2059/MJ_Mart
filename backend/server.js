const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Serve images folder
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.use("/api/products", require("./routes/products"));

// 🔴 CHANGE 1: Use process.env.PORT for Render
const PORT = process.env.PORT || 5000; 

// 🔴 CHANGE 2: Bind to 0.0.0.0 (Required by Render)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server running on port ${PORT}`);
});