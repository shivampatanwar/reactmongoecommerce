import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Ecommerce Store</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="login">Login</div>
    </header>
  );
};

export default Header;
