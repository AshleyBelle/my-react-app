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

  const handleDelete = async (productID) => {
    try{
      await axios.delete("http://localhost:3000/products/"+ productID)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      <h1>Product Items</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>New Price</th>
            <th>Old Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.productID}>
              <td>
                {/*<img src={product.image} alt={product.productName} style={{ width: '50px', height: '50px' }} />*/}
                <p>{product.imageName}</p> {/* Show the name of the image */}
              </td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.new_price}</td>
              <td>{product.old_price}</td>
              <td>
              <button className="delete" onClick={() => handleDelete(product.productID)}>Delete</button>
              <button className="update"><Link to={`/updateproduct`}>Update</Link></button>
              </td>   
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        <Link to="/addproduct">Add </Link>
      </button>
    </div>
  );
};

export default ProductList;
