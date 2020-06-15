import React, { useState, useEffect } from "react";
import { getData } from "./api";
import { Dcomp } from "./Dcomp";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import covid19 from "./covid-19.svg";
import Card from "./components/Cards/Card";
import SelectBox from "./components/selectBox/SelectBox";

function App() {
  const [confirmedCases, setDataConfirmed] = useState();
  const [recovered, setDataRecovered] = useState();
  const [deaths, setDataDeaths] = useState();
  useEffect(() => {
    async function currentData() {
      const fdata = await getData();

      setDataConfirmed(fdata.confirmed.value);
      setDataRecovered(fdata.recovered.value);
      setDataDeaths(fdata.deaths.value);
    }
    currentData();
  }, []);

  var comaSeparator = new Intl.NumberFormat("en-US");

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <img height={220} src={covid19}></img>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center">
          <Grid item>
            <SelectBox></SelectBox>
          </Grid>
        </Grid>
        <Grid item container justify="center" direction="row" spacing={2}>
          <Grid item>
            <Card
              bcolor="blue"
              data={comaSeparator.format(confirmedCases)}
              title={"Confirmed Cases"}
              n={1}
            ></Card>
          </Grid>
          <Grid item>
            <Card
              bcolor="green"
              data={comaSeparator.format(recovered)}
              title={"Recovered"}
              n={1}
            ></Card>
          </Grid>

          <Grid item>
            <Card
              bcolor="red"
              data={comaSeparator.format(deaths)}
              title={"Deaths"}
              n={1}
            ></Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
