import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "__my_cart__";
const savedData = JSON.parse(localStorage.getItem(localStorageKey));

const getItemIndex = (state, idToFind) => {
  const ids = state.map((item) => item.id);
  return ids.indexOf(idToFind);
};

const keepInLocalStorage = (state) => {
  return localStorage.setItem(localStorageKey, JSON.stringify(state));
};

const filterState = (state, selectedId) =>
  state.filter((item) => item.id !== selectedId);

export const cartSlice = createSlice({
  name: "cart",
  initialState: savedData ?? [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex < 0) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        state[itemIndex].quantity += 1;
      }
      keepInLocalStorage(state);
      return state;
    },
    removeFromCart: (state, action) => {
      state = filterState(state, action.payload.id);
      keepInLocalStorage(state);
      return state;
    },
    incrementQuantity(state, action) {
      const itemIndex = getItemIndex(state, action.payload.id);

      if (state[itemIndex].quantity >= state[itemIndex].stock) return state; //product is out of stock

      state[itemIndex].quantity += 1;
      keepInLocalStorage(state);
      return state;
    },
    decrementQuantity(state, action) {
      const itemIndex = getItemIndex(state, action.payload.id);

      if (state[itemIndex].quantity > 1) state[itemIndex].quantity -= 1;
      else state = filterState(state, action.payload.id);

      keepInLocalStorage(state);
      return state;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const useGetRobotsFromCart = () => {
  const robots = useSelector((state) => state.cart);

  return useMemo(() => [robots], [robots]);
};
