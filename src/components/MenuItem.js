import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import { Container, Row, Col } from 'react-bootstrap';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price }) => {
    return (
        <Row key={(id)} className='menu-item d-flex flex-nowrap align-items-center'>
            <Col xs='auto' md={4} className='img-container justify-content-start'> <img src={process.env.PUBLIC_URL+(`/images/${imageName}`)} alt={title} className='img-fluid'/></Col>
            <Col xs='auto' md={8} className='text-container flex-grow-1'>
              <Row md={4}><h4>{title}</h4></Row>
              <Row md={4}><p>{description}</p></Row>
              <Row md={4}><Col><p>${price}</p></Col><Col className='d-flex justify-content-end'><button>Add</button></Col></Row>
              </Col>
        </Row>
    );
};

export default MenuItem;
