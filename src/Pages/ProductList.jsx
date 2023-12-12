import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");

        setProducts(res.data); // Set the products in state
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllProducts(); // Call the function to fetch products
  }, []);

  return (
    <div>
      <h1>hi</h1>
      <div className="products">
      {products.map(product => (
        <div className="product">
            <img src="" alt=''/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
