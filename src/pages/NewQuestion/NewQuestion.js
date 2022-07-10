import React, { useState } from "react";
import {
  Divider,
  Form,
  FormButton,
  FormInput,
  Header,
  Segment,
} from "semantic-ui-react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewQuestion } from "../../store/questionsSlice";

const NewQuestion = () => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isDisabled = optionOneText === "" || optionTwoText === "";

  const handleInputOptionOne = (e, { value }) => {
    setOptionOneText(value);
  };

  const handleInputOptionTwo = (e, { value }) => {
    setOptionTwoText(value);
  };

  const handleSubmit = async () => {
    dispatch(
      addNewQuestion({
        author: userId,
        optionOneText,
        optionTwoText,
      })
    );

    navigate("/");
  };

  return (
    <div className="container">
      <div className="newQuestionContainer">
        <Segment>
          <Header as="h2" textAlign="center" block>
            Create New Question
          </Header>

          <h5>Complete the question:</h5>
          <h3>Would you rather...</h3>

          <Form onSubmit={handleSubmit}>
            <FormInput
              placeholder="Enter Option One Text Here"
              value={optionOneText}
              onChange={handleInputOptionOne}
              required
            />
            <Divider horizontal>OR</Divider>
            <FormInput
              placeholder="Enter Option Two Text Here"
              value={optionTwoText}
              onChange={handleInputOptionTwo}
              required
            />
            <FormButton
              content="Submit"
              fluid
              color="green"
              disabled={isDisabled}
            />
          </Form>
        </Segment>
      </div>
    </div>
  );
};

export default NewQuestion;
