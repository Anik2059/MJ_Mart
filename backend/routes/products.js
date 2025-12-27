const express = require("express");
const router = express.Router();

// Temporary product data (no database yet)
const products = [
  {
    id: 1,
    name: "Men T-Shirt",
    price: 499,
    image: "http://localhost:5000/images/products/tshirt-men.jpg"
  },
  {
    id: 2,
    name: "Women Dress",
    price: 899,
    image: "http://localhost:5000/images/products/dress-women.jpg"
  },
  {
    id: 3,
    name: "Kids Toy",
    price: 299,
    image: "http://localhost:5000/images/products/kids-toy.jpg"
  },
  {
    id: 4,
    name: "Men T-Shirt",
    price: 500,
    image: "http://localhost:5000/images/products/Drop_tshirt-men.jpg"
  },
  {
    id: 5,
    name: "Toy Car",
    price: 300,
    image: "http://localhost:5000/images/products/toy-car.jpg"
  },
  {
    id: 6,
    name: "Daily Grocery Pack",
    price: 1200,
    image: "http://localhost:5000/images/products/grocery-pack.png"
  },
    {
    id: 7,
    name: "Men-Watch",
    price: 750,
    image: "http://localhost:5000/images/products/watch.jpg"
  },
    {
    id: 8,
    name: "Men-Wallet",
    price: 110,
    image: "http://localhost:5000/images/products/wallet.jpg"
  },
    {
    id: 9,
    name: "Ladies-Handbag",
    price: 300,
    image: "http://localhost:5000/images/products/Women_Hand_Bag.jpg"
  },
    {
    id: 10,
    name: "University-Bag",
    price: 100,
    image: "http://localhost:5000/images/products/university_bag.jpg"
  }
];


// API to send products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;



