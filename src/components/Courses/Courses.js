import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./allCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2 className="text-center text-primary mt-3">Our Courses</h2>
            <div className="all-courses-area">
                <Row md={4} className="g-4 mx-auto w-75">
                    {
                        courses.map(course => <AllCourses
                            key={course.name}
                            course={course}></AllCourses>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Courses;