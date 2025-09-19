import React from 'react';
import styles from '../styleVillage/Village.module.css';

function Walibivillige() {
    return (
        <div>
            <div>
                <div className={styles.imgContainer}>
                    <img
                        src="https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--ad6e06ed-e165-4987-993e-6769ef0ec843/walibi-village-companions-13.jpg?preferwebp=true&quality=85"
                        alt="Beschrijving"
                    />
                    <div className={styles.imgText}>
                        <h1>Walibi Village Pretpark met overnachting</h1>
                        <p>
                            Geniet van een onvergetelijk verblijf in Walibi Village, waar avontuur en comfort samenkomen.
                            Ontdek de magie van het pretpark met een overnachting in onze unieke themacottages.
                        </p>
                    </div>
                </div>
            </div>
       <div className={styles.cottagesSection}>
            <div className={styles.cardContentGratis}>
                <div>
                    <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--58df0ca2-1ba3-4e59-a475-7f6bb57a2631/walibi-village-companions-5.jpg?quality=85&preferwebp=true'
                        alt="Walibi Village Cottage" />
                </div>
                <div> 
                    <h1>Twee dagen gratis toegang – alleen in juli! </h1>
                    <h3>
                        Boek een verblijf in Walibi Village en ontvang twee dagen gratis toegang tot het pretpark!
                        Geniet van de spanning en sensatie van Walibi Holland met een overnachting in onze comfortabele cottages.
                    </h3>
                </div>
            </div>

                <h2>Onze huisjes</h2>
                <div className={styles.cottagesGrid}>
                    <div className={styles.cottageCard}>
                        <img src="https://luxevakantiehuisterschelling.nl/wp-content/gallery/buitenbosch/DSC_0517.jpg" alt="Cottage Comfort" />
                        <h3>Cottage Comfort</h3>
                        <p>Ruim huisje voor 4 personen, met eigen terras en moderne voorzieningen.</p>
                    </div>
                    <div className={styles.cottageCard}>
                        <img src="https://www.dancenter.nl/wimg/z=1-1/id=06540-923660-600w400.jpg" alt="Cottage Family" />
                        <h3>Cottage Family</h3>
                        <p>Ideaal voor gezinnen, met extra slaapkamers en een grote tuin.</p>
                    </div>
                    <div className={styles.cottageCard}>
                        <img src="https://www.villaspot.nl/vakantie/wp-content/uploads/2018/11/Vakantiehuis-Exloo-6-personen.jpg" alt="Cottage Luxe" />
                        <h3>Cottage Luxe</h3>
                        <p>Geniet van luxe en comfort met een eigen sauna en uitzicht op het park.</p>
                    </div>
                    <div className={styles.cottageCard}>
                        <img src="https://www.dancenter.nl/rwdi/md5=ce4098af79af426de6994e6fce59e4c8/id=7874565151112370399.jpg" alt="Cottage Premium" />
                        <h3>Cottage Premium</h3>
                        <p>Extra ruime cottage met moderne keuken en twee badkamers.</p>
                    </div>
                    <div className={styles.cottageCard}>
                        <img src="https://www.spanjevoorjou.com/images/vakantiehuis-villa_lanzarote_deluxe-conil-lanzarote-800.png" alt="Cottage Kids" />
                        <h3>Cottage Kids</h3>
                        <p>Speciaal ingericht voor gezinnen met jonge kinderen, inclusief speelkamer.</p>
                    </div>
                     <div className={styles.cottageCard}>
                        <img src="https://www.villaspot.nl/vakantie/wp-content/uploads/2018/11/Vakantiehuis-Exloo-6-personen.jpg" alt="Cottage Luxe" />
                        <h3>Cottage Luxe</h3>
                        <p>Geniet van luxe en comfort met een eigen sauna en uitzicht op het park.</p>
                    </div>
                    <div className={styles.cottageCard}>
                        <img src="https://www.dancenter.nl/rwdi/md5=ce4098af79af426de6994e6fce59e4c8/id=7874565151112370399.jpg" alt="Cottage Premium" />
                        <h3>Cottage Premium</h3>
                        <p>Extra ruime cottage met moderne keuken en twee badkamers.</p>
                    </div>
                    <div className={styles.cottageCard}>
                        <img src="https://www.spanjevoorjou.com/images/vakantiehuis-villa_lanzarote_deluxe-conil-lanzarote-800.png" alt="Cottage Kids" />
                        <h3>Cottage Kids</h3>
                        <p>Speciaal ingericht voor gezinnen met jonge kinderen, inclusief speelkamer.</p>
                    </div>
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

export default Walibivillige;