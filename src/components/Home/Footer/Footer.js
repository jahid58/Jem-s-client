import React from "react";
import "./Footer.css";

import FooterCol from "./FooterCol";

const Footer = () => {
  const Service = [
    { name: "about Jem's", link: "/jem's" },

    { name: "How to Buy", link: "//google.com/map" },
    { name: "Returns and refunds", link: "//google.com/map" },
    { name: "Join with Affilate", link: "//google.com/map" },
    { name: "Careers", link: "//google.com/map" },
    { name: "Sell on Jem's", link: "//google.com/map" },
    { name: "Investor Relations", link: "//google.com/map" },
    { name: "Blog", link: "//google.com/map" },
  ];

  const BuyWithUs = [
    { name: "Track your orders", link: "/emergency" },
    { name: "Privacy Policy", link: "/hire" },
    { name: "Terms and Conditions", link: "/office security" },
    { name: "Cookies policy", link: "/event security" },
    { name: "Service", link: "/hire" },
    { name: "FAQs", link: "/hire" },
    { name: "Contact Us", link: "/hire" },
  ];
  return (
    <div className="w-screen p-6 font-sch bg-gray-900 text-white">
      <div className=" md:grid grid-cols-2 gap-4">
        <div className="">
          <h1 className="text-xl font-semibold">NEWSLETTER SIGNUP</h1>
          <p>
            Sign up for our e-mail and be the first who know our special offers!
          </p>
          <div className="flex m-2">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="p-2  focus:outline-none   md:w-72  focus:ring focus:border-blue-300 text-black"
            />
            <div className="bg-blue-300  p-2 text-center cursor-pointer ">
              Join Us
            </div>
          </div>
          <p className="text-xl font-semibold">Address</p>
          <p>
            ADDRESS: 7895 Piermont Dr NE Albuquerque, NM 198866, United States
            of America
            <br /> PHONE: +566 4774 9930; +566 4774 9940 HOURS: all week from 9
            am to 9 pm
            <br /> E-MAIL: info@mydomain.com
          </p>
        </div>
        <div className="flex  justify-between ">
          <FooterCol key={1} menuTitle={"Buy With US"} menuItems={BuyWithUs} />

          <FooterCol key={4} menuTitle="Service" menuItems={Service} />
        </div>
        {/* </div> */}
      </div>
      <div className="copyRight text-center">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
