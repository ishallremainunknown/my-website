import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { County } from "../Components/Core/Types/CountyType";

interface CountyState {
  counties: County[];
}
const initialState: CountyState = {
  counties: [],
};
export const CountySlice = createSlice({
  name: "countySlice",
  initialState,
  reducers: {
    addCountySlice: (state, action: PayloadAction<County>) => {
      const countyList = state.counties.push(action.payload);

      console.log(countyList);
    },
  },
});

export const { addCountySlice } = CountySlice.actions;
export default CountySlice.reducer;
