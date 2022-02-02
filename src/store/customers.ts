import { createSlice } from "@reduxjs/toolkit";

import { customersStateText } from "../data/stringsFile"
import customersData from "../data/customersData";

const customersSlice = createSlice({
  name: customersStateText.STATE_NAME,
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
