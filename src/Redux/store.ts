import { configureStore } from "@reduxjs/toolkit";
import addItem from "./shoppingCart-slice";
import addCounty from "./county-slice";
import authReducer from "../Redux/catch-token";
const store = configureStore({
  reducer: { additem: addItem, county: addCounty, auth: authReducer },
});
export default store;

export type StoreType = ReturnType<typeof store.getState>;
