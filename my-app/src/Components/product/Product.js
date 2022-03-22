import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddTocart }) => {
  const { name, img, seller, price, rating } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p> $ {price}</p>
        <p>
          <small>Seller : {seller} </small>
        </p>
        <p>
          <small>Rating :{rating} Stars</small>
        </p>
      </div>
      <button onClick={() => handleAddTocart(product)} className="button-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
