import React from 'react';
import styles from '../styleHome/Home.module.css';

function Home() {
  return (
    <div>
      <div className={styles.heroBanner}>
        <img
          src="https://ikbenboa.nl/wp-content/uploads/2024/07/Walibi.jpg"
          alt="Walibi Holland overzicht"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay}>
          <h1>Welkom bij Walibi Holland!</h1>
          <p>Het spectaculairste attractiepark van Nederland</p>
          <a href="/Tickets" className={styles.ctaButton}>Koop Tickets</a>
        </div>
      </div>

      <section className={styles.parkBenefits}>
        <h2>Waarom kiezen voor Walibi?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span role="img" aria-label="achtbaan" className={styles.benefitIcon}>🎢</span>
            <h3>10+ Achtbanen</h3>
            <p>Voor echte durfallen en families!</p>
          </div>
          <div className={styles.benefitCard}>
            <span role="img" aria-label="familie" className={styles.benefitIcon}>👨‍👩‍👧‍👦</span>
            <h3>Gezinsvriendelijk</h3>
            <p>Leuke attracties voor jong en oud.</p>
          </div>
          <div className={styles.benefitCard}>
            <span role="img" aria-label="eten" className={styles.benefitIcon}>🍔</span>
            <h3>Restaurants & Snacks</h3>
            <p>Geniet van een hapje en drankje in het park.</p>
          </div>
          <div className={styles.benefitCard}>
            <span role="img" aria-label="feest" className={styles.benefitIcon}>🎉</span>
            <h3>Evenementen</h3>
            <p>Regelmatig speciale shows en festivals.</p>
          </div>
        </div>
      </section>

      <section className={styles.attractiesSection}>
        <h2>Populaire attracties</h2>
        <div className={styles.attractiesGrid}>
          <div className={styles.attractieCard}>
            <img src="https://parkplanet.nl/wp-content/uploads/2019/07/Walibi_Holland_Untamed_Eerste_rit_19pers.jpg" alt="Untamed achtbaan" />
            <h3>Untamed</h3>
            <p>De snelste en spectaculairste achtbaan van Walibi!</p>
          </div>
          <div className={styles.attractieCard}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Speed_of_Sound_Walibi_Holland_4.jpeg" alt="Speed Of Sound achtbaan" />
            <h3>Speed Of Sound</h3>
            <p>Een achtbaan vol muziek en verrassingen.</p>
          </div>
          <div className={styles.attractieCard}>
            <img src="https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--f3c1e66d-6d7e-460c-85f6-cd9b5efebbcd/attractie-goliath-17.jpg?preferwebp=true&quality=85" alt="Goliath achtbaan" />
            <h3>Goliath</h3>
            <p>Voor de echte durfallen: hoog, snel en spectaculair!</p>
          </div>
        </div>
        <div className={styles.attractiesLink}>
          <a href="/Attractie" className={styles.ctaButton}>Bekijk alle attracties</a>
        </div>
      </section>

      <section className={styles.ticketCard}>
        <div className={styles.cardContent}>
          <h1 className={styles.cardTitle}>Tickets op datum</h1>
          <div className={styles.cardText}>
            <h3>📅 Kies jouw favoriete dag</h3>
            <h3>👪 Extra korting voor families</h3>
            <h3>🧒 Kinderen t/m 2 jaar gratis toegang</h3>
            
          </div>
          <button>
            <a href="/Tickets" className={styles.cardButton}>Lees meer</a>
          </button>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>Contact & Openingstijden</h2>
        <p>
          Heb je vragen? Neem gerust contact op via <a href="mailto:info@walibi.nl">info@walibi.nl</a> of bel 0321-123456.
        </p>
        <p>
          <strong>Openingstijden:</strong> Dagelijks van 10:00 tot 18:00 uur.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Walibi Holland | Volg ons op 
          <a href="https://www.facebook.com/walibiholland" target="_blank" rel="noopener noreferrer"> Facebook</a> &amp; 
          <a href="https://www.instagram.com/walibiholland/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;