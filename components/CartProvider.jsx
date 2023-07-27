"use client";

import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
import { cartReducer } from "@/utils/cartReducer";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const initialData = { products: {} };
  const isClient = typeof window !== "undefined";
  const localData = isClient ? localStorage.getItem("cart") : null;
  const initialState = localData ? JSON.parse(localData) : initialData;
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    dispatch({
      type: "INITIALIZE_CART",
      cart: initialState,
    });
  }, []);

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
