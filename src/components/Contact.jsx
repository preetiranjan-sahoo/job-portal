import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Contact Us</h1>
      <div className="row mt-4 align-items-center">
        {/* contact form idhar se start */}
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm"
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* right side wala contact info */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
            alt="Contact"
            className="img-fluid mb-4"
            style={{ maxWidth: "80%" }}
          />
          <p className="text-muted">
            <strong>Email:</strong> support@jobportal.com
          </p>
          <p className="text-muted">
            <strong>Phone:</strong> +91-8917579373
          </p>
          <p className="text-muted">
            <strong>Location:</strong> Bhubaneswar, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
