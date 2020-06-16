import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
