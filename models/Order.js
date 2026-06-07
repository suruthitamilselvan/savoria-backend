const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, default: "guest" },
  items: [
    {
      name: { type: String },
      price: { type: Number },
      qty: { type: Number },
      emoji: { type: String }
    }
  ],
  total: { type: Number, required: true },
  status: { type: String, default: "received" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);