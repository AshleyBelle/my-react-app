import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')  
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <div>
      <h1>Product Items</h1>
      <div className="products">
      {products.map(product => (
        <div key={product.productID}>
            <img src={product.image} alt={product.productName}/>
            <h1>{product.productName}</h1>
            <p>Category:{product.productCategory}</p>
            <p>New price:{product.new_price}</p>
            <p>Old price:{product.old_price}</p>
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

/*

*/