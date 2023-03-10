import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link, 
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import ProductComponent from "./routes/product"
import CartComponent from "./routes/cart"
import { BsFillCartFill } from 'react-icons/bs/';
import { HiUser } from 'react-icons/hi/';
import { UserInfoProvider } from './data'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "products/:productId",
    element: <ProductComponent/>
  },
  {
    path: "carts",
    element: <CartComponent />
  },
  {
    path: "favorites",
    element: <div>Favorite Products</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserInfoProvider>
      <Router>
        <a href='/'><h1 className='app-title'>Electric Commerce</h1></a>
        <div className="icons">
          <a href='/carts'>
            <span className="cart"><BsFillCartFill/></span>
          </a>
          <span className="user"><HiUser/></span>
        </div>
      </Router>
      <RouterProvider router={router} />
    </UserInfoProvider>
  </React.StrictMode>
)
