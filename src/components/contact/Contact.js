import React, { useRef, useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      form.current.reset();
      setShowAlert(true);
    }
  }, [state.succeeded]);

  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container grid">
        <div className="contact-info">
          <p className="contact-title">Not into emails ? Use this form !</p>
        </div>
        <form ref={form} onSubmit={handleFormSubmit} className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                className="contact-form-input"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className="contact-form-div">
              <input
                type="email"
                className="contact-form-input"
                placeholder="Enter your email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="contact-form-div">
            <input
              type="text"
              className="contact-form-input"
              placeholder="Enter your Subject"
              name="subject"
              required
            />
          </div>
          <div className="contact-form-div">
            <textarea
              name="message"
              cols="30"
              rows="5"
              className="contact-form-input"
              placeholder="What can I help you with?"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-amber-500 opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-[12.25rem] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-amber-500 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-amber-500 transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-sm">
              Send Message
            </span>
            <span className="absolute inset-0 border-2 border-amber-500 rounded-full"></span>
          </button>
        </form>
        {showAlert && (
          <Alert
            message="Your message has been sent!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    </section>
  );
};

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <div className="bg-green-500 text-white rounded-lg px-6 py-2 shadow-md w-96 flex gap-6 items-center justify-center">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="px-3 py-1 bg-white text-green-500 rounded-full hover:bg-green-600 hover:text-white focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Contact;
