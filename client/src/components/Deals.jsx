import React from "react";

// vehicles list - just hardcoding for now instead of fetching
const vehicles = [
  {
    title: "Mercedes – 2021",
    price: "$22,000",
    mileage: "2500 Miles",
    fuel: "Diesel",
    transmission: "Manual",
    image: "/cars/merc.jpg",
  },
  {
    title: "BMW – 2023",
    price: "$95,000",
    mileage: "50 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/cars/bmw.jpg",
  },
  {
    title: "Audi A6 3.5 – New",
    price: "$58,000",
    mileage: "100 Miles",
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/cars/audi.jpg",
  },
];

const Deals = () => {
  return (
    <section style={{ padding: "50px 20px", backgroundColor: "#fff" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Best Deals
        </h2>

        {/* Listing grid - 3 cars in flex wrap */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap", // imp: makes it wrap when screen gets small
          }}
        >
          {vehicles.map((car, index) => (
            <div
              key={index}
              style={{
                width: "300px", // fixed width, works well
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left", // left-aligning text inside card
              }}
            >
              <img
                src={car.image}
                alt={car.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover", // cover gives nice fill effect
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {car.title}
                </h3>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "5px",
                  }}
                >
                  {car.mileage} · {car.fuel} · {car.transmission}
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    color: "#0070f3",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {car.price}
                </div>
                {/* call to action - view more btn */}
                <button
                  style={{
                    fontSize: "14px",
                    color: "#0070f3",
                    background: "none",
                    border: "none",
                    padding: "0",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
