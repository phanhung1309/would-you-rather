import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./pages/PrivateRoutes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Question from "./pages/Question";
import LeaderBoard from "./pages/LeaderBoard";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
