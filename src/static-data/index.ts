import { BarChart, Bitcoin, File, LineChart } from "lucide-react";

export const linkData = {
  group: {
    groupName: "Population",
    links: [
      {
        name: "Line chart",
        path: "/",
        icon: LineChart,
      },
      {
        name: "Bar chart",
        path: "/bar-chart",
        icon: BarChart,
      },
      {
        name: "Cryptocurrency",
        path: "/cryptocurrency",
        icon: Bitcoin,
      },
    ],
  },
};
