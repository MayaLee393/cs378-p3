import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuHeader = ({title, imageName, phrase1, phrase2 }) => {
    return (
        <div className='title'>
        <img src={process.env.PUBLIC_URL+(`/images/${imageName}`)} alt={title}></img>
        <h2 className='phrase1'>{phrase1}</h2>
        <h2 className='phrase2'>{phrase2}</h2>
      </div>

    );
};

export default MenuHeader;
