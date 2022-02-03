import { createSlice, Slice } from "@reduxjs/toolkit";

import { CUSTOMERS_STATE_TEXT } from "./constants/strings"
import customersData, { customersList } from "../data/customersData";

const customersSlice:  Slice<{customersState: customersList}>  = createSlice({
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
