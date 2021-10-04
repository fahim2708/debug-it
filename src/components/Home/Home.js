import React, { useEffect, useState } from 'react';
import './Home.css';
import myImage from '../../image1.svg';
import { Button, Row } from 'react-bootstrap';
import MainCourse from '../MainCourse/MainCourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faPhone } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./mainCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="my-5">
            <div className="d-flex align-items-center mx-auto w-50">
                <div className="">
                    <h2 className="fw-bold text-info">Change Your Career with Debug IT</h2>
                    <p className="text-secondary">We teaches you the skills you need to thrive and earn online / offline - now and in the future</p>
                    <Button variant="warning fw-bold" href="/contact" className="contact-btn" target="_blank"> <FontAwesomeIcon icon={faPhone} /> Contact Us</Button>
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
            <div className="text-center mt-5">
                <Button variant="info fw-bold" className="view-courses-btn" href="/courses" target="_blank">View All Courses  <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
            </div>
        </div>

    );
}

export default Home;