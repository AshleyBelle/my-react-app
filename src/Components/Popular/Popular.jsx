//error 3:8: 'Item' is defined but never used 
import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular For Women</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
            

        </div>

    </div>
  )
}

export default Popular

//{data_product.map((item,i)=>{
//    return <Item /*ari ang contents na naa sa backend*/ />
//})}