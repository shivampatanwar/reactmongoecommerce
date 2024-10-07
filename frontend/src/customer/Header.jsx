import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";
import { FaCartFlatbed } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { TbJewishStarFilled } from "react-icons/tb";





const Header = () => {
  let [auth, setAuth] = React.useState(true);
  return (
    <header className="customer-header">
      <h1>Ecommerce Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>{" "}
          </li>
        </ul>
      </nav>
      <div className="search">
        <input type="search" />
        <button><MdLocationSearching color="black" /></button>
      </div>

      <div className="cart">{auth ? <Link to="/cart"><FaCartPlus/> Cart</Link> : ""}</div>

      <div className="dropdown">
        <button>{auth ? "Shivam" : "Login"}</button>
        <div className="dropdown-content">
          {auth ? (
            <>
              <Link to="/profile"> <MdOutlineAccountCircle size={18}/>&nbsp;   Profile</Link>
              <Link to='/order'> <FaCartFlatbed size={18}/> &nbsp; Orders</Link>
              <Link to='/wishlist'><TbJewishStarFilled size={18}/> &nbsp; Wishlist</Link>
              <Link to="/contact"><MdContactSupport size={18}/> &nbsp;   Contact</Link>
              <Link to="/setting"> <IoSettings size={18}/> &nbsp;   Settings</Link>
              <Link to='/logout'><CiLogout size={18}/>&nbsp;  Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login"><RiLoginCircleFill size={18}/> &nbsp;  Login</Link>
              <Link to="/customer-signup">  <MdOutlineAccountCircle size={18}/>  &nbsp;  Customer Signup</Link>
              <Link to="/merchant-signup">  <MdOutlineAccountCircle size={18}/>  &nbsp;  Merchant Signup</Link>
              <Link to="/admin-signup"> <MdOutlineAccountCircle size={18}/> &nbsp;   Admin Signup</Link>
              <Link to="/contact"><MdContactSupport size={18}/> &nbsp;   Contact</Link>
              <Link to="/setting"> <IoSettings size={18}/> &nbsp;   Settings</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
