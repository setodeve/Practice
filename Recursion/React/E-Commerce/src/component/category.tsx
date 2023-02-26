import React from "react"

interface Product{
  id:number,
  tag:string,
  name:string,
  price:number
}

interface ProductList {
  products: Array<Product>,
  tag:string
}

const Category : React.FC<ProductList> = (props) => {
  const tag = props.tag
  const products = props.products
  return (
    <div>
      <h2>Category Component</h2>
      <div>
        <h3>{props.tag}</h3>
        <ul>
          {
            products.filter((product:Product) => product.tag===tag).map((product:Product)=>(
              <li key={product.id}>{product.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Category