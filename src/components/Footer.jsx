import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <div className="container">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="mt-3">&copy; 2025 Learn French. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
