import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = async () => {
    if (!productName || !productCategory || !price) {
      alert('Please fill in all fields');
      return;
    }

    // Make a POST request to your server
    try {
      const response = await fetch('http://localhost:3000/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName,
          productCategory,
          image: 'default_image.jpg', // You may want to add an image field in your form
          old_price: parseFloat(price), // Assuming your price is a decimal
          new_price: parseFloat(price), // You may want to handle old and new prices separately
        }),
      });

      if (response.ok) {
        console.log('Product successfully added');
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='form'>
      <h1>Add Product</h1>
      <label>
        Enter product name:
        <input
          type='text'
          placeholder='Enter product name'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Choose Product Category:
        <select
          name='productCategory'
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value=''>Choose Product Category...</option>
          <option value='Men'>Men</option>
          <option value='Women'>Women</option>
          <option value='Kids'>Kids</option>
        </select>
      </label>
      <label>
        Enter price:
        <input
          type='number'
          placeholder='Enter price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;

/*
const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productCategory: "",
    image: ""

  })

  return (
    <div className='form'>
      <h1>Add Product</h1>
      <label>
        Enter product name:
        <input
          type='text'
          placeholder='Enter product name'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Choose Product Category:
        <select
          name='productCategory'
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value=''>Choose Product Category...</option>
          <option value='Men'>Men</option>
          <option value='Women'>Women</option>
          <option value='Kids'>Kids</option>
        </select>
      </label>
      <label>
        Enter price:
        <input
          type='number'
          placeholder='Enter price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

*/