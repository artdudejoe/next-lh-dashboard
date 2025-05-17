"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      max: 100,
      ticks: {
        callback: (value: number) => `${value}%`,
      },
    },
  },
};

const data = {
  labels: ["Open", "In Progress", "Completed", "Overdue"],
  datasets: [
    {
      label: "Work Orders",
      data: [25, 18, 10, 40], // Example percentages
      backgroundColor: ["#3B82F6", "#60A5FA", "#10B981", "#EF4444"],
    },
  ],
};

export default function WorkOrderStatusChart() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Work Order Status
        </h2>
      </header>
      <h2 className="text-lg font-semibold mb-4"></h2>
      <Bar data={data} options={options} />
    </div>
  );
}
