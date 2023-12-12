import React, { useEffect, useState } from 'react'
import { useState } from 'axios'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchAllProducts = async ()=>{
        try{
            const res = await axios.get("")
        }catch(err){
            console.log(err)
        }
    }
  },[])

  return (
    <div>ProductList</div>
  )
}

export default ProductList