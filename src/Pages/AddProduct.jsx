import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/AddProduct.css'

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [new_price, setNewPrice] = useState('');
  const [old_price, setOldPrice] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!productName || !productCategory || !new_price || !old_price || !image) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productCategory', productCategory);
    formData.append('newprice', parseFloat(new_price));
    formData.append('oldprice', parseFloat(old_price));
    formData.append('image', image);


    // Make a POST request to your server
    try {
      const response = await fetch('http://localhost:3000/products/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Product successfully added');
        navigate('/products');
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    navigate('/productlist');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
        Enter New price:
        <input
          type='number'
          placeholder='Enter price'
          value={new_price}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </label>
      <label>
        Enter old price:
        <input
          type='number'
          placeholder='Enter old price'
          value={old_price}
          onChange={(e) => setOldPrice(e.target.value)}
        />
      </label>
      <label>
        Upload product image:
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default AddProduct;

