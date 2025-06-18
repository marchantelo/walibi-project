import React from 'react';
import styles from '../styleAttractie/Attractie.module.css';
function Attractie() {
  return (
    <>
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



      <div className={styles.searchAttracties}>
        <h1>resultaten</h1>
        <div class="slider-container">
          <span>50 cm</span>
          <div class="slider-wrapper">
            <input type="range" min="50" max="155" value="100" id="slider" />
            <div class="value-bubble" id="valueBubble">100</div>
          </div>
          <span>155 cm</span>
        </div>
      </div>


      <div className={styles.alleAttracties}>
        <div className={styles.cardContent} id="untamed">
          <img src="https://parkplanet.nl/wp-content/uploads/2019/07/Walibi_Holland_Untamed_Eerste_rit_19pers.jpg" alt="Untamed achtbaan"></img>
          <div className={styles.cardText}>
            <h2>Untamed</h2>
            <p><strong>Minimale lengte:</strong> 120 cm</p>
            <p><strong>Top snelheid:</strong> 92 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='yoy'>
          <img src='https://www.looopings.nl/img/foto/25/0415hacasel.jpg'></img>
          <div className={styles.cardText}>
            <h2>yoy</h2>
            <p><strong>Minimale lengte:</strong> 122 cm</p>
            <p><strong>Top snelheid:</strong> 80 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='speedOFsound'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Speed_of_Sound_Walibi_Holland_4.jpeg'></img>
          <div className={styles.cardText}>
            <h2>Speed Of Sound</h2>
            <p><strong>Minimale lengte:</strong> 120 cm</p>
            <p><strong>Top snelheid:</strong> 80 km/u</p>
          </div>
        </div>


        <div className={styles.cardContent} id='xpress'>
          <img src='https://nl.letsgodigital.org/uploads/2017/11/achtbaan-walibi.jpg'></img>
          <div className={styles.cardText}>
            <h2>Xpress platform 13</h2>
            <p><strong>Minimale lengte:</strong> 120 cm</p>
            <p><strong>Top snelheid:</strong> 90 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='goliath'>
          <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--f3c1e66d-6d7e-460c-85f6-cd9b5efebbcd/attractie-goliath-17.jpg?preferwebp=true&quality=85' alt="Goliath achtbaan" />
          <div className={styles.cardText}>
            <h2>Goliath</h2>
            <p><strong>Minimale lengte:</strong> 140 cm</p>
            <p><strong>Top snelheid:</strong> 106 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='lostgravity'>
          <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--b12c8234-9399-4a67-9b50-90e43a888804/attractie-lostgravity-39.jpg?preferwebp=true&quality=85' alt="Lost Gravity achtbaan" />
          <div className={styles.cardText}>
            <h2>Lost Gravity</h2>
            <p><strong>Minimale lengte:</strong> 132 cm</p>
            <p><strong>Top snelheid:</strong> 87 km/u</p>
          </div>
        </div>



        <div className={styles.cardContent} id='drako'>
          <img src=' https://nl.letsgodigital.org/uploads/2017/10/drako-achtbaan.jpg' alt="Drako kinderachtbaan" />
          <div className={styles.cardText}>
            <h2>Drako</h2>
            <p><strong>Minimale lengte:</strong> 90 cm</p>
            <p><strong>Top snelheid:</strong> 40 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='elriogrande'>
          <img src='https://www.pretparken.be/dynamic_pics/thumb_78b3509b8e4ab387411dd177c1888bd9_1280_960_1.jpg'
            alt="El Rio Grande waterattractie" />
          <div className={styles.cardText}>
            <h2>El Rio Grande</h2>
            <p><strong>Minimale lengte:</strong> 90 cm (onder begeleiding)</p>
            <p><strong>Top snelheid:</strong> 30 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='merlinsMagicCastle'>
          <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--d2ce72b9-fd41-4c06-a5ad-09c338872463/attractie-merlinsmagiccastle-1.jpg?preferwebp=true&quality=85'
           alt="Merlin's Magic Castle" />
          <div className={styles.cardText}>
            <h2>Merlin’s Magic Castle</h2>
            <p><strong>Minimale lengte:</strong> 90 cm (onder begeleiding)</p>
            <p><strong>Type attractie:</strong> Madhouse</p>
          </div>
        </div>

        <div className={styles.cardContent} id='crazyRiver'>
          <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--082f6e19-1e93-4a43-b041-2905839d1896/crazy-river.jpg?quality=85&preferwebp=true'
           alt="Crazy River waterbaan" />
          <div className={styles.cardText}>
            <h2>Crazy River</h2>
            <p><strong>Minimale lengte:</strong> 100 cm (onder begeleiding)</p>
            <p><strong>Top snelheid:</strong> 40 km/u</p>
          </div>
        </div>

        <div className={styles.cardContent} id='tomahawk'>
          <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--72903adb-7d9f-43dc-8342-75acca77242f/attractie-thomahawk-5.jpg?quality=85&preferwebp=true' 
          alt="Tomahawk" />
          <div className={styles.cardText}>
            <h2>Tomahawk</h2>
            <p><strong>Minimale lengte:</strong> 90 cm</p>
            <p><strong>Type attractie:</strong> Kinderattractie / Draaimolen</p>
          </div>
        </div>

        <div className={styles.cardContent} id='spinningVibe'>
          <img src='https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--06ddbd13-bd12-4de5-94f9-5df850fabfe1/attractie-spinningvibe-2-oud.jpg?quality=85&preferwebp=true'
           alt="Spinni" />
          <div className={styles.cardText}>
            <h2>Spinning Vibe</h2>
            <p><strong>Minimale lengte:</strong> 120 cm</p>
            <p><strong>Type attractie:</strong> Thrill Ride</p>
          </div>
        </div>

        <div className={styles.cardContent} id='blast'>
          <img src='https://www.looopings.nl/img/foto/23/0416blast1.jpg' alt="Blast" />
          <div className={styles.cardText}>
            <h2>Blast</h2>
            <p><strong>Minimale lengte:</strong> 120 cm</p>
            <p><strong>Top snelheid:</strong> 70 km/u</p>
          </div>
        </div>











      </div>


    </>
  );
}

export default Attractie;
