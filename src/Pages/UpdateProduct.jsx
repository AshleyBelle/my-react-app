import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of history
  const [product, setProduct] = useState({
    productName: '',
    productCategory: '',
    price: '',
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        if (response.ok) {
          const productDetails = await response.json();
          setProduct(productDetails);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleUpdateProduct = async () => {
    if (!product.productName || !product.productCategory || !product.price) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: product.productName,
          productCategory: product.productCategory,
          new_price: parseFloat(product.price),
        }),
      });

      if (response.ok) {
        console.log('Product successfully updated');
        // Redirect to ProductList after successful update
        navigate('/productlist');
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className='form'>
      <h1>Update Product</h1>
      <label>
        Enter product name:
        <input
          type='text'
          name='productName'
          value={product.productName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Choose Product Category:
        <select
          name='productCategory'
          value={product.productCategory}
          onChange={handleInputChange}
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
          name='price'
          value={product.price}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleUpdateProduct}>Update</button>
    </div>
  );
};

export default UpdateProduct;
