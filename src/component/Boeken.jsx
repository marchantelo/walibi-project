import React from 'react';
import '../styles/Contact.css';


function Boeken() {
  return (

    <form action="#" method="post" className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Verstuur</button>
        </form>
  );
}

export default Boeken;
