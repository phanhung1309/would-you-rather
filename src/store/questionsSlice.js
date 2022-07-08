import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const questionsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { receiveQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
