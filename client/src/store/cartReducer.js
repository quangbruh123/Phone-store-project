import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart",
    initialState: {
        quantity: 0,
        cartItems: [],
    },
    reducers: {
        addCartItems: (state, action) => {
            state.quantity += 1;
            state.cartItems.push(action.payload);
        },
        removeCartItems: (state, action) => {
            state.quantity -= 1;
            state.cartItems.splice(action.payload, 1);
        },
        clearCartItems: (state, action) => {
            state.quantity = 0;
            state.cartItems = [];
        },
    },
});

export const { addCartItems, removeCartItems, clearCartItems } = cartReducer.actions;

export default cartReducer.reducer;

export const getQuantity = (state) => state.cart.quantity;
export const getCartItems = (state) => state.cart.cartItems;
