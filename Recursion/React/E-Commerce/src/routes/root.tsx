import './root.css'
import Category from '../component/category'
import { GetProducts } from '../data'
import { Link } from "react-router-dom";
import { BsCartPlusFill,BsFillCartFill } from 'react-icons/bs/';
import { HiUser } from 'react-icons/hi/';

export const loader = async () => {
  const products = await GetProducts();
  return { products };
};

const Root = () => {
  return (
    <div className="Root">
        <Link to='/'><h1 className='app-title'>Electric Commerce</h1></Link>
        <div className="icons">
          <Link to='/carts'>
            <span className="cart"><BsFillCartFill/></span>
          </Link>
          <span className="user"><HiUser/></span>
        </div>
      <Category products={GetProducts()} tag="Mac"/>
      <Category products={GetProducts()} tag="iPhone"/>
    </div>
  )
}

export default Root
