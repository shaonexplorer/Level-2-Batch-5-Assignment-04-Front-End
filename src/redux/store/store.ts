import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bookApi } from "../api/book.api";

export const store = configureStore({
  reducer: { [bookApi.reducerPath]: bookApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

setupListeners(store.dispatch);
