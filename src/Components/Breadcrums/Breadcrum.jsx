//error Can't resolve '..Assets/breadcrum_arrow.png' in 'C:\Users\Princess Halina\Desktop\ITelect4GROOUPROJECT\my-react-app\src\Components\Breadcrums'
import React from 'react'
import './Breadcrum.css'
import arrow_icon from '..Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
