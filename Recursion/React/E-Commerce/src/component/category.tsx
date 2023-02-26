import ProductList from "../type/type"

type ProductList = {
  id:number,
  tag:string,
  name:string,
  price:number
}

const Category = (props:ProductList) => {
  const tag = props.tag
  const products = props.products
  return (
    <div>
      <h2>Category Component</h2>
      <div>
        <h3>{props.tag}</h3>
        <ul>
          {
            products.filter((product:ProductList) => product.tag===tag).map((product:ProductList)=>(
              <li key={product.id}>{product.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Category