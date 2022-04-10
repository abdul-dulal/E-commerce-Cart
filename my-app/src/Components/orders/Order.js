import React from "react";
import UseHooks from "../Hooks/UseHooks";
import useProduct from "../Hooks/useProduct";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../Components/utilities/fakedb";
import { Link, useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const [products, setProduct] = useProduct();
  const [cart, setCart] = UseHooks(products);
  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  const navigate = useNavigate();
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            handleRemove={handleRemove}
            key={product.key}
          />
        ))}
      </div>
      <div className="cart-container">
        {
          <Cart cart={cart}>
            <button onClick={() => navigate("/inventory")}>
              Prossed CheckOut
            </button>
          </Cart>
        }
      </div>
    </div>
  );
};

export default Order;
