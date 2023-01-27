import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '01-01-2021', '02-01-2021', '03-01-2021',
      '04-01-2021', '05-01-2021', '06-01-2021',
      '07-01-2021','08-01-2021','09-01-2021','10-01-2021','11-01-2021','12-01-2021'
    ],
    datasets: [
      // Light blue bars
      {
        label: '',
        text:2021,
        data: [
          8000000, 1600000, 9000000, 1300000, 1950000, 1700000,2000000,5000000,1000000,9000000,1600000,1900000
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: '',
        text:2022,
        data: [
          4900000, 2600000, 5350000, 4800000, 5200000, 4800000,3000000,2000000,8000000,7000000,1100000,1300000
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Revenue Generated</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
