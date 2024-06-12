import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api-slice";
import checkLoginSlice from "../features/auth/auth";
// import sidebar from "../features/sidebar/sidebar";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: checkLoginSlice,
    // sidebar: sidebar,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
