const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Create booking
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: "🍽️ Savoria — Booking Confirmed!",
      html: `
        <h2>Thank you, ${booking.name}!</h2>
        <p>Your table has been reserved at <b>Savoria</b>.</p>
        <ul>
          <li>📅 Date: ${booking.date}</li>
          <li>🕐 Time: ${booking.time}</li>
          <li>👥 Guests: ${booking.guests}</li>
          <li>🪑 Table: ${booking.table}</li>
        </ul>
        <p>We look forward to welcoming you!</p>
        <p><i>— The Savoria Team</i></p>
      `
    });

    res.json({ message: "Booking confirmed!", booking });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;