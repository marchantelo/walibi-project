import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="ontdek">
      <div className="img-container">
        <img
          src="https://ikbenboa.nl/wp-content/uploads/2024/07/Walibi.jpg"
          alt="Beschrijving van het plaatje"
        />
        <div className="red-overlay"></div>
        <div className="img-text">
          <h1>Ontdek het park!</h1>
          <p>Beleef een onvergetelijk avontuur</p>
        </div>
      </div>

      <div className="content">
        <div className='contenttext'>
          <h1>Ontdek Walibi Holland</h1>
          <h3>
            Walibi Holland is hét attractiepark waar jong en oud kunnen genieten van een spectaculaire dag uit!
            Voel alsof je vliegt in Super Swing, bekijk het park vanuit La Grande Roue of trotseer de kolkende rivier El Rio Grande.
            Maar ook voor echte sensatiezoekers hebben wij van alles te bieden.
            Met achtbanen als UNTAMED, Goliath en Lost Gravity is er aan adrenaline geen gebrek!
          </h3>
          <h4>
            Of je nu met je familie, met een groep vrienden of alleen komt,
            Walibi Holland heeft voor iedereen spectaculaire attracties voor het perfecte dagje uit!
          </h4>
        </div>

        <div className="ontdek1efoto">
          <img
            src="https://www.walibi.nl/adobe/dynamicmedia/deliver/dm-aid--6c0e9493-cd08-43d9-af42-7a0cb65e70c6/mainstreet-zone-6.jpg?width=2500&preferwebp=true&quality=85"
            alt="Beschrijving van het plaatje"
          />
        </div>

        {/* Button staat nu in het grijze vlak */}
        <div className="button-container">
          <button>Koop je tickets</button>
        </div>
      </div>

      <div className="kaart-info">
        <div className='kaart-text'>
          <h1>Vind je weg in het park</h1>
          <h3>
            Gebruik deze handige interactieve kaart om het park te ontdekken en je beste route uit te stippelen voor jouw spectaculairste dagje uit
          </h3>
        </div>
        <img src='https://pbs.twimg.com/media/EP79uuaX4AYPYfU.jpg'></img>
      </div>

      <div className="kaart-info2">
        <div className='kaart-text'>
          <h1>Favoriete attracties van onze gasten </h1>
          <h3>
            Er valt veel te beleven, want we hebben veel verschillende attracties voor
            zowel jong als oud. Een gezellig dagje uit, of je nu met je gezin of vrienden bent!
          </h3>
        </div>


        <div className='actractie-cards'>
          <div className="card">
            <img src="https://parkplanet.nl/wp-content/uploads/2019/07/Walibi_Holland_Untamed_Eerste_rit_19pers.jpg"
              alt="" />
          </div>

          <div className="card">
            <img src="https://www.pretparkreizen.be/assets/images/pretparken/Nieuws/Walibi-Holland-YoY.jpg"
              alt="" />
          </div>



        </div>


      </div>


    </div>
  );
}

export default Contact;
