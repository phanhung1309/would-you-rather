import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  GridColumn,
  Image,
  Label,
  Segment,
  Header,
  Divider,
  SegmentGroup,
} from "semantic-ui-react";

const LeaderBoardCard = ({ leaderBoardData, index }) => {
  const { name, avatarURL, answeredQuestions, createdQuestions, totalScore } =
    leaderBoardData;

  const rankingColor = ["yellow", "grey", "orange"];

  return (
    <Segment>
      <Label corner="left" icon="trophy" color={rankingColor[index]} />
      <Grid divided padded>
        <GridColumn width={4} verticalAlign="middle">
          <Image src={avatarURL} />
        </GridColumn>

        <GridColumn width={8}>
          <Header as="h3">{name}</Header>
          <Grid>
            <GridColumn width={12}>Answered questions</GridColumn>
            <GridColumn width={4}>{answeredQuestions}</GridColumn>
          </Grid>
          <Divider />
          <Grid>
            <GridColumn width={12}>Created questions</GridColumn>
            <GridColumn width={4}>{createdQuestions}</GridColumn>
          </Grid>
        </GridColumn>

        <GridColumn width={4} textAlign="center">
          <SegmentGroup>
            <Header as="h5" block content="Score" attached="top" />
            <Segment>
              <Label circular color="green" size="big">
                {totalScore}
              </Label>
            </Segment>
          </SegmentGroup>
        </GridColumn>
      </Grid>
    </Segment>
  );
};

LeaderBoardCard.propTypes = {
  leaderBoardData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default LeaderBoardCard;
