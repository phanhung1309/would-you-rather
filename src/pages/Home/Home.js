import React from "react";
import { Tab } from "semantic-ui-react";
import "./styles.css";
import { useSelector } from "react-redux";
import { mapValues } from "lodash";
import QuestionCard from "../../components/QuestionCard";

const Home = () => {
  const { userId } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { questions } = useSelector((state) => state.questions);

  const answeredQuestions = () => {
    const _answeredQuestions = [];

    mapValues(questions, (question) => {
      if (Object.keys(users[userId].answers).includes(question.id)) {
        _answeredQuestions.push(question);
      }
    });

    return _answeredQuestions;
  };

  const unansweredQuestions = () => {
    const _unansweredQuestions = [];

    mapValues(questions, (question) => {
      if (!Object.keys(users[userId].answers).includes(question.id)) {
        _unansweredQuestions.push(question);
      }
    });

    return _unansweredQuestions;
  };

  const panes = [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {unansweredQuestions().map((question) => (
            <QuestionCard
              key={question.id}
              questionData={question}
              author={users[question.author]}
              isAnswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {answeredQuestions().map((question) => (
            <QuestionCard
              key={question.id}
              questionData={question}
              author={users[question.author]}
              isAnswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="homeContainer">
        <Tab panes={panes} menu={{ secondary: true, pointing: true }} />
      </div>
    </div>
  );
};

export default Home;
