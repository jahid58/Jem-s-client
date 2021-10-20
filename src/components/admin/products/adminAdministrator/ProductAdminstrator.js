import React, { useState, useEffect } from "react";
import AddProduct from "../addProduct/AddProduct";
import ManageProduct from "../manageProduct/ManageProduct";
import ProductDashboard from "../productChart.js/ProductDashboard";

const ProductAdministrator = () => {
  return (
    <div>
      <ProductDashboard />

      <ManageProduct />
    </div>
  );
};

export default ProductAdministrator;
