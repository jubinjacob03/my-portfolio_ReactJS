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
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Enter your name"
                name="from_name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Enter your email"
                name="email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Enter your Subject"
              name="subject"
            />
          </div>
          <div className="contact__form-div">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="“I’m the best there is at what I do.” – Wolverine. What can I help you with ?"
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
