import { faBox } from "@fortawesome/free-solid-svg-icons";
import {
  Dashboard,
  LocalGroceryStore,
  People,
  Settings,
} from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[2];

  return (
    <div className="w-64 ">
      {/* Sidebar */}
      <div
        className={` z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out 
        
        }`}
      >
        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
            Pages
          </h3>
          <ul className="mt-3">
            {/* Dashboard */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "dashboard" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/admin/dashboard"
                className={`block text-gray-200 hover:text-indigo-400 transition duration-150
                 ${page === "dashboard" && "text-indigo-400"}`}
              >
                <div className="flex flex-grow">
                  <Dashboard
                    className={`flex-shrink-0 h-6 w-6 mr-3 fill-current text-gray-400 ${
                      page === "dashboard" && "text-indigo-500"
                    }`}
                  />

                  <span className="text-sm font-medium">Dashboard</span>
                </div>
              </NavLink>
            </li>
            {/* Customers */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "customers" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/admin/customers"
                className={`block text-gray-200 hover:text-indigo-400 transition duration-150 ${
                  page === "customers" && "text-indigo-400"
                }`}
              >
                <div className="flex flex-grow">
                  <People
                    className={`flex-shrink-0 h-6 w-6 mr-3 fill-current text-gray-400 ${
                      page === "customers" && "text-indigo-500"
                    }`}
                  />

                  <span className="text-sm font-medium">Customers</span>
                </div>
              </NavLink>
            </li>
            {/* Orders */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "orders" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/admin/orders"
                className={`block text-gray-200 hover:text-indigo-400 transition duration-150 ${
                  page === "orders" && "text-indigo-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <FontAwesomeIcon
                      icon={faBox}
                      className={`flex-shrink-0 h-6 w-6 mr-3 fill-current text-gray-400 ${
                        page === "orders" && "text-indigo-500"
                      }`}
                    />

                    <span className="text-sm font-medium">Orders</span>
                  </div>
                  {/* Badge */}
                  <div className="flex flex-shrink-0 ml-2">
                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">
                      4
                    </span>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* product */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "products" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/admin/products"
                className={`block text-gray-200 hover:text-indigo-400 transition duration-150 ${
                  page === "products" && "text-indigo-400"
                }`}
              >
                <div className="flex flex-grow">
                  <LocalGroceryStore
                    className={`flex-shrink-0 h-6 w-6 mr-3 fill-current text-gray-400 ${
                      page === "products" && "text-indigo-500"
                    }`}
                  />
                  <span className="text-sm font-medium">Products</span>
                </div>
              </NavLink>
            </li>
            {/* Team */}

            {/* Settings */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "settings" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/admin/settings"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "settings" && "text-indigo-400"
                }`}
              >
                <div className="flex flex-grow">
                  <Settings
                    className={`flex-shrink-0 h-6 w-6 mr-3 fill-current text-gray-400 ${
                      page === "settings" && "text-indigo-500"
                    }`}
                  />
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
