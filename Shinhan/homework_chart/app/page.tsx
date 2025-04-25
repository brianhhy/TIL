// app/chart/page.tsx
'use client';
import OrderRatioChart from './components/OrderRatioChart';
import MonthlySalesChart from './components/MonthlySalesChart';
import WeeklySalesChart from './components/WeeklySalesChart';
import ReservationChart from './components/ReservationChart';

export default function ChartPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[300px]">
          <OrderRatioChart />
        </div>
        <div className="w-full h-[300px] mt-10">
          <MonthlySalesChart />
        </div>
        <div className="w-full h-[300px] mt-40">
          <WeeklySalesChart />
        </div>
        <div className="w-full h-[300px] mt-40">
          <ReservationChart />
        </div>
      </div>
    </div>
  );
}
