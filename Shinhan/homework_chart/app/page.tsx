'use client';
import OrderRatioChart from './components/OrderRatioChart';
import MonthlySalesChart from './components/MonthlySalesChart';
import WeeklySalesChart from './components/WeeklySalesChart';
import ReservationChart from './components/ReservationChart';
import JobDistributionChart from './components/JobDistributionChart';
//import VennChart from './components/VennChart'; // 🔹 추가

export default function ChartPage() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center text-center mt-5">
        <h1 className="text-2xl">패밀리 레스토랑 데이터 분석 과제</h1>
        <h2 className="text-md mt-1">신다운, 이정민, 한주원, 황호연</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[300px] mt-30">
          <JobDistributionChart />
        </div>
        <div className="w-full h-[300px] mt-30">
          <OrderRatioChart />
        </div>
        <div className="w-full h-[300px] mt-30">
          <MonthlySalesChart />
        </div>
        <div className="w-full h-[300px] mt-40">
          <ReservationChart />
        </div>

      </div>
    </div>
  );
}
