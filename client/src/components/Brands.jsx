import React from "react";

// Brand data - maybe we could fetch this from an API later?
const brands = [
  { name: "Mercedes", image: "/brands/mercedes.png" },
  { name: "BMW", image: "/brands/bmw.png" },
  { name: "Audi", image: "/brands/audi.png" },
  { name: "Honda", image: "/brands/honda.png" },
  { name: "Ford", image: "/brands/ford.png" },
  { name: "Toyota", image: "/brands/toyota.png" },
];

const Brands = () => {
  return (
    <section style={{ padding: "50px 20px", backgroundColor: "#f3f4f6" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <h2
          style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Explore Brands
        </h2>

        {/* First row of cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {brands.slice(0, 3).map((brand, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                width: "250px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                style={{ width: "100%", height: "180px", objectFit: "contain" }}
              />
              <div style={{ padding: "10px", fontWeight: "bold" }}>
                {brand.name}
              </div>
            </div>
          ))}
        </div>

        {/* 2nd row - prob should be reused via component mapping but works for now */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {brands.slice(3).map((brand, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                width: "250px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                style={{ width: "100%", height: "180px", objectFit: "contain" }}
              />
              <div style={{ padding: "10px", fontWeight: "bold" }}>
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
