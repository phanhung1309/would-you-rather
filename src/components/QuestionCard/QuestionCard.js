import React from "react";
import PropTypes from "prop-types";
import {
  SegmentGroup,
  Header,
  Grid,
  GridColumn,
  Image,
  Button,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ questionData, author, isAnswered }) => {
  const navigate = useNavigate();

  const buttonContent = isAnswered ? "View Result" : "View Poll";

  const buttonColor = isAnswered ? "blue" : "green";

  const handleClick = () => {
    navigate(`/question/${questionData.id}`);
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
          <p>... {questionData.optionOne.text} ...</p>
          <Button
            fluid
            color={buttonColor}
            content={buttonContent}
            onClick={handleClick}
          />
        </GridColumn>
      </Grid>
    </SegmentGroup>
  );
};

QuestionCard.propTypes = {
  questionData: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default QuestionCard;
