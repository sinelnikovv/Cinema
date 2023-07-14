import { configureStore } from "@reduxjs/toolkit";
import { titlesApi } from "./api";

export const store = configureStore({
  reducer: {
    [titlesApi.reducerPath]: titlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(titlesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
