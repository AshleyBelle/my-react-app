// src/components/ProductsPage.js

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ProductsPage = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {all_product.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.new_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
