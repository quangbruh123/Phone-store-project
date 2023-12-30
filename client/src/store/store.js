import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PERSIST, REGISTER, PURGE } from "redux-persist";

const persistConfig = {
    key: "user",
    storage,
};

const commonConfig = {
    ...persistConfig,
    whiteList: ["accessToken"],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(commonConfig, authReducer),
        cart: cartReducer,
    },
});

export const persist = persistStore(store);
