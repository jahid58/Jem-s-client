import React, { useState, useEffect } from "react";
import AddProduct from "../addProduct/AddProduct";
import ManageProduct from "../manageProduct/ManageProduct";
import ProductDashboard from "../productChart.js/ProductDashboard";

const ProductAdministrator = () => {
  return (
    <div>
      <AddProduct modalTitle={"Add Product"}> </AddProduct>
      <ManageProduct />
      <ProductDashboard />
    </div>
  );
};

export default ProductAdministrator;
