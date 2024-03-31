"use client";

import React, { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { abbreviateNumber } from "@/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: ChartData<"bar", (number | [number, number] | null)[], unknown>;
  yTitle?: string;
  xTitle?: string;
}

const BarChart = ({ data, xTitle, yTitle }: Props) => {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
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

export default memo(BarChart);
