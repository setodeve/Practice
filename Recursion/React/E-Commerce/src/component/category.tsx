import React from "react"
import "./category.css"
import { AiFillHeart } from 'react-icons/ai/';
import { BsCartPlusFill } from 'react-icons/bs/';
interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

interface ProductList{
  products: Array<Product>,
  tag:string,
  image:string
}

const Category : React.FC<ProductList> = (props) => {
  const tag = props.tag
  const products = props.products
  const image = props.image
  return (
    <div>
      <div>
        <h2>Category Component</h2>
        <div className="products">
          <h3>{props.tag}</h3>
          {
            products.filter((product:Product) => product.tag===tag).map((product:Product)=>(
              <div className="product" key={product.id}>
                <img src={image} alt={tag} className="product_image" />
                <h4>{product.name}</h4>
                <div className="product_price">{product.price}円~</div>
                <div className="icons">
                  <span className="heart"><AiFillHeart/></span>
                  <span className="cart"><BsCartPlusFill/></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Category