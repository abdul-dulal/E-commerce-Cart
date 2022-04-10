import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import useProduct from "../Hooks/useProduct";
import Product from "../product/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";

import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useProduct();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        // console.log(quantity
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleAddTocart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    console.log(selectedProduct);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddTocart={handleAddTocart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/order"}>
            <button> Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
