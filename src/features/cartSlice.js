import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
let i=0;

const initialState = {
    items: [],
    amount: 0,
    count: 0,
}
export const cartState = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.items = [...state.items, action.payload];
            state.amount += action.payload.price;
            state.count += 1;
            i++;
        }
    }
})
export const {addToCart}= cartState.actions;
export default cartState.reducer;