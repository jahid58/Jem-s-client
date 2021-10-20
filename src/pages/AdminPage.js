import React from "react";
import AddProduct from "../components/admin/addProduct/AddProduct";
import Header from "../components/admin/header/Header";
import Sidebar from "./../components/admin/adminSidebar/Sidebar";

const AdminPage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        {" "}
        <Sidebar></Sidebar>
        <AddProduct />
      </div>
    </div>
  );
};

export default AdminPage;
