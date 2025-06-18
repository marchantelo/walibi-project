import React from 'react';
import styles from '../styleHome/Home.module.css';

function Tickets() {
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
          <p>Beleef een onvergetelijk avontuur</p>
        </div>
      </div>

      <div className={styles.ticketCard}>
        <div className={styles.cardContent}>
          <h1 className={styles.cardTitle}>Tickets op datum</h1>
          <div className={styles.cardText}>
            <h3>📅 Kies jouw favoriete dag</h3>
            <h3>👪 Extra korting voor families</h3>
            <h3>🧒 Kinderen t/m 2 jaar gratis toegang</h3>
            <input type='date' />
          </div>
          <button>
            <a href="#" className={styles.cardButton}>Lees meer</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
