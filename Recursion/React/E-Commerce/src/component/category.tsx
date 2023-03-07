import React, { useContext } from "react"
import "./category.css"
import { AiFillHeart } from 'react-icons/ai/';
import { BsCartPlusFill } from 'react-icons/bs/';
import { Link } from "react-router-dom";
import { UserInfoContext } from "../data"
interface Product{
  id:number,
  tag:string,
  name:string,
  price:number,
  image:string
}

interface ProductList{
  products: Array<Product>,
  tag:string
}

const Category : React.FC<ProductList> = (props) => {
  const tag = props.tag
  const products = props.products
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  
  const setCartData = (id:number) => {
    let cartinfo = userInfo.cart 
    cartinfo.push(id)
    setUserInfo({cart : cartinfo, favorite : userInfo.favorite})
  }

  const setFavoriteData = (id:number) => {
    let favoriteinfo = userInfo.favorite
    favoriteinfo.push(id)
    setUserInfo({cart : userInfo.cart, favorite : favoriteinfo})
  }

  return (
    <div>
      <div>
        <h2>Category Component</h2>
        <div className="products">
          <h3>{props.tag}</h3>
          {
            products.filter((product:Product) => product.tag===tag).map((product:Product)=>(
              <div className="product" key={product.id}>
                <Link to={`products/${product.id}`}>
                  <img src={product.image} alt={tag} className="products_image" />
                </Link>
                <h4>{product.name}</h4>
                <div className="product_price">{product.price}円~</div>
                <div className="icons">
                  <span onClick={() => setFavoriteData(product.id)} className="heart"><AiFillHeart/></span>
                  <span onClick={() => setCartData(product.id)} className="cart"><BsCartPlusFill/></span>
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