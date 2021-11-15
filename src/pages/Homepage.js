import React from "react";

import Products from "./../components/product/products/Products";
import PolicySection from "../components/policySection/PolicySection";

import Sliders from "../components/carousel/Slider";

import ProductByChoice from "../components/productByChoice/ProductByChoice";
import MegaNavbar from "./../components/navbar/megaNavbar/MegaNavbar";

const Homepage = () => {
  return (
    <div>
      <MegaNavbar />
      {/* <Sliders /> */}
      <Products />
      <ProductByChoice />
      <PolicySection />
    </div>
  );
};

export default Homepage;
