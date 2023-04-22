import { Historical } from "@/types/today";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Covid-19 Line Chart",
    },
  },
};

export const LineChart = ({ data: LineData }: { data: Historical }) => {
  const labels = Object.keys(LineData.cases);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Deaths",
        data: Object.values(LineData.deaths),
        borderColor: "#FF1E1E",
        backgroundColor: "#FF1E1E",
      },
      {
        fill: true,
        label: "Recovered",
        data: Object.values(LineData.recovered),
        borderColor: "#00FFD1",
        backgroundColor: "#00FFD1",
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};
