// ya basic footer stuff here
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#111", color: "#eee", padding: "50px 20px" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "30px",
        }}
      >
        {/* Company Info */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>Company</h3>
          <p style={{ fontSize: "14px" }}>
            We help u find your dream car 🚗. Browse, filter, drool & drive.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/" style={{ color: "#eee", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/login"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Brands */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Our Brands
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>BMW</li>
            <li>Audi</li>
            <li>Honda</li>
            <li>Mercedes</li>
          </ul>
        </div>

        {/* Vehicle Types */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Vehicle Types
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>SUV</li>
            <li>Sedan</li>
            <li>Hybrid</li>
            <li>Coupe</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Social Media
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#eee", textDecoration: "none" }}
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom copyright */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "13px",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} AutoDrive Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
