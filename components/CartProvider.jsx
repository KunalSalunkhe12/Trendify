"use client";

import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
import { cartReducer } from "@/utils/cartReducer";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const initialData = { products: {} };
  const localData = localStorage.getItem("cart");
  const initialSate = localData ? JSON.parse(localData) : initialData;

  const [state, dispatch] = useReducer(cartReducer, initialSate);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      item: item,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
