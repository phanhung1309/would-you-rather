import React from "react";
import PropTypes from "prop-types";
import {
  SegmentGroup,
  Header,
  Grid,
  GridColumn,
  Image,
  Segment,
  Label,
  Icon,
  Progress,
  Button,
} from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PollResult = ({ questionData, author }) => {
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const optionOneVotes = questionData.optionOne.votes.length;
  const optionTwoVotes = questionData.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const isVoted = (option) => {
    return questionData[option].votes.includes(userId);
  };

  const voteColor = (option) => {
    return questionData[option].votes.includes(userId) ? "green" : "grey";
  };

  const renderYourVoteLabel = () => {
    return (
      <Label color="yellow" ribbon="right">
        <Icon name="check circle outline" size="big" />
        <p style={{ float: "right" }}>Your Vote</p>
      </Label>
    );
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <SegmentGroup>
      <Header as="h5" block>
        {author.name} asks:
      </Header>

      <Grid divided padded>
        <GridColumn width={5} verticalAlign="middle">
          <Image src={author.avatarURL} />
        </GridColumn>

        <GridColumn width={11}>
          <Header as="h3">Results:</Header>

          <Segment color={voteColor("optionOne")}>
            {isVoted("optionOne") && renderYourVoteLabel()}
            <h5>{questionData.optionOne.text}</h5>
            <Progress
              percent={((optionOneVotes / totalVotes) * 100).toFixed(0)}
              progress
              color={voteColor("optionOne")}
            />
            <p>
              {optionOneVotes} out of {totalVotes} votes
            </p>
          </Segment>

          <Segment color={voteColor("optionTwo")}>
            {isVoted("optionTwo") && renderYourVoteLabel()}
            <h5>{questionData.optionTwo.text}</h5>
            <Progress
              percent={((optionTwoVotes / totalVotes) * 100).toFixed(0)}
              progress
              color={voteColor("optionTwo")}
            />
            <p>
              {optionTwoVotes} out of {totalVotes} votes
            </p>
          </Segment>

          <Button content="Go back" floated="right" onClick={handleGoBack} />
        </GridColumn>
      </Grid>
    </SegmentGroup>
  );
};

PollResult.propTypes = {
  questionData: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PollResult;
