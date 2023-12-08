import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
//database based on assets\data named data_product

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular For Women</h1>
        <hr />
        <div className="popular-item">
            

        </div>

    </div>
  )
}

export default Popular

//{data_product.map((item,i)=>{
//    return <Item /*ari ang contents na naa sa backend*/ />
//})}