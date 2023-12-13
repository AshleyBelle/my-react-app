import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


const AddProduct = () => {
  const [products, setProducts] = useState({
    productName: "",
    productCategory: "",
    new_price: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    //const { name, value } = e.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async e =>{
    e.preventDefault();
    console.log(products);
    try{
        await axios.post("http://localhost:3000/product", products)
        navigate("/productlist")
    }catch(err){
        console.log(err);
    }
  }

  console.log(products);
  return (
    <div className='form'>
      <h1>Add Product</h1>
      <label>
        Enter product name:
        <input type='text' 
        placeholder='Enter product name' 
        onChange={handleChange} 
        name="productName"/>
      </label>
      <label>
        Choose Product Category:
        <select name='productCategory' onChange={handleChange}>
            <option value="">Choose Product Category...</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="kids">Kids</option>
        </select>
        </label>
      <label>
        Enter price:
        <input 
            type='number' 
            placeholder='Enter price' 
            onChange={handleChange} 
            name='new_price'/>
      </label>
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
}

export default AddProduct;
