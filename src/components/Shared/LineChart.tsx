"use client";

import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Point,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { abbreviateNumber } from "@/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: ChartData<"line", (number | Point | null)[], unknown>;
  yTitle?: string;
  xTitle?: string;
}

const LineChart = ({ data, xTitle, yTitle }: Props) => {
  return (
    <Line
      options={{
        responsive: true,
        onResize: (chart, size) => {
          if (size.width <= 687) {
            chart.config.data.datasets[0].borderWidth = 2;
          }
        },
        plugins: {
          legend: {
            position: "top" as const,
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: yTitle,
            },
            ticks: {
              callback: (value) =>
                typeof value === "number" ? abbreviateNumber(value) : value,
            },
          },
          x: {
            title: {
              display: true,
              text: xTitle,
            },
            reverse: true,
          },
        },
      }}
      data={data}
    />
  );
};

export default memo(LineChart);
