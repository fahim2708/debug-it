import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllCourses = (props) => {
    const { name, price, duration, img } = props.course;
    return (
        <div>
            <Col>
                <Card border="secondary">
                    <Card.Img variant="top" src={img} className="courses-img" />
                    <Card.Body className="text-center">
                        <Card.Title className="text-info">{name}</Card.Title>
                        <Card.Text className="fw-bold">Course Fee: <span className="text-muted">{price}</span></Card.Text>
                        <Card.Text className="fw-bold">Course Duration: <span className="text-muted">{duration}</span></Card.Text>
                        <Button variant="" className="fw-bold enroll-btn">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default AllCourses;