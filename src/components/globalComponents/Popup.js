import { DoneOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";

const Popup = ({ message }) => {
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  }, [message]);

  return (
    <div className="sticky bottom-0 float-right justify-center items-center p-2 ">
      {popupMessage?.length && (
        <div className="flex bg-gray-300 m-2 rounded-md w-full">
          <div className="bg-green-900 rounded-full text-white current-fill h-6 m-2">
            <DoneOutlined></DoneOutlined>
          </div>{" "}
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Popup;
