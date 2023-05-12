import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GraduationCap } from "../Components/Core/type";

export interface ItemState {
  itemList: GraduationCap[];
}

export const initialState: ItemState = {
  itemList: [],
};

export const ItemSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<GraduationCap>) => {
      const added = state.itemList.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<GraduationCap>) => {
      const deleteItem = action.payload;
      const index = state.itemList.findIndex((item) => {
        item.id === deleteItem.id;
      });
      state.itemList.splice(index, 1);
    },

    getItemsFromCart: (state, action: PayloadAction<GraduationCap>) => {
      const items = state.itemList;

      console.log(items);
    },
  },
});
export const { addItemToCart, deleteItem, getItemsFromCart } = ItemSlice.actions;
export default ItemSlice.reducer;
