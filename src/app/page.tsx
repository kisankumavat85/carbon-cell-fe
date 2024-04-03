"use server";

import { type ChartData } from "chart.js";

import LineChart from "@/components/Shared/LineChart";
import { getPopulationData } from "@/server-actions";
import { getChartData } from "@/lib/chart";

export default async function Home() {
  const populationData = await getPopulationData();
  const { data, labels } = getChartData(populationData);

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        data,
        label: "Population",
        backgroundColor: "#ff0000",
        borderColor: "#ffd69d",
        tension: 0.5,
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className="p-6 w-full">
      <h1 className="lg:text-3xl text-2xl lg:mb-16 mb-8 font-bold text-red-500">
        USA Population (Line chart)
      </h1>
      <div className="w-full">
        <LineChart data={chartData} xTitle="Year" yTitle="Population" />
      </div>
    </div>
  );
}
