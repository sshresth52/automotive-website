import React from "react";

// hero banner section for homepage (find cars / rent etc)
const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "650px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundImage: "url('/car-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay to improve text visibility (dont remove) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      ></div>

      {/* actual content on top */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "800px",
          padding: "0 20px",
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Find cars for sale and for rent near you
        </p>
        <h1
          style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Find Your Perfect Car
        </h1>

        {/* Filters for car type - might need to fetch dynamically later */}
        <div style={{ marginBottom: "20px" }}>
          {["All", "New", "Used"].map((label) => (
            <button
              key={label}
              style={{
                margin: "0 5px",
                padding: "8px 16px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 🔍 Search Filters (non-functional for now lol) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <select style={{ padding: "10px", borderRadius: "6px" }}>
            <option>Any Makes</option>
          </select>
          <select style={{ padding: "10px", borderRadius: "6px" }}>
            <option>Any Models</option>
          </select>
          <select style={{ padding: "10px", borderRadius: "6px" }}>
            <option>All Prices</option>
          </select>
          <button
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Search Cars
          </button>
        </div>

        {/* Categories - just placeholders atm */}
        <p style={{ fontSize: "14px", marginBottom: "8px" }}>
          Or Browse Featured Model
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {["SUV", "Sedan", "Hatchback", "Coupe", "Hybrid"].map((type) => (
            <span
              key={type}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "6px 12px",
                borderRadius: "999px",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
