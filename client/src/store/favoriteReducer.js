import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "favorite",
    initialState: {
        item: [],
        count: null,
    },
    reducers: {
        addFavoriteItem: (state, action) => {
            state.item.push(action.payload);
            state.count += 1;
        },
        removeFavoriteItem: (state, action) => {
            state.item.splice(action.payload, 1);
            state.count += 1;
        },
        clearFavoriteItem: (state, action) => {
            state.item = [];
            state.count = null;
        },
    },
    selectors: {
        getCount: (state) => {
            return state.count;
        },
        getFavoriteItem: (state) => {
            return state.item;
        },
    },
});

export const { addFavoriteItem, removeFavoriteItem, clearFavoriteItem } = slice.actions;

export const { getCount, getFavoriteItem } = slice.selectors;

export default slice.reducer;
