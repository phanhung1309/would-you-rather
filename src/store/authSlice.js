import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { authUser } = authSlice.actions;

export default authSlice.reducer;
