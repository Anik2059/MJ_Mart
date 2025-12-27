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

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Backend server running on port 5000");
});
