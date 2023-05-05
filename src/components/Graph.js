import { useState } from "react";
import Chart from "react-apexcharts";
export default function Graph() {
  const [state, setstate] = useState({
    options: {
      stroke: {
        curve: "smooth"
      },
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    },
    series: [
      {
        name: "earning",
        data: [
          0,
          10000,
          5000,
          15000,
          10000,
          20000,
          15000,
          25000,
          20000,
          30000,
          25000,
          40000
        ]
      }
    ]
  });
  return (
    <div className="chart-area">
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="600"
      />
    </div>
  );
}
