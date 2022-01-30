import { createSlice } from "@reduxjs/toolkit";

const deliveries = createSlice({
  name: "deliveries",
  initialState: {
    delivery1State: {},
    delivery2State: {},
    delivery3State: {},
    availbleDeliveryState: 0
  },
  reducers: {
    addToDelivery1: (state, action) => {
      return { ...state, delivery1State: action.payload };
    },
    emptyDelivery1: (state) => {
      return { ...state, delivery1State: {} };
    },
    localStorageToDelivery1: (state, action) => {
      return { ...state, delivery1State: action.payload };
    },

    addToDelivery2: (state, action) => {
      return { ...state, delivery2State: action.payload };
    },
    emptyDelivery2: (state) => {
      return { ...state, delivery2State: {} };
    },
    localStorageToDelivery2: (state, action) => {
      return { ...state, delivery2State: action.payload };
    },

    addToDelivery3: (state, action) => {
      return { ...state, delivery3State: action.payload };
    },
    emptyDelivery3: (state) => {
      return { ...state, delivery3State: {} };
    },
    localStorageToDelivery3: (state, action) => {
      return { ...state, delivery3State: action.payload };
    },

    setAvailbeDelivery: (state, action) => {
      return { ...state, availbleDeliveryState: action.payload };
    },
  },
});

export const deliveriesActions = deliveries.actions;

export default deliveries.reducer;
