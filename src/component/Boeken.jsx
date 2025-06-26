
import React from 'react';
import styles from '../styleBoeken/Boeken.module.css';

function Boeken() {
  console.log(styles)
  return (

    <div>
      <div className={styles.imgContainer}>
        <img
          src="https://ikbenboa.nl/wp-content/uploads/2024/07/Walibi.jpg"
          alt="Beschrijving"
        />
        <div className={styles.redOverlay}></div>
        <div className={styles.imgText}>
          <h1>Welkom bij Walibi!</h1>
          <p>
            Of je nou met je gezin of samen met vrienden naar Walibi komt, er is genoeg te beleven voor jong en oud.
            Ontdek alle attracties voor het hele gezin, voor de allerkleinsten en voor de echte durfallen.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <form action="#" method="post" className={styles.contactForm}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Your Phone number:</label>
          <input type="tel" id="phone" name="phone" required />


          <label htmlFor="phone">betaalmethode:</label>

          
          <div className={styles.betaalMethodes} >
            <div id='Ideal'>
              <p>Ideal</p>
              <img src="https://creditexpo-nl-space.ams3.digitaloceanspaces.com/wp-content/uploads/2014/06/15165437/ideal.png"></img>
            </div>
            <div id= 'Paypal'>
              <p>Paypal</p>
              <img src="https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg"></img>
            </div>
            <div id = 'Kortingsbon'>
              <p>Kortingscodes</p>
              <img src='https://www.parkplanner.nl/wp-content/uploads/2025/04/Walibi-korting-2025.webp'></img>
            </div>
          </div>


          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>


          <button type="submit" className={styles.button}>Verstuur</button>
        </form>
      </div>

    </div>
  );
}

export default Boeken;
