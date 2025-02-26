import { IProduct } from "./../../types/index";
// import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export type TOrderProduct = IProduct & {
  orderQuantity: number;
};
type TProducts = {
  products: TOrderProduct[];
};
const initialState: TProducts = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isExistProductId = state.products.find(
        (product) => product._id == action.payload._id
      );
      if (isExistProductId) {
        isExistProductId.orderQuantity += 1;
        return;
      }
      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
  },
});
export const orderProductSelector = (state: RootState) => {
  return state.cart.products;
};
export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
