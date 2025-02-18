import React from 'react';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import {Row, Col } from 'react-bootstrap';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, count, onUpdateCount }) => {
    console.log(`Rendering ${title} with count:`, count," onUpdateCount:", onUpdateCount); // Debugging
    return (
        <Row className='menu-item d-flex flex-nowrap align-items-center'>
            <Col xs='auto' md={4} className='img-container justify-content-start h-100'> <img src={process.env.PUBLIC_URL+(`/images/${imageName}`)} alt={title} className='img-fluid'/></Col>
            <Col xs={6} md={8} className='text-container flex-grow-1 h-100'>
              <Row md={4}><h4>{title}</h4></Row>
              <Row md={4}><p>{description}</p></Row>
              <Row md={4} className="d-flex ">
                    <Col><p>${price}</p></Col>
                    <Col className='gap-2 d-flex justify-content-end'>
                        <button onClick={() => onUpdateCount(Math.max(0, count - 1))}>-</button>
                        <div><p>{count}</p></div>
                        <button onClick={() => onUpdateCount(count+1)}>+</button>
                    </Col>
              </Row>
            </Col>
        </Row>
    );
};

export default MenuItem;
