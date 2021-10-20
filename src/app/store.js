import { configureStore } from "@reduxjs/toolkit";
import { addUser } from "../redux/reducers/reducers";

export const store = configureStore({
  reducer: {
    user: addUser,
  },
});
