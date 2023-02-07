import React from 'react';
import './item.css';

function Item(props:any) {
  const image = props.data.data.image  ;
  const name = props.data.data.name  ;
  return (
      <div className="detail">
        <img src={image} className="product-image" alt={name}/>
        <p>Product Name</p>
        <p>¥*******~</p>
      </div>
  );
}

export default Item;
