'use client';
import { Line } from 'react-chartjs-2';

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
    }
  ]
};

const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
        display: true,
        text: '예약 건수'
      }
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: '취소율 (%)'
      },
      grid: {
        drawOnChartArea: false, // 그래프 겹침 방지
      },
      ticks: {
        callback: (value: number) => `${value}%`,
      }
    }
  }
};

export default function ReservationChart() {
  return (
    <div>
      <h2 className="text-lg">📉 예약 vs 취소 추이</h2>
      <Line data={data} options={options} />
    </div>
  );
}