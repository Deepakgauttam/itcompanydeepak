import React from "react";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfD6IOT8r5cQ6eX8LxaClEgMvBkBMDpiQ1gG6fDjk9lQJBW5A/formResponse"
              method="post"
              target="_self"
            >
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="entry.2005620554" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="entry.1045781291" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="entry.839337160" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-map">
            <h1>Our Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086687724958!2d144.96435811528767!3d-37.81014497975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5d9e9478b%3A0x7c14d12064f8fd6f!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1595481115320!5m2!1sen!2sau"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
