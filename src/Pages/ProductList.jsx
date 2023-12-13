import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <h1>Product Items</h1>
      <div className="products">
      {products.map(product => (
        <div className="product" key={product.productID}>
            {product.image_path && <img src={product.image_path} alt=''/>}
            <h1>{product.productName}</h1>
            <p>{product.productCategory}</p>
            <p>{product.new_price}</p>
            <p>{product.old_price}</p>
            
        <h1></h1>
        </div>
      ))}
      </div>
      <button>
        <Link to="/addproduct">Add </Link>
      </button>
    </div>
  );
};

export default ProductList;
