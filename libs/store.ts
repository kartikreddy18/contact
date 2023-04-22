import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../slice/contact";
import modelReducer from "../slice/model";

export const store = configureStore({
  reducer: {
    contactReducer,
    modelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
