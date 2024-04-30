import React from 'react'
import { Data } from '../data';
import Card from 'react-bootstrap/Card';
const bakeries = () => {
    return (
        <div className='uv'>
          
        {Data.map((product, index) => (
          <div className='items' key={index}>
                <div style={{ position: 'relative' }}>
            
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'red',
                color: 'white',
                padding: '5px',
                zIndex: 1, 
              }}
            >
              {product.discount}%
            </div>
            
            <img src={product.img} alt={product.name} />
          </div>
            <h3>{product.name}</h3>
            <p> {product.Product_name}</p>
            <p> {product.quantity}</p>
            <p> rupees:{product.price}</p>
           <button id='add'>add to cart</button>
            
          </div>
        ))}
      </div>
   
    )


}

    export default bakeries
