import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
let i = 0;

const initialState = {
  items: [],
  amount: 0,
  count: 0,
  title: [],
  price: [],
  itemdetail: [],
};
export const cartState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.amount += action.payload.price;
      state.count += 1;
      i++;
    },

    remove: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.count--;
      state.amount -= action.payload.price;
      let newItems = [...state.items];
      newItems.splice(index, 1);
      state.items = newItems;
    },

    itempage: (state, action) => {
      state.itemdetail = [action.payload];
    },
  },
});
export const { addToCart, itempage, remove } = cartState.actions;
export default cartState.reducer;
