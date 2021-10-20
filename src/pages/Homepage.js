import React from "react";
import Navbar from "../components/navbar/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Products from "./../components/product/products/Products";
import PolicySection from "../components/policySection/PolicySection";
import MyCarousel from "../components/carousel/MyCarousel";
import Sliders from "../components/carousel/Slider";
import HomeSidebar from "./../components/homeSidebar/HomeSidebar";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Sliders /> */}
      {/* <MyCarousel /> */}
      <Products />
      <HomeSidebar />
      <PolicySection />
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
