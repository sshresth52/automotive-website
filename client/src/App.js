import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import React from "react";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Deals from "./components/Deals";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Brands />
              <Deals />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
