import React from 'react';
import styles from '../styleOntdek/Ontdek.module.css';
import { Link } from 'react-router-dom';

function Ontdek() {
  return (
    <div className={styles.ontdek}>
      <div className={styles.imgContainer}>
        <img
          src="https://ikbenboa.nl/wp-content/uploads/2024/07/Walibi.jpg"
          alt="Beschrijving van het plaatje"
        />
        <div className={styles.redOverlay}></div>
        <div className={styles.imgText}>
          <h1>Ontdek het park!</h1>
          <p>Beleef een onvergetelijk avontuur</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>Ontdek Walibi Holland</h1>
          <h3>
            Walibi Holland is hét attractiepark waar jong en oud kunnen genieten van een spectaculaire dag uit!
            Voel alsof je vliegt in Super Swing, bekijk het park vanuit La Grande Roue of trotseer de kolkende rivier El Rio Grande.
            Maar ook voor echte sensatiezoekers hebben wij van alles te bieden.
          </h3>
          <h4>
            Of je nu met je familie, met een groep vrienden of alleen komt,
            Walibi Holland heeft voor iedereen spectaculaire attracties voor het perfecte dagje uit!
          </h4>

          <Link to="/Tickets">
            <button className={styles.ticketButton}>Koop je tickets</button>
          </Link>
        </div>

        <div className={styles.ontdekFoto}>
          <img
            src="https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--6c0e9493-cd08-43d9-af42-7a0cb65e70c6/mainstreet-zone-6.jpg?width=2500&preferwebp=true&quality=85"
            alt="Beschrijving van het plaatje"
          />
        </div>

      </div>

      <div className={styles.kaartInfo}>
        <div className={styles.kaartText}>
          <h1>Vind je weg in het park</h1>
          <h3>
            Gebruik deze handige interactieve kaart om het park te ontdekken en je beste route uit te stippelen voor jouw spectaculairste dagje uit
          </h3>
        </div>
        <img src='https://pbs.twimg.com/media/EP79uuaX4AYPYfU.jpg' alt="Kaart" />
      </div>

      <div className={styles.kaartInfo2}>
        <div className={styles.kaartText}>
          <h1>Favoriete attracties van onze gasten</h1>
          <h3>
            Er valt veel te beleven, want we hebben veel verschillende attracties voor zowel jong als oud.
          </h3>

          <Link to="/Attractie">
            <button className={styles.alleAttracties}>
              Ontdek alle attracties
            </button>
          </Link>
        </div>

        <div className={styles.attractieCards}>
          {[
            'https://parkplanet.nl/wp-content/uploads/2019/07/Walibi_Holland_Untamed_Eerste_rit_19pers.jpg',
            'https://www.looopings.nl/img/foto/25/0415hacasel.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/2/29/Speed_of_Sound_Walibi_Holland_4.jpeg',
            'https://nl.letsgodigital.org/uploads/2017/11/achtbaan-walibi.jpg'
          ].map((url, i) => (
            <div className={styles.card} key={i}>
              <img src={url} alt={`Attractie ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
            <footer className={styles.footer}>
              <p>&copy; {new Date().getFullYear()} Walibi Holland | Volg ons op 
                <a href="https://www.facebook.com/walibiholland" target="_blank" rel="noopener noreferrer"> Facebook</a> &amp; 
                <a href="https://www.instagram.com/walibiholland/" target="_blank" rel="noopener noreferrer"> Instagram</a>
              </p>
            </footer>
    </div>
  );
}

export default Ontdek;
