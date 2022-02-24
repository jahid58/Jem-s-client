import React, { useEffect } from "react";

import Sliders from "../components/Home/slider/Slider";
import PolicySection from "./../components/Home/policySection/PolicySection";
import ProductByChoice from "../components/Home/productByChoice/ProductByChoice";
import Footer from "./../components/Home/Footer/Footer";
import MegaNavbar from "./../components/Home/navbar/megaNavbar/MegaNavbar";
import Products from "./../components/Home/product/products/Products";
import { useSelector } from "react-redux";
import Popup from "../components/globalComponents/Popup";

const Homepage = () => {
  const store = useSelector((state) => state.store);

  useEffect(() => console.log(store.message), [store.message]);

  return (
    <div className="bg-gray-100 ">
      <MegaNavbar />
      <Sliders />
      <Products />
      <ProductByChoice />
      <PolicySection />
      <Footer />
      <Popup message={store.message} />
    </div>
  );
};

export default Homepage;
