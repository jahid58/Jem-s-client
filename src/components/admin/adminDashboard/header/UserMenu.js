import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../../utils/Transition";

import { logout } from "./../../../../redux/actions/action";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";

function UserMenu({ user }) {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  return (
    <div
      className="relative inline-flex z-50"
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onMouseOver={() => setDropdownOpen(true)}
        aria-expanded={dropdownOpen}
      >
        <div className="flex flex-col justify-center items-center my-2">
          <Avatar className="text-sm font-light  rounded-full" />{" "}
          <div className="flex items-center truncate">
            {!user.name && <p>Account</p>}
            <p className> {user?.name} </p>
            <svg
              className="w-2 h-2 flex-shrink-0 ml-1 fill-current text-gray-400"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </button>

      <Transition
        className=" top-16 z-10 absolute  right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          className="z-50"
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
            <Link to="/admin">
              <div className="text-xs text-gray-500 italic">Administrator</div>
            </Link>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/home"
                onClick={() => dispatch(logout())}
              >
                Sign Out
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
              >
                Sing In
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
