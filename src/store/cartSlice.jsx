import { createSlice } from "@reduxjs/toolkit";

// 1. create a cart slice
// 2. pass the name for this splice
// 3. provide initial state
// 4. create reducer (functions that can be perform on state)
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
    remove(state, action) {
      // keep everything except item.id
      // filters out item.id
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
  },
});

// This returns an obj that has the methods
// destructuring & export
export const { add, remove } = cartSlice.actions;
// export - pass reducer to use in store file
export const cartReducer = cartSlice.reducer;
