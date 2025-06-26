import React, { useState } from 'react';
import styles from '../styleTickets/Tickets.module.css';
import { useNavigate } from 'react-router-dom';

function Tickets() {
    const [ticketAantal, setTicketAantal] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const navigate = useNavigate();

    const handleAantalChange = (event) => {
        const value = event.target.value;
        setTicketAantal(value);
        console.log("Aantal tickets:", value);
    };

    const handleDateChange = (event) => {
        const dateStr = event.target.value;
        setSelectedDate(dateStr);

        const dateObj = new Date(dateStr);
        const dagIndex = dateObj.getDay(); 
        console.log(dagIndex);

        const dagenVanDeWeek = [
            "zondag",
            "maandag",
            "dinsdag",
            "woensdag",
            "donderdag",
            "vrijdag",
            "zaterdag"
        ];

        const dagNaam = dagenVanDeWeek[dagIndex];

        console.log("Geselecteerde dag van de week:", dagNaam);
    };

    const handleBestel = () => {
        if (!selectedDate) {
            alert('Selecteer eerst een datum voordat je het aantal tickets invoert.');
            return;
        }
        if (!ticketAantal || parseInt(ticketAantal) <= 0) {
            alert('Voer een geldig aantal tickets in.');
            return;
        }
        navigate('/Boeken');
    };

    const berekenTotaalPrijs = () => {
        const aantal = parseInt(ticketAantal) || 0;

        const dateObj = new Date(selectedDate);
        const dagIndex = dateObj.getDay();

        const isWeekend = (dagIndex === 0 || dagIndex === 6);
        const prijsPerTicket = isWeekend ? 40 : 35;

        return aantal * prijsPerTicket;
    };

    const totaalprijs = berekenTotaalPrijs();

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
                        <h3> 📅 Kies jouw favoriete dag...</h3>
                        <h3> 👪  Extra korting voor families...</h3>
                        <h3> 🧒 Kinderen t/m 2 jaar gratis toegang...</h3>

                        <div className={styles.visitInformation}>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                            <div id="hoeveelheid">
                                <input
                                    type="number"
                                    value={ticketAantal}
                                    onChange={handleAantalChange}
                                    min="1"
                                />
                            </div>
                            <p>totaalprijs : {totaalprijs} euro.</p>
                        </div>
                        <button onClick={handleBestel} className={styles.cardButton}>bestel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tickets;
