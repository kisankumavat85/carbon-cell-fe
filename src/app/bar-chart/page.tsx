"use server";

import { type ChartData } from "chart.js";

import BarChart from "@/components/Shared/BarChart";
import { getPopulationData } from "@/server-actions";
import { getChartData } from "@/lib/chart";

export default async function BarChartPage() {
  const populationData = await getPopulationData();
  const { data, labels } = getChartData(populationData);

  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        data,
        label: "Population",
        backgroundColor: "#ffd69d",
        borderColor: "#f44e4e",
        borderWidth: 3,
      },
    ],
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl mb-16 font-bold">USA Population (Bar chart)</h1>
      <div className="w-full">
        <BarChart data={chartData} xTitle="Year" yTitle="Population" />
      </div>
    </main>
  );
}
