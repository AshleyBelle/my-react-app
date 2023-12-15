import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: '',
    productCategory: '',
    new_price: '',
    old_price: '',
    image: '',
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (!productID) {
          console.error('ProductId is undefined');
          return;
        }

        const response = await fetch(`http://localhost:3000/products/${productID}`);
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
  }, [productID]);

  const handleUpdateProduct = async () => {
    if (!product.productName || !product.productCategory || !product.new_price || !product.old_price) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/products/${productID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: product.productName,
          productCategory: product.productCategory,
          image: product.image,
          old_price: parseFloat(product.old_price),
          new_price: parseFloat(product.new_price),
        }),
      });
  
      if (response.ok) {
        console.log('Product successfully updated');
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
          name='new_price'
          value={product.new_price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Enter old price:
        <input
          type='number'
          name='old_price'
          value={product.old_price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Enter image URL:
        <input
          type='text'
          name='image'
          value={product.image}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleUpdateProduct}>Update</button>
    </div>
  );
};

export default UpdateProduct;
