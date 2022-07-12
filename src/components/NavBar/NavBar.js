import React from "react";
import {
  Container,
  Image,
  Menu,
  MenuItem,
  MenuMenu,
  Button,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";

const NavBar = () => {
  const { userId } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Menu>
        <MenuItem name="home" as={NavLink} to="/" />
        <MenuItem name="newQuestion" as={NavLink} to="/add" />
        <MenuItem name="leaderboard" as={NavLink} to="/leaderboard" />
        <MenuMenu position="right">
          <MenuItem>
            <Image src={users[userId].avatarURL} size="mini" spaced="right" />
            <span>Hello, {users[userId].name}</span>
          </MenuItem>
          <MenuItem>
            <Button
              basic
              content="Logout"
              icon="log out"
              onClick={handleLogout}
            />
          </MenuItem>
        </MenuMenu>
      </Menu>
    </Container>
  );
};

export default NavBar;
