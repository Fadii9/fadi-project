import { createSlice } from "@reduxjs/toolkit";

import customersData from "../data/customersData";

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customersState: customersData,
  },
  reducers: {
    takeOrder: (state) => {
      return { ...state, customersState: [...state.customersState.slice(1)] };
    },

    localStorageToWating: (state, action) => {
      return { ...state, customersState: action.payload };
    },
  },
});

export const customersActions = customersSlice.actions;

export default customersSlice.reducer;
