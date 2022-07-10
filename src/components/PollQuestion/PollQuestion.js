import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SegmentGroup,
  Header,
  Grid,
  GridColumn,
  Image,
  Form,
  FormField,
  Radio,
  Button,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswerToUser } from "../../store/usersSlice";
import { addAnswerToQuestion } from "../../store/questionsSlice";

const PollQuestion = ({ questionData, author }) => {
  const [selection, setSelection] = useState("");
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isDisabled = selection === "";

  const handleSelect = (e, { value }) => {
    setSelection(value);
  };

  const handleSubmit = () => {
    dispatch(
      addAnswerToUser({ userId, questionId: questionData.id, selection })
    );

    dispatch(
      addAnswerToQuestion({ userId, questionId: questionData.id, selection })
    );
  };

  return (
    <SegmentGroup>
      <Header as="h5" block>
        {author.name} asks:
      </Header>

      <Grid divided padded>
        <GridColumn width={4}>
          <Image src={author.avatarURL} />
        </GridColumn>
        <GridColumn width={12}>
          <Header as="h5">Would You Rather?</Header>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Radio
                label={questionData.optionOne.text}
                value="optionOne"
                checked={selection === "optionOne"}
                onChange={handleSelect}
              />
              <br />
              <Radio
                label={questionData.optionTwo.text}
                value="optionTwo"
                checked={selection === "optionTwo"}
                onChange={handleSelect}
              />
            </FormField>
            <FormField>
              <Button
                fluid
                color="green"
                content="Submit"
                onClick={handleSubmit}
                disabled={isDisabled}
              />
            </FormField>
          </Form>
        </GridColumn>
      </Grid>
    </SegmentGroup>
  );
};

PollQuestion.propTypes = {
  questionData: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PollQuestion;
