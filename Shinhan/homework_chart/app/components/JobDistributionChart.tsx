'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const labels = [
  '회사원', '자영업', '학생', '의사', '대표', 
  '변호사', '임원', '주부', '강사', '무직',
  '엔지니어', '군인', '프리랜서', '아르바이트'
];

const backgroundColor = [
  '#FF6384', '#222222', '#36A2EB', '#4BC0C0', '#FFCE56',
  '#9966FF', '#FF9F40', '#36A2EB', '#4BC0C0', '#9966FF',
  '#C9CBCF', '#FFCE56', '#FF9F40', '#C9CBCF'
];

const data = {
  labels,
  datasets: [
    {
      data: [18, 14, 9, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2],
      backgroundColor,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function JobDistributionChart() {
  return (
    <div className="w-full max-w-[600px] mx-auto mt-28">
      <h2 className="relative right-20 top-[-37] text-lg">😎 직업 분포</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="h-[300px] w-full md:w-[60%]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm w-full md:w-[40%]">
          {labels.map((label, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: backgroundColor[index] }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
