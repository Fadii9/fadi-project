import { createSlice } from "@reduxjs/toolkit";

const delivery1 = createSlice({
  name: "delivery1",
  initialState: {
    delivery1State: {},
  },
  reducers: {
    addToDelivery1: (state, action) => {
      return { ...state, delivery1State: action.payload };
    },
    emptyDelivery1: (state) => {
      return { ...state, delivery1State: {} };
    },
  },
});

export const delivery1Actions = delivery1.actions;

export default delivery1.reducer;
