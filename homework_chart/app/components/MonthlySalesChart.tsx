'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const labels = ['6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const data = {
  labels,
  datasets: [
    {
      label: 'SPECIAL_SET',
      data: [144000, 408000, 336000, 264000, 552000, 888000, 3216000],
      backgroundColor: '#FF6384'
    },
    {
      label: 'PASTA',
      data: [24000, 228000, 180000, 120000, 336000, 492000, 660000],
      backgroundColor: '#36A2EB'
    },
    {
      label: 'PIZZA',
      data: [0, 102000, 136000, 238000, 391000, 544000, 255000],
      backgroundColor: '#FFCE56'
    },
    {
      label: 'SEA_FOOD',
      data: [0, 175000, 225000, 300000, 200000, 425000, 300000],
      backgroundColor: '#4BC0C0'
    },
    {
      label: 'STEAK',
      data: [385000, 525000, 455000, 280000, 1120000, 1715000, 490000],
      backgroundColor: '#9966FF'
    },
    {
      label: 'SALAD_BAR',
      data: [0, 200000, 175000, 200000, 425000, 400000, 675000],
      backgroundColor: '#FF9F40'
    },
    {
      label: 'SALAD',
      data: [30000, 0, 15000, 0, 135000, 105000, 150000],
      backgroundColor: '#C9CBCF'
    },
    {
      label: 'SANDWITCH',
      data: [10000, 70000, 90000, 30000, 40000, 150000, 220000],
      backgroundColor: '#FFCD56'
    },
    {
      label: 'WINE',
      data: [8000, 0, 40000, 16000, 32000, 304000, 456000],
      backgroundColor: '#36A299'
    },
    {
      label: 'JUICE',
      data: [12000, 36000, 42000, 48000, 102000, 174000, 30000],
      backgroundColor: '#A8B3C5'
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: false
    }
  }
};

export default function MonthlySalesChart() {
  return (
    <div className="w-full h-[400px]">
      <h2 className="text-left text-lg mt-10 mb-2">📊 월별 메뉴 매출</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
