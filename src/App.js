import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./pages/PrivateRoutes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewQuestion from "./pages/NewQuestion";
import QuestionDetails from "./pages/QuestionDetails";
import LeaderBoard from "./pages/LeaderBoard";
import NotFound from "./pages/NotFound";
import { _getQuestions, _getUsers } from "./service/data";
import { receiveUsers } from "./store/usersSlice";
import { receiveQuestions } from "./store/questionsSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const initializeData = async () => {
    const users = await _getUsers();
    const questions = await _getQuestions();

    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };

  useEffect(() => {
    initializeData();
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/new-question" element={<NewQuestion />} />
        <Route path="/question/:questionId" element={<QuestionDetails />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
