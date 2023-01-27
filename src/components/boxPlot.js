import { func } from "prop-types";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";


export default function ApexChart ({args}){
  console.log(args.boxPlotValue)
  const options = {

    
    chart: {
      id:args.id,
      type: "boxPlot",
      height: 350,
    },
    title: {
      text: "",
      align: "left",
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '50%'
          },
      boxPlot: {
        colors: {
          upper: "#004899",
          lower: "#004950",
        },
      },
    },
  };
  return (
    <>
    <div id="chart">
      <ReactApexChart
        options={options}
        series={[
          {
            type: "boxPlot",
            data: args.boxPlotValue
          },
        ]}
        type="boxPlot"
        height={350}
      />
    </div>
    <span>Minutes</span>
    </>
  );
};


