import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../redux/reducers/reducers";

export const store = configureStore({
  reducer: {
    store: reducers,
  },
});
