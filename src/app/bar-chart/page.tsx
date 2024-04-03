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
      },
    ],
  };

  return (
    <main className="p-6">
      <h1 className="lg:text-3xl text-2xl lg:mb-16 mb-8 font-bold text-red-500">
        USA Population (Bar chart)
      </h1>
      <div className="w-full">
        <BarChart data={chartData} xTitle="Year" yTitle="Population" />
      </div>
    </main>
  );
}
