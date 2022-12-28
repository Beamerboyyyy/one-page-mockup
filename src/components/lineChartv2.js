import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Performance"],
  [, 82],
  [, 84],
  [, 93],
  [, 89],
  [, 81],
];

export const options = {
  legend: {position: 'none'},

  hAxis: {
    title: "",
    // format: "yyyy-MM-dd",
  },
  vAxis: {
    title: "Performance",
    format:'0'
  },
  series: {
    1: { curveType: "function" },
  },
  pointsVisible: true
};

export  function LineChartv2() {
  return (
    <Chart
      
      chartType="LineChart"
      className="w-full rounded-lg"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      width="100%"
      height="200px"
      
      
    />
  );
}