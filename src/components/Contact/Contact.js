import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="contact mx-auto w-50 about">
            <h2 className="text-primary">Contact Us</h2>
            <div className="contact-details">
                <p><FontAwesomeIcon icon={faLocationArrow} /> <span className="fw-bold">Office Address:</span> House-7, Road-4, Gulshan-1, Dhaka-1212, Bangladesh</p>
                <p><FontAwesomeIcon icon={faMailBulk} /> <span className="fw-bold">Email:</span> info@debugit.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> <span className="fw-bold">Hotline:</span> +88-01752662667</p>
                <p className="text-center">
                    <Button variant="" className=" social social-fb"><FontAwesomeIcon icon={faFacebook} /></Button>
                    <Button variant="" className="social social-yt"><FontAwesomeIcon icon={faYoutube} /></Button>
                    <Button variant="" className="social social-ld"><FontAwesomeIcon icon={faLinkedin} /></Button>
                    <Button variant="" className="social social-ig"><FontAwesomeIcon icon={faInstagram} /></Button>
                </p>
            </div>
        </div>
    );
};

export default Contact;