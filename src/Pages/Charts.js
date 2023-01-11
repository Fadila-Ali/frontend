import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

export default function Charts({ chartData }) {
  return (
    <div>
      <BarChart chartData={chartData} />
      {/* <LineChart /> */}
    </div>
  );
}
