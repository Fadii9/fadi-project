import { createSlice } from "@reduxjs/toolkit";

import { CUSTOMERS_STATE_TEXT } from "./constants/strings"
import customersData from "../data/customersData";

const customersSlice = createSlice({
  name: CUSTOMERS_STATE_TEXT.STATE_NAME,
  initialState: {
    customersState: customersData,
  },
  reducers: {
    takeOrder: (state) => {
      return { ...state, customersState: [...state.customersState.slice(1)] };
    },
  },

});

export const customersActions = customersSlice.actions;

export default customersSlice.reducer;
