const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  mileage: { type: String, required: true },
  fuel: { type: String, required: true },
  transmission: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
