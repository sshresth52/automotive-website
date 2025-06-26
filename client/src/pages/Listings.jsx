import React, { useEffect, useState } from "react";

const Listings = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/vehicles");
        const data = await res.json();
        setVehicles(data);
      } catch (err) {
        console.error("Failed to fetch vehicles", err);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Vehicle Listings
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {vehicles.map((car) => (
          <div
            key={car._id}
            style={{
              width: "300px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src={car.image}
              alt={car.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3>{car.title}</h3>
              <p>
                {car.fuel} · {car.transmission}
              </p>
              <p style={{ fontWeight: "bold" }}>{car.price}</p>
              <a
                href={`/vehicle/${car._id}`}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
