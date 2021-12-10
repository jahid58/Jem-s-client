import React from "react";

import Sliders from "../components/Home/slider/Slider";
import PolicySection from "./../components/Home/policySection/PolicySection";
import ProductByChoice from "../components/Home/productByChoice/ProductByChoice";
import Footer from "./../components/Home/Footer/Footer";
import MegaNavbar from "./../components/Home/navbar/megaNavbar/MegaNavbar";
import Products from "./../components/Home/product/products/Products";

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      <MegaNavbar />
      <Sliders />
      <Products />
      <ProductByChoice />
      <PolicySection />
      <Footer />
    </div>
  );
};

export default Homepage;
