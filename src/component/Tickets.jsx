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
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
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
                    <h1>Tickets bestellen</h1>
                    <p>Reserveer eenvoudig jouw tickets voor Walibi Holland!</p>
                </div>
            </div>

            <div className={styles.ticketCard}>
                <div className={styles.cardContent}>
                    <h1 className={styles.cardTitle}>Tickets op datum</h1>
                    <div className={styles.cardText}>
                        <h3>📅 Kies jouw favoriete dag</h3>
                        <h3>👪 Extra korting voor families</h3>
                        <h3>🧒 Kinderen t/m 2 jaar gratis toegang</h3>
                        <div className={styles.visitInformation}>
                            <label htmlFor="datum">Datum bezoek:</label>
                            <input
                                type="date"
                                id="datum"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                            <label htmlFor="hoeveelheid">Aantal tickets:</label>
                            <input
                                type="number"
                                id="hoeveelheid"
                                value={ticketAantal}
                                onChange={handleAantalChange}
                                min="1"
                                placeholder="Aantal"
                            />
                            <p>Totaalprijs: <strong>{totaalprijs} euro</strong></p>
                        </div>
                        <button onClick={handleBestel} className={styles.cardButton}>Bestel tickets</button>
                    </div>
                </div>
            </div>

            <section className={styles.ticketInfo}>
                <h2>Ticketvoorwaarden</h2>
                <ul>
                    <li>Tickets zijn alleen geldig op de gekozen datum.</li>
                    <li>Kinderen t/m 2 jaar gratis toegang (geen ticket nodig).</li>
                    <li>Groepen vanaf 10 personen ontvangen extra korting.</li>
                    <li>Tickets kunnen niet worden geruild of terugbetaald.</li>
                </ul>
            </section>

            <section className={styles.contactSection}>
                <h2>Vragen over tickets?</h2>
                <p>
                    Neem contact op via <a href="mailto:tickets@walibi.nl">tickets@walibi.nl</a> of bel 0321-123456.
                </p>
            </section>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Walibi Holland | Tickets & Info</p>
            </footer>
        </div>
    );
}

export default Tickets;