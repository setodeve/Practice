import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"

const products = [
  {id:1, tag:"Mac", name:"Macbook Air", price:115280},
  {id:2, tag:"Mac", name:"Macbook Pro 13inch", price:148280},
  {id:3, tag:"Mac", name:"Macbook Pro 14inch", price:239800},
  {id:4, tag:"iPhone", name:"iPhone 13Pro", price:122800},
  {id:5, tag:"iPhone", name:"iPhone 13", price:86800},
  {id:6, tag:"iPhone", name:"iPhone SE", price:57800},
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root  />
  },
  {
    path: "products/:productId",
    element: <div>Products details</div>
  },
  {
    path: "carts",
    element: <div>Carts</div>
  },
  {
    path: "favorites",
    element: <div>Favorite Products</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
