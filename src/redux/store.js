import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});
