'use client';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['회사원 X', '회사원 O'],
  datasets: [{
    data: [9, 21],
    backgroundColor: ['#36A2EB', '#FFCE56']
  }]
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    }
  }
};

export default function OrderRatioChart() {
  return (
    <div className="relative w-full h-[300px]">

      <h2 className="absolute left-4 top-20 text-lg">📦 주문 방식 비율</h2>

      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[400px] h-[400px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
