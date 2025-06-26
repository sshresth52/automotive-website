import React, { useState, useEffect } from "react";
import axios from "axios";

const AddVehicle = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    mileage: "",
    fuel: "Petrol",
    transmission: "Automatic",
    image: "",
  });

  // 🔐 Check for token (Admin protection)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized. Please login first.");
      window.location.href = "/login";
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/vehicles", form);
      alert("Vehicle added successfully!");
      setForm({
        title: "",
        price: "",
        mileage: "",
        fuel: "Petrol",
        transmission: "Automatic",
        image: "",
      });
    } catch (err) {
      console.error("Error adding vehicle:", err);
      alert(err.response?.data?.message || "Failed to add vehicle");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Add New Vehicle</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div style={{ marginBottom: "15px" }}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            required
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. BMW X5 2023"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Price */}
        <div style={{ marginBottom: "15px" }}>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            required
            value={form.price}
            onChange={handleChange}
            placeholder="e.g. 50000"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Mileage */}
        <div style={{ marginBottom: "15px" }}>
          <label>Mileage:</label>
          <input
            type="text"
            name="mileage"
            required
            value={form.mileage}
            onChange={handleChange}
            placeholder="e.g. 5000"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Fuel Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label>Fuel:</label>
          <select
            name="fuel"
            value={form.fuel}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Transmission Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label>Transmission:</label>
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          >
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>

        {/* Image */}
        <div style={{ marginBottom: "15px" }}>
          <label>Image URL (Paste Link):</label>
          <input
            type="text"
            name="image"
            required
            value={form.image}
            onChange={handleChange}
            placeholder="e.g. https://source.unsplash.com/400x300/?car"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
