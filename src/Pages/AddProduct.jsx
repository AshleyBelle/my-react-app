import React, { useState } from 'react';

const AddProduct = () => {
  const [products, setProducts] = useState({
    productName: "",
    productCategory: "",
    new_price: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      [name]: value,
    }));
  };



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
      <button onClick={handleChange}>Add Product</button>
    </div>
  );
}

export default AddProduct;
