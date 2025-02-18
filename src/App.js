import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import React, { useState } from 'react';
import TotalBar from './components/TotalBar';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import { Container } from 'react-bootstrap';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const menuTitle = {
    id: 0,
    title: 'Japanese House',
    phrase1: 'Fresh, Authentic Japanese Cuisine',
    phrase2: 'Rated Best in the Area!',
    imageName: 'japanese-house.png',
};


function App() {
  const [cart, setCart] = useState({});


// Function to update the cart
const updateCart = (id, count) => {
  setCart((prevCart) => ({
      ...prevCart,
      [id]: count, // Update the count for the specific item
  }));
};

const showCartSummary = () => {
  let item_list = "";
  Object.keys(cart).forEach((itemId) => {
    const quantity = cart[itemId];
    if (quantity > 0) {
      const item = menuItems.find((item) => item.id === parseInt(itemId)); 
      item_list+=`${quantity} ${item.title}, `; 
    }
  });

  if (item_list) {
    alert("Order placed!\n"+item_list.slice(0, -2));
      const phoneNumber = prompt("Phone Number:");
      if (phoneNumber !== null) {
        console.log("User entered:", phoneNumber);
      }
      const address = prompt("Address:");
      if (address !== null) {
        console.log("User entered:", address);
      }
  } else {
    alert("No items in cart!"); 
  }
  clearAllCart()
};

const clearAllCart = () => {
  setCart({}); 
};

// Calculate the total price
const total = menuItems.reduce((acc, item) => acc + (cart[item.id] || 0) * item.price, 0).toFixed(2);

  return (
    <div>

      <div className='title'>
        <MenuHeader key={menuTitle.id} title={menuTitle.title} phrase1={menuTitle.phrase1} phrase2={menuTitle.phrase2} imageName={menuTitle.imageName} />
      </div>

      <div className="menu">
        <Container fluid='md'>
        {menuItems.map((item) => (
                <MenuItem
                    key={item.id} 
                    title={item.title} 
                    description={item.description} 
                    price={item.price} 
                    imageName={item.imageName} 
                    count={cart[item.id] || 0} // Get count from cart, default to 0
                    onUpdateCount={(count) => updateCart(item.id, count)} // Pass down updater function
                />
            ))}
        </Container>
      </div>
      <TotalBar total={total} showCartSummary={showCartSummary} clearAllCart={clearAllCart}/>

    </div>
  );
}

export default App;
