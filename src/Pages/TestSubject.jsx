import React from 'react';
import allProducts from '../Components/Assets/all_product';

const Test = () => {
  return (
    <div>
      <h1>Test Component</h1>
      <ul>
        {allProducts.map((product, index) => (
          <li key={index}>
            {/* Assuming each product is a string or has a property you want to display */}
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
