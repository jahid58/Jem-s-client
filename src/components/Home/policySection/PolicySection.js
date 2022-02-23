import React from "react";
import {
  Autorenew,
  LocalShippingOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
const PolicySection = () => {
  return (
    <div className="flex m-4 font-serif  border-2 justify-around items-center">
      <div className=" text-center  p-4">
        <SupportAgentOutlined style={{ fontSize: "40px", color: "green" }} />
        <div>
          <p className="text-xl ">Support 24/7</p>
          <p className="text-gray-500 font-Roboto text-sm">
            Contact us in 24 hours in ,and 7 day in a week
          </p>
        </div>
      </div>
      <div className="text-center p-4">
        <Autorenew style={{ fontSize: "40px", color: "green" }} />
        <div>
          <p className="text-xl ">30 Days return</p>
          <p className="text-gray-500 font-Roboto text-sm">
            Simply return in within 24 days in a week
          </p>
        </div>
      </div>
      <div className="text-center p-4">
        <LocalShippingOutlined style={{ fontSize: "40px", color: "green" }} />
        <div>
          <p className="text-xl ">Free Shipping </p>
          <p className="text-gray-500 font-Roboto text-sm">
            {" "}
            Free shipping on all US order or order above $99
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
