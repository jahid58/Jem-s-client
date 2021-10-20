import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="sm:mr-12 ">
      <h6 className="text-2xl  ">{props.menuTitle ? props.menuTitle : " "}</h6>
      <div className="h-0.5 mt-1 w-32 bg-blue-900"></div>
      <ul className=" mt-3">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
