'use client';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['온라인 주문', '오프라인 주문'],
  datasets: [{
    data: [59, 391 - 59],
    backgroundColor: ['#36A2EB', '#FFCE56']
  }]
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
};

export default function OrderRatioChart() {
  return (
    <div className="w-[400px]">
      <h2 className="text-left text-lg mt-10 mb-2">📦 주문 방식 비율</h2>
      <div className="h-[300px] flex items-center justify-center"> {/* ✅ 도넛을 가운데로 */}
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
