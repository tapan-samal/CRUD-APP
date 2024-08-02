import { configureStore } from "@reduxjs/toolkit";
import userDetail  from "../features/clientDetailSlice";

export const store = configureStore({
  reducer: {
    User: userDetail,
  },
});
