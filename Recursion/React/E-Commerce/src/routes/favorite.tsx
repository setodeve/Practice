import { useContext, useState } from "react";
import { UserInfoContext,GetProducts } from "../data"
interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

export const FavoriteComponent = () => {
  const products = GetProducts();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const setFavoriteProductData = (favorite:number[],products:Product[]) => {
    let favoriteproduct : Array<Product> = [];
    for(let i=0;i<favorite.length;i++){
      if(favorite[i]==undefined) continue;
      for(let j=0;j<products.length;j++){
        if(favorite[i]==products[j].id) favoriteproduct.push(products[j]);
      }
    }
    return favoriteproduct;
  }

  const [ favoriteproduct,setfavoriteproduct ] = useState(setFavoriteProductData(userInfo.favorite,products));

  return (
    <div className="Root">
      <h3>favorite</h3>
      <div>
      {
          favoriteproduct.length
          ?
          favoriteproduct.map((product:Product)=>(
            <div key={product.id}>
              <h4>{product.name}</h4>
              <span>{product.price}円</span>
            </div>
          ))
          :
          <h3>no favorite</h3>
        }
      </div>
    </div>
  )
}