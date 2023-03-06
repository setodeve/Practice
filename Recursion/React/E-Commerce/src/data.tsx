import phone from './assets/phone.jpg'
import laptop from './assets/laptop.jpg'
import { createContext, useState } from "react";

interface Product{
  id:number,
  tag:string,
  name:string,
  price:number,
  image:string
}

interface UserInfo{
  cart:number,
  favorite:number,
}

export const UserInfoContext = createContext({});
export const UserInfoProvider = (props:any) => {
  const [userInfo,setUserInfo] = useState([{cart:[],favorite:[]}]);
  return(
    <UserInfoContext.Provider value={{userInfo,setUserInfo}} >
      {props.children}
    </UserInfoContext.Provider>
  )
}

export const GetProducts = () => {
  const products : Product[] = [
    {id:1, tag:"Mac", name:"Macbook Air", price:115280,image:laptop},
    {id:2, tag:"Mac", name:"Macbook Pro 13inch", price:148280,image:laptop},
    {id:3, tag:"Mac", name:"Macbook Pro 14inch", price:239800,image:laptop},
    {id:4, tag:"iPhone", name:"iPhone 13Pro", price:122800,image:phone},
    {id:5, tag:"iPhone", name:"iPhone 13", price:86800,image:phone},
    {id:6, tag:"iPhone", name:"iPhone SE", price:57800,image:phone},
  ]
  return products
}

