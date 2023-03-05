import './root.css'
import Category from '../component/category'
import { GetProducts } from '../data'

export const loader = async () => {
  const products = await GetProducts();
  return { products };
};

const Root = () => {
  return (
    <div className="Root">
      <Category products={GetProducts()} tag="Mac"/>
      <Category products={GetProducts()} tag="iPhone"/>
    </div>
  )
}

export default Root
