// import GetProducts from '../data'
import { useLoaderData,useParams } from "react-router-dom"
import { AiFillHeart } from 'react-icons/ai/';
import { BsCartPlusFill } from 'react-icons/bs/';
import "./product.css"

interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

const ProductComponent = () => {
  const loaderData = useLoaderData();
  const paramsData  = useParams();
  // console.log(loaderData.products)
  // console.log(paramsData.productId)
  // console.log(productId)
  const product = loaderData.products.filter((product:Product) => product.id == paramsData.productId)
  // console.log(product)
  return (
    <div className="product_menu">
      <div className="left_menu">
        <img src={"../"+product[0].image} alt={product.name} className="product_image"/>
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
          <span className="heart"><AiFillHeart/></span>
          <span className="cart"><BsCartPlusFill/></span>
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
        <button>Add Favorite</button>
        <button>Add Cart</button>
        <button>Add Cart Page</button>
      </div>
    </div>
  )
}

export default ProductComponent