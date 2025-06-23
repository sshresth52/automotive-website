import React, { useState } from "react";

// contact us form - sends inquiries to backend
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    // handles form input change (name/email/msg)
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      // API hit to send inquiry details
      const res = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Your inquiry was submitted successfully!"); // yay
        setForm({ name: "", email: "", message: "" }); // reset
      } else {
        setStatus(data.message || "Something went wrong. Please try again."); // fallback msg
      }
    } catch (err) {
      console.error("Inquiry error 🥲:", err);
      setStatus("Server error. Please try later."); // if backend dead
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        {status && (
          <p className="mb-4 text-sm text-center text-blue-600">{status}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
