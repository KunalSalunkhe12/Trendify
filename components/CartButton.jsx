"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useContext } from "react";
import { CartContext } from "./CartProvider";

const CartButton = ({ item }) => {
  const { data: session } = useSession();
  const isAuth = session?.user;

  const { state, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (isAuth) {
      addToCart(item);
    } else {
      signIn("google");
    }
  };

  const handleRemoveFromCart = () => {
    if (isAuth) {
      removeFromCart(item._id);
    } else {
      signIn("google");
    }
  };

  return item.in_stock ? (
    state.products[item._id] ? (
      <div className="flex justify-between text-base md:text-lg bg-primary px-3 py-1 rounded-lg font-semibold">
        <button className="text-white" onClick={handleRemoveFromCart}>
          -
        </button>
        <p className="text-white">{state.products[item._id].quantity}</p>
        <button className="text-white" onClick={handleAddToCart}>
          +
        </button>
      </div>
    ) : (
      <button onClick={handleAddToCart} className="btn_primary px-3 py-2">
        Add to cart
      </button>
    )
  ) : (
    <button
      className="bg-gray-500 text-white rounded-lg px-3 py-2 cursor-not-allowed"
      disabled
    >
      Out of Stock
    </button>
  );
};

export default CartButton;
