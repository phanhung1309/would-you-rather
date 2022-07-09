import React, { useState } from "react";
import {
  Form,
  FormButton,
  FormDropdown,
  Grid,
  GridColumn,
  Header,
  Image,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../store/authSlice";
import { mapValues } from "lodash";
import "./styles.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDisabled = userId === "";

  const renderSignInOptions = () => {
    const signInOptions = [];

    mapValues(users, (user) => {
      signInOptions.push({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: false, src: user.avatarURL },
      });
    });

    return signInOptions;
  };

  const handleSelectUser = (e, { value }) => {
    setUserId(value);
  };

  const handleSignIn = () => {
    dispatch(authUser(userId));

    navigate("/");
  };

  return (
    <div className="container">
      <div className="contentContainer">
        <div className="headerContainer">
          <Header as="h2" color="purple">
            Welcome to Would You Rather game!
          </Header>
          <Header as="h3" className="subHeader">
            Please sign in to continue
          </Header>
        </div>

        <div className="avatarUserContainer">
          <Grid columns={3}>
            <GridColumn>
              <Image src="/assets/dolphin.png" size="tiny" />
            </GridColumn>
            <GridColumn>
              <Image src="/assets/penguin.png" size="tiny" />
            </GridColumn>
            <GridColumn>
              <Image src="/assets/turtle.png" size="tiny" />
            </GridColumn>
          </Grid>
        </div>

        <Header as="h1" color="green">
          Login
        </Header>

        <div className="formContainer">
          <Form onSubmit={handleSignIn}>
            <FormDropdown
              placeholder="Select user"
              selection
              scrolling
              required
              fluid
              options={renderSignInOptions()}
              value={userId}
              onChange={handleSelectUser}
            />
            <FormButton fluid color="green" disabled={isDisabled}>
              Login
            </FormButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
