import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GraduationCap } from "../Components/Core/Types/GraduationCapType";
import { County } from "../Components/Core/Types/CountyType";
import { useState } from "react";
import { act } from "react-dom/test-utils";

export type CartItem = { item: GraduationCap; quantity: number };

export interface ItemState {
  itemList: CartItem[];
  prices: number[];
  counties: County[];
  numberOfAddedItems: number;
  numberOfAddingOnButton: number;
}

export const initialState: ItemState = {
  itemList: [],
  prices: [],
  counties: [],
  numberOfAddedItems: 0,
  numberOfAddingOnButton: 0,
};

export const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<GraduationCap>) => {
      const value = state.itemList.find((item) => item.item.id === action.payload.id);
      if (value) {
        value.quantity += 1;
      } else {
        state.itemList.push({ item: action.payload, quantity: 1 });
      }
      let sum = 0;
      state.itemList.forEach((item) => {
        sum = sum + item.quantity;
      });
      console.log(sum);
      state.numberOfAddedItems = sum;
    },
    decreaseQuantity: (state, action: PayloadAction<GraduationCap>) => {
      const value = state.itemList.find((item) => item.item.id === action.payload.id);
      if (value) {
        value.quantity = value.quantity - 1;
      } else {
        if (value === 0) {
          const deleteItem = action.payload;
          const index = state.itemList.findIndex((item) => {
            item.item.id === deleteItem.id;
          });
          state.itemList.splice(index, 1);
        }
      }
      let sum = 0;
      state.itemList.forEach((item) => {
        sum = sum - item.quantity;
      });
      //math abs converts a negative number into a positive one so on the cart i wont see numbers with minus
      const final = Math.abs(sum);
      state.numberOfAddedItems = final;
    },
    clearCart: (state) => {
      state.numberOfAddedItems = 0;

      state.itemList = [];
    },

    deleteItem: (state, action: PayloadAction<CartItem>) => {
      const deleteItem = action.payload;
      const index = state.itemList.findIndex((item) => {
        return item.item.id === deleteItem.item.id;
      });

      console.log(index);
      console.log(deleteItem);

      state.itemList.splice(index, 1);

      let sum = 0;
      state.itemList.forEach((item) => {
        sum = sum + item.quantity;
      });

      state.numberOfAddedItems = sum;
    },

    getItemsFromCart: (state, action: PayloadAction<GraduationCap>) => {
      const items = state.itemList;

      console.log(items);
    },
    addPrices: (state, action: PayloadAction<number>) => {
      const theState = state.prices.map((number) => {
        return number + number;
      });
      console.log(theState);
    },
    addCountySlice: (state, action: PayloadAction<County>) => {
      const countyList = state.counties.push(action.payload);
    },
    increase: (state) => {
      let sum = 0;
      sum = sum + 1;
      state.numberOfAddingOnButton = sum;
    },
  },
});
export const {
  addItemToCart,
  deleteItem,
  getItemsFromCart,
  addPrices,
  addCountySlice,
  decreaseQuantity,
  increase,
  clearCart,
} = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
