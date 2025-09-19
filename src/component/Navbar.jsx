import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styleNav/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/Home" className={styles.logoLink}>
        <img
          src="https://www.walibi.nl/content/experience-fragments/who/nl/b2c/header/master/_jcr_content/root/header/logo.coreimg.svg/1712219848063/who.svg"
          alt="Walibi logo"
          className={styles.logo}
        />
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link to="/Ontdek">Ontdek het park</Link>
        </li>

        <li>
          <Link to="/Walibivillage"> Walibi village</Link>
        </li>

        <li>
          <Link to="/Tickets">
            <button className={styles.ticketsButton}>Koop je tickets</button>
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
