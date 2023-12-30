import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        userInfo: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setUser: (state, action) => {
            state.userInfo = action.payload;
        },
        signOut: (state, action) => {
            state.accessToken = null;
        },
    },
});

export const { setAccessToken, setUser, signOut } = authReducer.actions;

export default authReducer.reducer;

export const getAccessToken = (state) => state.auth.accessToken;
export const getUserInfo = (state) => state.auth.userInfo;
