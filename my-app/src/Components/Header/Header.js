import React from "react";
import logo from "../../Components/images/Logo.svg";
import Shop from "../Shop/Shop";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <a href="/shop">Shop</a>
          <a href="/order">Order</a>
          <a href="/inventory">Inventory</a>
          <a href="/about">About</a>
        </div>
      </nav>
      <Shop></Shop>
    </div>
  );
};

export default Header;
