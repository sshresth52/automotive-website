const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  title: String,
  price: String,//Number
  mileage: String,
  fuel: String,
  transmission: String,
  image: String,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
