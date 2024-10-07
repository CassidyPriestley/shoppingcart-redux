import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

// Create a store
// This will return all the information about our state
const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});

// Export store to access it anywhere
export default store;
