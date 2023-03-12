import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import ProductComponent from "./routes/product"
import CartComponent from "./routes/cart"
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
      <RouterProvider router={router} />
    </UserInfoProvider>
  </React.StrictMode>
)
