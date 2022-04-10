import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Components/images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to={"/"}>Shop</Link>
          <Link to={"/order"}>Order</Link>
          <Link to={"/inventory"}>Inventory</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
