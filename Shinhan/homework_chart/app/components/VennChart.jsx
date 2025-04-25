'use client';

import React, { useEffect, useRef } from 'react';
import {
  Chart,
  Tooltip,
  Legend,
} from 'chart.js';
import { VennDiagramController, VennElement } from 'chartjs-chart-venn';

Chart.register(VennDiagramController, VennElement, Tooltip, Legend);

export default function VennChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'venn', // 이건 그대로 유지
      data: {
        labels: ['Top Month Customers', 'Top 30 Sales'],
        datasets: [{
          data: [
            { sets: ['A'], size: 10 },
            { sets: ['B'], size: 10 },
            { sets: ['A', 'B'], size: 0 }
          ]
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={chartRef} width="400" height="300" />
    </div>
  );
}
