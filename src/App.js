import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';

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
  return (
    <div>

      <div className='title'>
        <MenuHeader key={menuTitle.id} title={menuTitle.title} phrase1={menuTitle.phrase1} phrase2={menuTitle.phrase2} imageName={menuTitle.imageName} />
      </div>

      <div className="menu">
        <Container fluid='md'>
        {menuItems.map((item) => (
          <MenuItem key={item.id} title={item.title} description={item.description} price={item.price} imageName={item.imageName} />
          ))}
        </Container>
      </div>

    </div>
  );
}

export default App;
