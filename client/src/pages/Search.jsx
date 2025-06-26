import React, { useEffect, useState } from "react";

const Search = () => {
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/vehicles");
        const data = await res.json();
        setVehicles(data);
      } catch (err) {
        console.error("Error fetching vehicles", err);
      }
    };
    fetchVehicles();
  }, []);

  const filtered = vehicles.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Search Vehicles
      </h2>

      <input
        type="text"
        placeholder="Search by title (e.g., BMW, Tesla)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          display: "block",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filtered.length === 0 ? (
          <p>No vehicles found for "{query}"</p>
        ) : (
          filtered.map((car) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
