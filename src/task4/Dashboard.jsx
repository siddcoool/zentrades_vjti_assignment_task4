import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalBarSeries,
  DiscreteColorLegend,
} from "react-vis";

import "./dashboard.css";
import CompanyMatrix from "./Matrix";

const HorizontalBarChart = () => {
  const data = [
    { id: "00036", y: 200400, x: 1 },
    { id: "00036", y: 200350, x: 1 },
    { id: "00036", y: 200310, x: 2 },
    { id: "00036", y: 200260, x: 2 },
    { id: "00036", y: 200210, x: 3 },
    { id: "00036", y: 200160, x: 4 },
    { id: "00036", y: 200120, x: 5 },
    { id: "00036", y: 200070, x: 6 },
    { id: "00036", y: 200020, x: 7 },
    { id: "00036", y: 199980, x: 8 },
    { id: "00036", y: 199930, x: 9 },
  ];

  const yDomain = data.reduce(
    (res, row) => {
      return {
        max: Math.max(res.max, row.y),
        min: Math.min(res.min, row.y),
      };
    },
    { max: -Infinity, min: Infinity }
  );

  const greenColorPalette = ["#7fc97f"]; // Light green color

  return (
    <div className="container">
      <div>
        <CompanyMatrix />
      </div>
      <div className="graph-container">
        <div className="graph">
          <h3>Revenue by job location</h3>
          <XYPlot
            margin={{ left: 75 }}
            width={800}
            height={300}
            yDomain={[yDomain.min, yDomain.max]}
          >
            <HorizontalBarSeries
              className="vertical-bar-series-example"
              color={greenColorPalette[0]} // Apply the light green color
              data={data}
            />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>

        <div className="graph">
          <h3>Revenue by job type</h3>
          <XYPlot
            margin={{ left: 75 }}
            xType="time"
            width={800}
            height={300}
            yDomain={[yDomain.min, yDomain.max]}
          >
            <HorizontalBarSeries
              className="vertical-bar-series-example"
              color={greenColorPalette[0]} // Apply the light green color
              data={data}
            />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBarChart;
