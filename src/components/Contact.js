import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l9pr20o',      // Replace with your EmailJS service ID
      'template_xl7c5kk',     // Replace with your EmailJS template ID
      form.current,
      'Ka0AOaiz4IH4HEYuf'       // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); // optional: reset form after submit
      },
      (error) => {
        alert("Error sending message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
