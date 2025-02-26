import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type TProducts = {
  products: IProduct[];
};
const initialState: TProducts = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.products.push(action.payload);
    },
  },
});
export const orderProductSelector = (state: RootState) => {
  return state.cart.products;
};
export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
