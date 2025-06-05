import React from 'react';
import '../styles/App.css';

function Home() {
    return (
        <div>
            <div className="img-container">
                <img
                    src="https://ikbenboa.nl/wp-content/uploads/2024/07/Walibi.jpg"
                    alt="Beschrijving van het plaatje"
                />
                <div className="red-overlay"></div>
                <div className="img-text">
                    <h1>Welkom bij Walibi!</h1>
                    <p>Beleef een onvergetelijk avontuur</p>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <h1 className="card-title">Tickets op datum</h1>
                    <div className="card-text">
                        <h3>
                            📅 Kies jouw favoriete dag <br />
                            De prijzen kunnen per dag verschillen. Bekijk de kalender en kies de meest voordelige dag voor jou. Onze reguliere kassaprijs is € 44,50 dus je korting kan oplopen tot ruim €15,- per ticket!
                        </h3>

                        <h3>
                            👪 Extra korting voor families <br />
                            Kom je samen met je gezin? Kies dan voor onze Family Deal en scoor 4 tickets met extra korting.
                        </h3>

                        <h3>
                            🧒 Kinderen t/m 2 jaar gratis toegang <br />
                            Kinderen t/m 2 jaar hebben gratis toegang tot Walibi Holland en hebben geen eigen ticket nodig.
                        </h3>

                        <input type='date' />
                    </div>
                    <a href="#" className="card-button">Lees meer</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
