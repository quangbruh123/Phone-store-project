import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "favorite",
    initialState: {
        item: [],
        count: 0,
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
});

export const { addFavoriteItem, removeFavoriteItem, clearFavoriteItem } = slice.actions;

export const getCount = (state) => state.favorite.count;

export const getFavoriteItem = (state) => state.favorite.item;

export default slice.reducer;
