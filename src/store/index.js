import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import shopMiddleware from "./shopMiddleware";

export default configureStore({
  reducer: {
    shop: shopSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopMiddleware),
});