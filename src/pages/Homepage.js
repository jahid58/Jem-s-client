import React from "react";
import Navbar from "../components/navbar/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Products from "./../components/product/products/Products";
import PolicySection from "../components/policySection/PolicySection";
import MyCarousel from "../components/carousel/MyCarousel";
import Sliders from "../components/carousel/Slider";
import HomeSidebar from "../components/productByChoice/homeSidebar/HomeSidebar";
import ProductByChoice from "../components/productByChoice/ProductByChoice";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Sliders /> */}
      {/* <MyCarousel /> */}
      <Products />
      <ProductByChoice />
      <PolicySection />
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
