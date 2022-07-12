import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PollQuestion from "../../components/PollQuestion";
import PollResult from "../../components/PollResult";
import "./styles.css";

const QuestionDetails = () => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const { userId } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { questions } = useSelector((state) => state.questions);

  const isAnswered = useMemo(() => {
    return Object.keys(users[userId].answers).includes(questionId);
  }, [questionId, userId, users]);

  const isValidQuestionId = useMemo(() => {
    return Object.keys(questions).includes(questionId);
  }, [questions, questionId]);

  useEffect(() => {
    if (!isValidQuestionId) {
      navigate("/notfound");
    }
  }, [navigate, isValidQuestionId]);

  return (
    <div className="container">
      <div className="questionContainer">
        {isValidQuestionId &&
          (!isAnswered ? (
            <PollQuestion
              questionData={questions[questionId]}
              author={users[questions[questionId].author]}
            />
          ) : (
            <PollResult
              questionData={questions[questionId]}
              author={users[questions[questionId].author]}
            />
          ))}
      </div>
    </div>
  );
};

export default QuestionDetails;
