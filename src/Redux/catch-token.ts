import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  token: string | null;
};
const initialState: StateType = {
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      }
      // localStorage.getItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
