import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Toyota", 11],
  ["Ford", 2],
  ["KIA", 2],
  ["Honda", 2],
  ["Hyundai", 7],
];

export const options = {
  title: "",
  is3D: true,
};

export default function PieChart({args}) {
  return (
    <Chart
      className="rounded-lg"
      chartType="PieChart"
      data={args.pieValue}
      options={options}
      width={"100%"}
      height={"400px"}
      fontName={"font-display"}
    />
  );
}