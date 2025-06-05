import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/Home">
                        <img 
                            src="https://www.walibi.nl/content/experience-fragments/who/nl/b2c/header/master/_jcr_content/root/header/logo.coreimg.svg/1712219848063/who.svg" 
                            alt="Walibi logo" 
                            className="navbar-logo"
                        />
                    </Link>
                </li>
                <li><Link to="/Contact">ontdwek het park</Link></li>
            </ul>
         
        </nav>
    );
}

export default Navbar;
