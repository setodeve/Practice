import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import ProductComponent from "./routes/product"
import { BsFillCartFill } from 'react-icons/bs/';
import { HiUser } from 'react-icons/hi/';
import { loader } from './routes/root';
import { UserInfoProvider } from './data'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "products/:productId",
    element: <ProductComponent/>,
    loader: loader
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
    <div>
      <h1>Electric Commerce</h1>
      <div className="icons">
        <span className="cart"><BsFillCartFill/></span>
        <span className="user"><HiUser/></span>
      </div>
    </div>
    <UserInfoProvider>
      <RouterProvider router={router} />
    </UserInfoProvider>
  </React.StrictMode>,
)
