import React from 'react';
// import phone from './phone.jpg'
import './item.css';

function Item(props:any) {
  const image = props["data"]["data"]["image"]  ;
  return (
      <div className="container_detail">
        <img src={image} className="product-image" alt="phone"/>
        <p>Product Name</p>
        <p>¥*******~</p>
      </div>
  );
}

export default Item;
