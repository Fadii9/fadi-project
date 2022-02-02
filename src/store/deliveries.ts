import { createSlice } from "@reduxjs/toolkit";
import { deliveriesStateText } from "../data/stringsFile"

const deliveries = createSlice({
  name: deliveriesStateText.STATE_NAME,
  initialState: {
    delivery1State: {},
    delivery2State: {},
    delivery3State: {},
  },
  reducers: {
    addToDelivery1: (state, action) => {
      return { ...state, delivery1State: action.payload };
    },
    emptyDelivery1: (state) => {
      return { ...state, delivery1State: {} };
    },

    addToDelivery2: (state, action) => {
      return { ...state, delivery2State: action.payload };
    },
    emptyDelivery2: (state) => {
      return { ...state, delivery2State: {} };
    },

    addToDelivery3: (state, action) => {
      return { ...state, delivery3State: action.payload };
    },
    emptyDelivery3: (state) => {
      return { ...state, delivery3State: {} };
    },
  },
});

export const deliveriesActions = deliveries.actions;

export default deliveries.reducer;
