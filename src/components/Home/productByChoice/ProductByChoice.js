import React, { useEffect, useState } from "react";
import ProductOfChoice from "./ProductOfChoice/ProductOfChoice";
import HomeSidebar from "./homeSidebar/HomeSidebar";

const ProductByChoice = () => {
  return (
    <div className="flex flex-wrap  full sm:h-lg sm:flex-nowrap bg-gray-300">
      <HomeSidebar />
      <ProductOfChoice />
    </div>
  );
};

export default ProductByChoice;
