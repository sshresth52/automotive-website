import React, { useState } from "react";
import axios from "axios";

// basic login form comp -- not fancy but works lol
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // handle any input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // called when user hits submit btn
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      alert(`Login Successful! Welcome ${res.data.user.name}`);

      // save token in LS maybe later since  I am building a quick MVP, LS for speed
       localStorage.setItem("token", res.data.token); // dont need it now but good idea i.e token get stored in localstorage and user is redirected to /profile , protected pages check the token and then will have to add a logout button

      // redirect to profile page or wherever
      window.location.href = "/profile"; // no actual profile page yet
    } catch (err) {
      console.log("Login failed");
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
