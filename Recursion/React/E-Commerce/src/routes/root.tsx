import { useState } from 'react'
import './root.css'
import Category from '../component/category'
import phone from '../assets/phone.jpg'
import laptop from '../assets/laptop.jpg'


interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

const products : Product[] = [
  {id:1, tag:"Mac", name:"Macbook Air", price:115280},
  {id:2, tag:"Mac", name:"Macbook Pro 13inch", price:148280},
  {id:3, tag:"Mac", name:"Macbook Pro 14inch", price:239800},
  {id:4, tag:"iPhone", name:"iPhone 13Pro", price:122800},
  {id:5, tag:"iPhone", name:"iPhone 13", price:86800},
  {id:6, tag:"iPhone", name:"iPhone SE", price:57800},
]

const Root = () => {
  return (
    <div className="Root">
      <Category products={products} tag="Mac" image={laptop}/>
      <Category products={products} tag="iPhone" image={phone}/>
    </div>
  )
}

export default Root
