import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart",
    initialState: {
        quantity: 0,
        cartItems: [],
    },
    reducers: {
        setCartItems: (state, action) => {
            state.quantity = action.payload.quantity;
            state.cartItems = action.payload.cart;
        },
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
        cartItemIncrement: (state, action) => {
            state.cartItems[action.payload].quantity += 1;
        },
        cartItemDecrement: (state, action) => {
            state.cartItems[action.payload].quantity -= 1;
        },
    },
});

export const { setCartItems, addCartItems, removeCartItems, clearCartItems, cartItemDecrement, cartItemIncrement } = cartReducer.actions;

export default cartReducer.reducer;

export const getQuantity = (state) => state.cart.quantity;
export const getCartItems = (state) => state.cart.cartItems;
