const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

// POST /api/inquiry - submit the contact form thingy
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // basic sanity check — pls fill the  form
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All the fields gotta be filled" });
  }

  try {
    const newInquiry = new Inquiry({ name, email, message });
    await newInquiry.save();

    // yay inquiry saved
    res
      .status(201)
      .json({
        message: "Your inquiry got submitted. We'll try to get back soon!",
      });
  } catch (err) {
    console.error("inquiry save error (ugh):", err);
    res.status(500).json({ message: "Something broke on the server side" });
  }
});

module.exports = router;
