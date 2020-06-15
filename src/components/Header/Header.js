import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Icon } from "@material-ui/core";

export default function DenseAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            Covid-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
