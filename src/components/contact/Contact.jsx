import React from "react";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [popupActive, setPopupActive] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clljc7q",
        "template_5f8pz85",
        form.current,
        "XbOEAQYMgc6IpCN3P"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setPopupActive(true);
          setTimeout(() => {
            setPopupActive(false);
          }, 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Lets's talk about everything!</h3>
          <p className="contact-details">
            Don't like forms ? Send me an email 👋.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                className="contact-form-input"
                placeholder="Enter your name"
                name="from_name"
              />
            </div>
            <div className="contact-form-div">
              <input
                type="email"
                className="contact-form-input"
                placeholder="Enter your email"
                name="email"
              />
            </div>
          </div>
          <div className="contact-form-div">
            <input
              type="text"
              className="contact-form-input"
              placeholder="Enter your Subject"
              name="subject"
            />
          </div>
          <div className="contact-form-div">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact-form-input"
              placeholder="What can I help you with ?"
            />
          </div>
          <input type="submit" value="Send Message" className="btn" />
        </form>
        <div className={`popup ${popupActive ? "active" : ""}`}>
          <p>Your message has been sent !</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
