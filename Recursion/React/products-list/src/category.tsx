import React from 'react';
import './category.css';
import Item from './item'

function Category(props:any){
  const name = props["data"]["name"] ;
  return (
    <div>
      <h1>Category component</h1>
      <div className="category_container">
          <h1>{name}</h1>
          <div className="category_detail">
            <Item data={props}/>
            <Item data={props}/>
            <Item data={props}/>
        </div>
      </div>
    </div>

  );
}
export default Category;