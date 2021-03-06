import React from "react";
import {
  List,
  ListItemText,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";

import firebase from "../../firebase";
import Channels from "./Channels";

const SidePanel = props => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Logged out!"))
      .catch(err => console.log(err));
  };

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>Mohamed</ListItemText>
      </ListItem>
      <Divider />
      <Channels />
      <Divider />
      <ListItem button onClick={logout}>
        <ListItemText>Logout</ListItemText>
      </ListItem>
    </List>
  );
};

export default SidePanel;
