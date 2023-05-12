import { configureStore } from "@reduxjs/toolkit";
import addItem from "./webpage-slice";
const store = configureStore({
  reducer: { additem: addItem },
});
export default store;

export type StoreType = ReturnType<typeof store.getState>;
