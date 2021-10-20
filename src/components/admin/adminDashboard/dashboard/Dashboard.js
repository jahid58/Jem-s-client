import React, { useState, useEffect } from "react";

import Sidebar from "../../adminSidebar/Sidebar";
import Header from "../header/Header";
import WelcomeBanner from "./WelcomeBanner";
import DashboardAvatars from "./DashboardAvatars";
import FilterButton from "./FilterButton";
import Datepicker from "./Datepicker";
import DashboardCard01 from "./DashboardCard01";
import DashboardCard02 from "./DashboardCard02";
import DashboardCard03 from "./DashboardCard03";
import DashboardCard04 from "./DashboardCard04";
import DashboardCard05 from "./DashboardCard05";
import DashboardCard06 from "./DashboardCard06";
import DashboardCard07 from "./DashboardCard07";
import DashboardCard08 from "./DashboardCard08";
import DashboardCard09 from "./DashboardCard09";

import DashboardCard11 from "./DashboardCard11";
import DashboardCard12 from "./DashboardCard12";
import DashboardCard13 from "./DashboardCard13";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";
import AddProduct from "../../products/addProduct/AddProduct";
import Customer from "./Customer";
import ProductAdministrator from "../../products/adminAdministrator/ProductAdminstrator";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const { pathname } = location;
  const page = pathname.split("/")[2];
  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div
            className={`px-4 sm:px-6   lg:px-8 py-8 w-full max-w-9xl mx-auto`}
          >
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              <DashboardAvatars />
            </div>

            {/* Cards */}
            {page === "dashboard" && (
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
            )}
            {page === "customers" && <Customer />}
            {page === "products" && <ProductAdministrator />}
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
