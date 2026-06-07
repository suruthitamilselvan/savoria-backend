const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create order
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json({ message: "Order placed!", order });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;