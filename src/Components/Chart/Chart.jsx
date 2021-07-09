import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
  const totalValue = props.datapoint.map((dataPoints) => dataPoints.value);
  const totalMax = Math.max(...totalValue);
  return (
    <div className="chart">
      {props.datapoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
}

export default Chart;
