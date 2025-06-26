const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Get all vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: "Error fetching vehicles" });
  }
});

// Get vehicle by ID
router.get("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: "Error fetching vehicle" });
  }
});

// Add a new vehicle
router.post("/", async (req, res) => {
  try {
    const { title, price, mileage, fuel, transmission, image } = req.body;

    if (!title || !price || !mileage || !fuel || !transmission || !image) {
      
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVehicle = new Vehicle({
      title,
      price,
      mileage,
      fuel,
      transmission,
      image,
    });

    await newVehicle.save();

    res.status(201).json({ message: "Vehicle added successfully", vehicle: newVehicle });
  } catch (err) {
    console.error("Vehicle creation error:", err);
    res.status(500).json({ message: "Error adding vehicle" });
  }
});

router.get("/test", (req, res) => {
  res.json({ message: "Test route works fine" });
});


module.exports = router;
