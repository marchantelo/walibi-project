import React from 'react';
import styles from '../styleBoeken/Boeken.module.css';

function Boeken() {
  return (
    <form action="#" method="post" className={styles.contactForm}>
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Your Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit" className={styles.button}>Verstuur</button>
    </form>
  );
}

export default Boeken;
