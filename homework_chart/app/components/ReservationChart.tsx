// components/ReservationChart.tsx
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
      fill: false
    },
    {
      label: '예약 취소 건수',
      data: [2, 6, 6, 5, 8, 12, 20],
      borderColor: '#FF6384',
      fill: false
    }
  ]
};

export default function ReservationChart() {
  return (
    <div>
      <h2 className="text-lg">📉 예약 vs 취소 추이</h2>
      <Line data={data} />
    </div>
  );
}
