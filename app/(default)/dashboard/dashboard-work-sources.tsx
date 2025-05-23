"use client";

import PieChart from "@/components/charts/pie-chart";

// Import utilities
import { getCssVariable } from "@/components/utils/utils";

export default function DashboardWorkSources() {
  const chartData = {
    labels: ["Installations", "Tenant Requests", "Repairs", "Maintenance"],
    datasets: [
      {
        label: "Work Sources",
        data: [12, 13, 10, 65],
        backgroundColor: [
          getCssVariable("--color-red-500"),
          getCssVariable("--color-yellow-400"),
          getCssVariable("--color-sky-500"),
          getCssVariable("--color-green-500"),
        ],
        hoverBackgroundColor: [
          getCssVariable("--color-red-600"),
          getCssVariable("--color-yellow-500"),
          getCssVariable("--color-sky-600"),
          getCssVariable("--color-green-600"),
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Work Sources
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="text mb-2 text-gray-800 dark:text-gray-100">
          47 Currently Active Work Orders
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <PieChart data={chartData} width={389} height={220} />
    </div>
  );
}
