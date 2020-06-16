import React, { useState, useEffect } from "react";
import { getData } from "./api";
import { Grid, Typography } from "@material-ui/core";
import Header from "./components/Header/Header";
import covid19 from "./covid-19.svg";
import Card from "./components/Cards/Card";
import SelectBox from "./components/selectBox/SelectBox";
import Footer from "./components/footer/footer";
import Chart from "./components/charts/nchart";

function App() {
  const [confirmedCases, setDataConfirmed] = useState();
  const [recovered, setDataRecovered] = useState();
  const [deaths, setDataDeaths] = useState();
  const [sCountry, setCountry] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    async function currentData() {
      const fdata = await getData();

      setDataConfirmed(fdata.confirmed.value);
      setDataRecovered(fdata.recovered.value);
      setDataDeaths(fdata.deaths.value);
      setDate(fdata.lastUpdate);
    }

    currentData();
  }, []);
  async function CountrySelect(country) {
    const fdata = await getData(country);

    setDataConfirmed(fdata.confirmed.value);
    setDataRecovered(fdata.recovered.value);
    setDataDeaths(fdata.deaths.value);
    setCountry(country);
  }

  var comaSeparator = new Intl.NumberFormat("en-US");

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <img height={220} src={covid19} alt="covid"></img>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center">
          <Grid item>
            <SelectBox CountrySelect={CountrySelect}></SelectBox>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center">
          <Grid item>
            <Typography color="textSecondary">
              {`Last Updated : ${new Date(date).toDateString()}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center" direction="row" spacing={2}>
          <Grid item>
            <Card
              bcolor="blue"
              data={comaSeparator.format(confirmedCases)}
              title={"Confirmed Cases"}
              btext="Number of total cases of COVID-19."
            ></Card>
          </Grid>
          <Grid item>
            <Card
              bcolor="green"
              data={comaSeparator.format(recovered)}
              title={"Recovered"}
              btext="Number of recoveries from COVID-19."
            ></Card>
          </Grid>

          <Grid item>
            <Card
              bcolor="red"
              data={comaSeparator.format(deaths)}
              title={"Deaths"}
              btext="Number of deaths caused by COVID-19."
            ></Card>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Chart
              bcolor={["blue", "green", "red"]}
              confirmed={confirmedCases}
              recovered={recovered}
              deaths={deaths}
              country={sCountry}
            ></Chart>
          </Grid>
        </Grid>
      </Grid>

      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
