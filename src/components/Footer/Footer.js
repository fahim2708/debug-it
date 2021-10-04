import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark py-2">
            <h5 className="text-center text-light">Copyright © 2021 Debug IT Institute, All rights Reserved.</h5>
            <div className="text-center">
                <Button variant="" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Button>
                <Button variant="" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></Button>
                <Button variant="" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></Button>
                <Button variant="" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Button>
            </div>
        </div>
    );
};

export default Footer;