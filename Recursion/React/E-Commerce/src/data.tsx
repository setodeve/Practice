import phone from './assets/phone.jpg'
import laptop from './assets/laptop.jpg'

interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
  image:string
}

const products : Product[] = [
  {id:1, tag:"Mac", name:"Macbook Air", price:115280,image:laptop},
  {id:2, tag:"Mac", name:"Macbook Pro 13inch", price:148280,image:laptop},
  {id:3, tag:"Mac", name:"Macbook Pro 14inch", price:239800,image:laptop},
  {id:4, tag:"iPhone", name:"iPhone 13Pro", price:122800,image:phone},
  {id:5, tag:"iPhone", name:"iPhone 13", price:86800,image:phone},
  {id:6, tag:"iPhone", name:"iPhone SE", price:57800,image:phone},
]

const GetProducts = () => {
  return products
}

export default GetProducts