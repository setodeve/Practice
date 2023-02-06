import React from 'react';
import './item.css';
import Item from './item'

function Category(props:any){
  const name = props["data"]["name"] ;
  return (
    <div>
        <h1>{name}</h1>
        <div className="container">
          <Item data={props}/>
          <Item data={props}/>
          <Item data={props}/>
      </div>
    </div>

  );
}
export default Category;
// export default Category;