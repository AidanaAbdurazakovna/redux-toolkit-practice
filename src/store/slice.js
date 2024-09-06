import { createSlice } from "@reduxjs/toolkit";
import { products } from "../constants/general";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products,
  },
  reducers: {
    incrementQuantyti: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.Quantyti += 1;
        
        product.TotalAmount = product.price * product.Quantyti

      }
    },
    decrementQuantyti: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload);

      if (product.Quantyti >= 1) {
        product.Quantyti -= 1;
        product.TotalAmount =  product.TotalAmount - product.price
      }
    },

    // totalAmount: (state) => {
    //   state.totalAmount = state.products.reduce((total, item) => {
    //     return total + item.price * item.Quantyti;
    //   }, 0);
    // },
  },
});

export const { incrementQuantyti, decrementQuantyti, totalAmount } = productSlice.actions;
export const productReducer = productSlice.reducer;
