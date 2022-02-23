import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import AdminDashboard from "../adminDashboard/AdminDashboard";
import WelcomeBanner from "./../adminDashboard/dashboard/WelcomeBanner";
import Sidebar from "./../adminSidebar/Sidebar";
import Customer from "./../adminDashboard/dashboard/Customer";
import ProductAdministrator from "./../productsManagement/adminAdministrator/ProductAdminstrator";
import Banner from "./../adminDashboard/dashboard/Banner";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const { pathname } = location;

  const page = pathname.split("/")[2];

  return (
    <div className="md:flex block">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div
            className={`px-4 sm:px-6   lg:px-8 py-8 w-full max-w-9xl mx-auto`}
          >
            {/* Welcome banner */}
            <WelcomeBanner />
            {/* Dashboard actions */}
            {/* <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
            {/* <DashboardAvatars /> */}
            {/* </div> */}
            {/* Cards */}
            {page === "dashboard" && <AdminDashboard />}
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
