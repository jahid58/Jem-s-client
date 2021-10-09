import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faPeopleArrows, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";

const AdminSidebar = () => {
  const history = useHistory();

  return (
    <div class=" md:w-1/5  w-screen h-full">
      <div className="  bg-gray-800 text-white ">
        <button
          className="group  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl"
          onClick={() => history.push("/addProduct")}
        >
          <FontAwesomeIcon
            className="text-light"
            icon={faPlus}
          ></FontAwesomeIcon>{" "}
          Add Product
        </button>
        <br />
        <button
          className="group  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl "
          onClick={() => history.push("/addAdmin")}
        >
          <FontAwesomeIcon
            className="text-light"
            icon={faPeopleArrows}
          ></FontAwesomeIcon>{" "}
          Make admin
        </button>
        <br />
        <button
          className="group  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl"
          onClick={() => history.push("/manageProduct")}
        >
          <FontAwesomeIcon
            className="text-light"
            icon={faWindows}
          ></FontAwesomeIcon>{" "}
          Manage Product
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
