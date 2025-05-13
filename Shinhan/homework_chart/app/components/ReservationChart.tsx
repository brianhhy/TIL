'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const labels = ['6월', '7월', '8월', '9월', '10월', '11월', '12월'];

const data = {
  labels,
  datasets: [
    {
      label: '총 예약 건수',
      data: [13, 41, 45, 41, 61, 94, 155],
      borderColor: '#36A2EB',
      fill: false,
      yAxisID: 'y',
    },
    {
      label: '예약 취소 건수',
      data: [2, 6, 6, 5, 8, 12, 20],
      borderColor: '#FF6384',
      fill: false,
      yAxisID: 'y',
    },
    {
      label: '예약 취소율 (%)',
      data: [15.4, 14.6, 13.3, 12.2, 13.1, 12.8, 12.9],
      borderColor: '#FFCE56',
      fill: false,
      yAxisID: 'y1',
    },
  ],
};

// ✅ 옵션 완벽 수정
const options: ChartOptions<'line'> = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      stacked: false,
      title: {
        display: true,
        text: '예약 건수',
      },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      stacked: false,
      title: {
        display: true,
        text: '취소율 (%)',
      },
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};

export default function ReservationChart() {
  return (
    <div>
      <h2 className="text-lg mb-4">📉 예약 vs 취소 추이</h2>
      <Line data={data} options={options} />
    </div>
  );
}
