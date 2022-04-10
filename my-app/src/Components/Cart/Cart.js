import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let shiping = 0;
  let total = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    shiping = shiping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = shiping + total + Number(tax);
  return (
    <div className="cart">
      <h1>Order Summery</h1>
      <h1>Selected Item:{quantity}</h1>
      <p>Total Price: $ {total}</p>
      <p>Shiping : $ {shiping}</p>
      <p>Tax : {tax} </p>
      <h5>Grand Total {grandTotal}</h5>
      {props.children}
    </div>
  );
};

export default Cart;
