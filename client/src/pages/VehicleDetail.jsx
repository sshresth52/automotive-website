import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/vehicles/${id}`);
        const data = await res.json();
        setVehicle(data);
      } catch (err) {
        console.error("Failed to fetch vehicle", err);
      }
    };
    fetchVehicle();
  }, [id]);

  if (!vehicle) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>{vehicle.title}</h2>
      <img
        src={vehicle.image}
        alt={vehicle.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <p>
        <strong>Price:</strong> {vehicle.price}
      </p>
      <p>
        <strong>Fuel:</strong> {vehicle.fuel}
      </p>
      <p>
        <strong>Transmission:</strong> {vehicle.transmission}
      </p>
      <p>
        <strong>Mileage:</strong> {vehicle.mileage}
      </p>
    </div>
  );
};

export default VehicleDetail;
