import { useContext, useState } from "react";
import { UserInfoContext,GetProducts } from "../data"
import { Link } from "react-router-dom";
interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

const CartComponent = () => {


  const setCartProductData = (cart:number[],products:Product[]) => {
    let cartproduct : Array<Product> = [];
    for(let i=1;i<cart.length;i++){
      if(cart[i]==undefined) continue;
      for(let j=0;j<products.length;j++){
        if(i==products[j].id) cartproduct.push(products[j]);
      }
    }
    return cartproduct;
  }

  const getnum = (cart:number[],productId:number) =>{
    for(let i=1;i<cart.length;i++){
      if(i == productId) return cart[i];
    }
  }

  const changecart = (cart:number[], productId:number,cartnum:string) => {
    let tmpnum = [...userInfo.cart]
    for(let i=1;i<cart.length;i++){
      if(i == productId){
        tmpnum[i] = Number(cartnum);
      }
    }
    setUserInfo({cart:tmpnum,favorite:[...userInfo.favorite]})
  }

  const getSum = (cart:number[]) => {
    let sum = 0;
    for(let i=1;i<cart.length;i++){
      for(let j=0;j<products.length;j++){
        if(cart[i]==undefined) continue;
        if(i==products[j].id && cart[i]>=1){
          sum += (products[j].price*cart[i])
        }
      }
    }
    return sum ;
  }
  const products = GetProducts();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [ cartproduct,setcartproduct ] = useState(setCartProductData(userInfo.cart,products));

  return (
    <div className="Root">
      <h3>cart</h3>
      <div>
        {
          cartproduct.length
          ?
          cartproduct.map((product:Product)=>(
            getnum(userInfo.cart, product.id)
            ?
              <div key={product.id}>
                <h4>{product.name}</h4>
                <div>
                  <span>{product.price}円</span>
                  <br />
                  <input 
                    type="number"
                    value={getnum(userInfo.cart, product.id)}
                    onChange={(e) =>changecart(userInfo.cart, product.id,e.target.value)}
                    min={0}
                  />
                </div>
              </div>
            :
            <div key={product.id}></div>
          ))
          :
          <h3>no product in cart</h3>
        }
        <h4>合計</h4>
        <h5>{getSum(userInfo.cart)}</h5>
      </div>
    </div>
  )
}

export default CartComponent
