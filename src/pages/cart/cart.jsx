import React, { useContext } from "react";
import { PRODUCTS } from "../../products.js";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, resetCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Cart Inventory</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount.toFixed(2)}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
          <button
            onClick={() => {
              resetCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
