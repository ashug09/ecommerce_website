import { configureStore } from "@reduxjs/toolkit";
import cartStateReducer from "./features/cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartStateReducer,
    }
})
export default store