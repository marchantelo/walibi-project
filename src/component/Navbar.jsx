import React from 'react';
import styles from '../styleNav/Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/Home">
            <img
              src="https://www.walibi.nl/content/experience-fragments/who/nl/b2c/header/master/_jcr_content/root/header/logo.coreimg.svg/1712219848063/who.svg"
              alt="Walibi logo"
              className={styles.logo}
            />
          </Link>
        </li>
        <li><Link to="/Ontdek">Ontdek het park</Link></li>
      </ul>

      <Link to="/Tickets">
        <div className={styles.ticketsButton}>
          <button>koop je Tickets</button>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
