import React from 'react';
import './Home.css';
import myImage from '../../image1.svg';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="d-flex align-items-center mx-auto w-50">
            <div className="">
                <h2 className="fw-bold text-info">Welcome to Debug IT</h2>
                <p className="text-secondary">We teaches you the skills you need to thrive and earn online / offline - now and in the future</p>
                <Button variant="warning fw-bold">Contact Us</Button>
            </div>
            <div className="">
                <img src={myImage} alt="" height="300px" width="400px" />
            </div>
        </div>
    );
};

export default Home;