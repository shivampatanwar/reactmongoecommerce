import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Root Component
import Customer from "./customer/Customer.jsx";

// Pages
import Home from "./customer/pages/Home.jsx";
import Product from "./customer/pages/Product.jsx";
import Contact from "./customer/pages/Contact.jsx";
import CustomerSignup from "./customer/pages/CustomerSignup.jsx";
import MerchantSignup from "./customer/pages/MerchantSignup.jsx";
import AdminSignup from "./customer/pages/AdminSignup.jsx";
import Login from "./customer/pages/Login.jsx";
import Setting from "./customer/pages/Setting.jsx";
import Cart from "./customer/pages/Cart.jsx";
import Order from "./customer/pages/Order.jsx";
import Profile from "./customer/pages/Profile.jsx";
import Wishlist from "./customer/pages/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Customer/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/customer-signup",
        element: <CustomerSignup />,
      },
      {
        path: "/merchant-signup",
        element: <MerchantSignup />,
      },
      {
        path: "/admin-signup",
        element: <AdminSignup />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wishlist",
        element: <Wishlist   />,
      }
    ],
  },
  {
    path: "/merchant",
    element: <Customer />,
  },
  {
    path: "/admin",
    element: <Customer />,
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
