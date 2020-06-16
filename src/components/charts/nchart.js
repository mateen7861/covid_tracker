import React from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2/es";

const Chart = ({ bcolor, confirmed, recovered, deaths, country }) => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: bcolor,
              data: [confirmed, recovered, deaths],
            },
          ],
        }}
        options={{
          responsive: true,
          legend: { display: false },
          title: {
            display: true,
            text: country ? `${country}` : `Global`,
            fontSize: 25,
          },
        }}
      />
      <Pie
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: bcolor,
              data: [confirmed, recovered, deaths],
              borderColor: "#D3D3D3",
              borderWidth: 3,
            },
          ],
        }}
        options={{
          responsive: true,
          legend: {
            display: true,
            position: "right",
          },
          title: {
            display: true,
            text: country ? `${country}` : `Global`,
            fontSize: 25,
          },
        }}
      />
    </div>
  );
};

export default Chart;
