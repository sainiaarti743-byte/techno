import React, { useState } from "react";

const BASE_URL = "https://technoschool.co.in/admin";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("✅ Message sent successfully! We'll get back to you soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("❌ Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="p-3"></div>

      {/* Hero Section */}
      <div
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0B4DA1 0%, #083a7a 100%)" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-0">
            We'd love to hear from you. Reach out for admissions, queries, or feedback.
          </p>
        </div>
      </div>

      {/* Info + Form Section */}
      <div className="container py-5">
        <div className="row g-5">

          {/* Left: Contact Info */}
          <div className="col-12 col-lg-5">
            <h3 className="fw-bold mb-4" style={{ color: "#0B4DA1" }}>Get In Touch</h3>

            <div className="d-flex gap-3 mb-4">
              <div className="fs-3">📍</div>
              <div>
                <h6 className="fw-bold mb-1">Address</h6>
                <p className="text-muted mb-0">Potliya Bypass Road, Kushalgarh, Banswara, Rajasthan</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="fs-3">📞</div>
              <div>
                <h6 className="fw-bold mb-1">Phone</h6>
                <p className="text-muted mb-0">+91 9413700842</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="fs-3">📧</div>
              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="text-muted mb-0">sikartechnoschool@gmail.com</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="fs-3">🕐</div>
              <div>
                <h6 className="fw-bold mb-1">School Hours</h6>
                <p className="text-muted mb-0">Monday – Saturday: 8:00 AM – 2:00 PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3 overflow-hidden shadow-sm mt-3">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9!2d74.45!3d23.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUxJzAwLjAiTiA3NMKwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow rounded-4 p-4 p-md-5">
              <h3 className="fw-bold mb-4" style={{ color: "#0B4DA1" }}>Send Us a Message</h3>

              {success && <div className="alert alert-success">{success}</div>}
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn btn-primary w-100 py-2 fw-semibold"
                style={{ background: "#0B4DA1", border: "none" }}
              >
                {loading ? "Sending..." : "Send Message ✉️"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;