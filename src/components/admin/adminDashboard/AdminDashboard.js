import React from "react";
import DashboardCard01 from "./dashboard/DashboardCard01";
import DashboardCard04 from "./dashboard/DashboardCard04";
import DashboardCard05 from "./dashboard/DashboardCard05";
import DashboardCard06 from "./dashboard/DashboardCard06";
import DashboardCard07 from "./dashboard/DashboardCard07";
import DashboardCard08 from "./dashboard/DashboardCard08";
import DashboardCard09 from "./dashboard/DashboardCard09";
import DashboardCard11 from "./dashboard/DashboardCard11";
import DashboardCard12 from "./dashboard/DashboardCard12";
import DashboardCard13 from "./dashboard/DashboardCard13";

const AdminDashboard = () => {
  return (
    <div>
      <div
        className={`grid  grid-cols-12 gap-6 
            }`}
      >
        {/* Line chart (Acme Plus) */}
        <DashboardCard01 />

        {/* Bar chart (Direct vs Indirect) */}
        <DashboardCard04 />
        {/* Line chart (Real Time Value) */}
        <DashboardCard05 />
        {/* Doughnut chart (Top Countries) */}
        <DashboardCard06 />
        {/* Table (Top Channels) */}
        <DashboardCard07 />
        {/* Line chart (Sales Over Time) */}
        <DashboardCard08 />
        {/* Stacked bar chart (Sales VS Refunds) */}
        <DashboardCard09 />
        {/* Card (Reasons for Refunds) */}
        <DashboardCard11 />
        {/* Card (Recent Activity) */}
        <DashboardCard12 />
        {/* Card (Income/Expenses) */}
        <DashboardCard13 />
      </div>
    </div>
  );
};

export default AdminDashboard;
