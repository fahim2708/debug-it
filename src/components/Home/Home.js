import React, { useEffect, useState } from 'react';
import './Home.css';
import myImage from '../../image1.svg';
import { Button, Row } from 'react-bootstrap';
import MainCourse from '../MainCourse/MainCourse';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./mainCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="d-flex align-items-center mx-auto w-50">
                <div className="">
                    <h2 className="fw-bold text-info">Change Your Career with Debug IT</h2>
                    <p className="text-secondary">We teaches you the skills you need to thrive and earn online / offline - now and in the future</p>
                    <Button variant="warning fw-bold" href="/contact" className="contact-btn">Contact Us</Button>
                </div>
                <div className="">
                    <img src={myImage} alt="" height="300px" width="400px" />
                </div>
            </div>
            <div>
                <Row md={4} className="g-4 mx-auto w-75">
                    {
                        courses.map(course => <MainCourse
                            key={course.name}
                            course={course}></MainCourse>)
                    }
                </Row>
            </div>
        </div>

    );
}

export default Home;