import React from "react";
import { Button, Header, Image } from "semantic-ui-react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="notFoundContainer">
      <Image src="/assets/koala.png" size="medium" />
      <Header as="h1">Oops! Page Not Found</Header>
      <p>The page you're looking for does not seem to exist</p>
      <Button content="Go back Home..." color="green" onClick={handleGoBack} />
    </div>
  );
};

export default NotFound;
