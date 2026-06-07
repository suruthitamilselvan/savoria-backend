const express = require("express");
const router = express.Router();

const menu = {
  Starters: [
    { id: 1, name: "Truffle Arancini", price: 1200, cal: 320, veg: true, spicy: false, rating: 4.9 },
    { id: 2, name: "Crispy Calamari", price: 980, cal: 280, veg: false, spicy: true, rating: 4.7 },
    { id: 3, name: "Burrata Bruschetta", price: 1100, cal: 290, veg: true, spicy: false, rating: 4.8 },
    { id: 4, name: "Spiced Lamb Kofta", price: 1400, cal: 360, veg: false, spicy: true, rating: 4.6 },
  ],
  Mains: [
    { id: 5, name: "Wagyu Beef Tenderloin", price: 4800, cal: 680, veg: false, spicy: false, rating: 5.0 },
    { id: 6, name: "Lobster Thermidor", price: 4200, cal: 590, veg: false, spicy: false, rating: 4.9 },
    { id: 7, name: "Wild Mushroom Risotto", price: 2200, cal: 420, veg: true, spicy: false, rating: 4.7 },
    { id: 8, name: "Pan-Seared Duck Breast", price: 3200, cal: 510, veg: false, spicy: false, rating: 4.8 },
  ],
  Desserts: [
    { id: 9, name: "Valrhona Chocolate Fondant", price: 1200, cal: 480, veg: true, spicy: false, rating: 4.9 },
    { id: 10, name: "Tiramisu Classico", price: 950, cal: 390, veg: true, spicy: false, rating: 4.8 },
    { id: 11, name: "Mango Panna Cotta", price: 850, cal: 310, veg: true, spicy: false, rating: 4.6 },
  ],
  Drinks: [
    { id: 12, name: "Signature Savoria Sling", price: 1400, cal: 180, veg: true, spicy: false, rating: 4.8 },
    { id: 13, name: "Aged Negroni", price: 1600, cal: 210, veg: true, spicy: false, rating: 4.9 },
    { id: 14, name: "Virgin Sunset", price: 750, cal: 120, veg: true, spicy: false, rating: 4.5 },
  ]
};

// Get full menu
router.get("/", (req, res) => {
  res.json(menu);
});

// Get by category
router.get("/:category", (req, res) => {
  const cat = req.params.category;
  if (menu[cat]) {
    res.json(menu[cat]);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

module.exports = router;