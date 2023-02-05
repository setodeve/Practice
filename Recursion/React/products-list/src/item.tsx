import React from 'react';
import phone from './phone.jpg'
import './item.css';

function Item() {
  return (
    <div className="container">
      <div className='container_detail'>
        <img src={ phone }className='product-image' alt="phone"/>
        <p>Product Name</p>
        <p>¥*******~</p>
      </div>
    </div>
  );
}

export default Item;
