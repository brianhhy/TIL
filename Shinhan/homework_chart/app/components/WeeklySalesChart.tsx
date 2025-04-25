// components/WeeklySalesChart.tsx
'use client';
import { Bar } from 'react-chartjs-2';

const labels = ['일', '월', '화', '수', '목', '금', '토'];
const data = {
  labels,
  datasets: [
    {
      label: '201712',
      data: [432000, 48000, 672000, 600000, 576000, 72000, 816000],
      backgroundColor: '#4BC0C0'
    }
  ]
};

export default function WeeklySalesChart() {
  return (
    <div>
      <h2 className="text-lg">🗓️ 요일별 SPECIAL_SET 매출</h2>
      <Bar data={data} />
    </div>
  );
}
