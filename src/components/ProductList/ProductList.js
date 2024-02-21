import React from 'react';
import Products from './Products';

const products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/fresh-milk.png',
    price: 14,
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: false,
    image: 'images/cottage-cheese.png',
    price: 10,
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/brocoli.png',
    price: 15,
  },
  {
    pID: 4,
    pName: 'oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/oranges.png',
    price: 20,
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: false,
    image: 'images/olive-oil.png',
    price: 14,
  },
];

const ProductList = (props = {}) => {
  const sampleText = 'and it is awesome';

  return (
    <div id="appMainDiv">
      <h1 id="main-h1">This is a React Component {sampleText}</h1>
      <p id="main-p">This is a sample paragraph element</p>
      <Products
        id={products[0].pID}
        name={products[0].pName}
        description={products[0].desc}
        isAvailable={products[0].isAvailable}
        imageUrl={products[0].image}
        price={products[0].price}
      ></Products>
      <Products
        id={products[1].pID}
        name={products[1].pName}
        description={products[1].desc}
        isAvailable={products[1].isAvailable}
        imageUrl={products[1].image}
        price={products[1].price}
      ></Products>
      <Products
        id={products[2].pID}
        name={products[2].pName}
        description={products[2].desc}
        isAvailable={products[2].isAvailable}
        imageUrl={products[2].image}
        price={products[2].price}
      ></Products>
      <Products
        id={products[3].pID}
        name={products[3].pName}
        description={products[3].desc}
        isAvailable={products[3].isAvailable}
        imageUrl={products[3].image}
        price={products[3].price}
      ></Products>
      <Products
        id={products[4].pID}
        name={products[4].pName}
        description={products[4].desc}
        isAvailable={products[4].isAvailable}
        imageUrl={products[4].image}
        price={products[4].price}
      ></Products>
      <button className="btn" type="button">
        Click Me
      </button>
      <input id="textInput" type="text" title="text-input"></input>
    </div>
  );
};

export default ProductList;