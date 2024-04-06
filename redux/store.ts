"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apliSlice } from "./features/api/apiSlice";
import  authSlice  from "./features/auth/authSlice";
export const store = configureStore({
  reducer: {
    [apliSlice.reducerPath]: apliSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apliSlice.middleware),
});
