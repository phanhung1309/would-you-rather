import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice";
import questionsReducer from "./questionsSlice";

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  questions: questionsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
