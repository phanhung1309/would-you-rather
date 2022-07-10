import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const questionsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addAnswerToQuestion: (state, action) => {
      const { userId, questionId, selection } = action.payload;

      state.questions[questionId][selection].votes.push(userId);
    },
  },
});

export const { receiveQuestions, addAnswerToQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
