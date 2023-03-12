import { useParams } from "react-router-dom"
import { useContext } from "react";
import { UserInfoContext,GetProducts } from "../data"
import { AiFillHeart } from 'react-icons/ai/';
import { BsCartPlusFill } from 'react-icons/bs/';
import { Link } from "react-router-dom";
import "./product.css"

interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

const ProductComponent = () => {
  const products = GetProducts();
  const paramsData  = useParams();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const setCartData = (id:number) => {
    let cartinfo = [...userInfo.cart]
    if(cartinfo[id]==undefined){
      cartinfo[id] = 1;
    }else{
      cartinfo[id] += 1;
    }
    setUserInfo({cart : cartinfo, favorite : userInfo.favorite})
  }

  const setFavoriteData = (id:number) => {
    let favoriteinfo = [...userInfo.favorite]
    if(!favoriteinfo.includes(id)){
      favoriteinfo.push(id)
      setUserInfo({cart : userInfo.cart, favorite : favoriteinfo})
    }
  }

  const product = products.filter((product:Product) => product.id == Number(paramsData.productId))

  return (
    <div className="product_menu">
      <div className="left_menu">
        <img src={"../"+product[0].image} alt={product[0].name} className="product_image"/>
        <div className="contents">
          <div><h3>{product[0].name}</h3></div>
          <div><h4>{product[0].price}円</h4></div>
        </div>
        <div className="produc_detail">
          <div>
            productdetail
          </div>
        </div>
        <div className="icons">
          <span onClick={() => setFavoriteData(product[0].id)} className="heart"><AiFillHeart/></span>
          <span onClick={() => setCartData(product[0].id)} className="cart"><BsCartPlusFill/></span>
        </div>
      </div>
      <div className="right_menu">
        <h3>ProductName</h3>
        <div>
          <div>
            <h4>単価</h4>
            <h5>~~~円</h5>
          </div>
        </div>
        <div>
          <div>
            <h4>数量</h4>
            <h5></h5>
          </div>
        </div>
        <div>
          <div>
            <h4>合計</h4>
            <h5>~~~円</h5>
          </div>
        </div>
        <button onClick={() => setFavoriteData(product[0].id)}>Add Favorite</button>
        <button onClick={() => setCartData(product[0].id)}>Add Cart</button>
        <Link to={`/carts`}><button>Move Cart Page</button></Link>
      </div>
    </div>
  )
}

export default ProductComponent