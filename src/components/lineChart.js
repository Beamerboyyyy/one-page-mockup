import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Performance"],
  [new Date("2015-01-01"), 0],
  [new Date("2015-01-08"), 10],
  [new Date("2015-01-15"), 23],
  [new Date("2015-01-22"), 17],
  [new Date("2015-01-29"), 18],
  [new Date("2015-02-06"), 9],
  [new Date("2015-02-13"), 11],
  [new Date("2015-02-19"), 27],
];

export const options = {
  
  hAxis: {
    title: "Time",
    format: "yyyy-MM-dd",
    
    
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

export function LineChart() {
  return (
    <Chart
      
      chartType="LineChart"
      className="w-full rounded-lg"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
    />
  );
}