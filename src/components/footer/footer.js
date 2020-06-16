import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3e4db2",
    color: "white",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));
export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Made By: Mateen Mustafa
        </Typography>
        <Typography variant="h5" align="center" component="p"></Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Mobile No: +923081607123
        </Typography>
      </Container>
    </footer>
  );
}
