import React from "react";
import ProductOfChoice from "./ProductOfChoice/ProductOfChoice";
import HomeSidebar from "./homeSidebar/HomeSidebar";

const ProductByChoice = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <HomeSidebar />
      <ProductOfChoice />
    </div>
  );
};

export default ProductByChoice;
