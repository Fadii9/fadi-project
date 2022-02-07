import { createSlice, Slice } from "@reduxjs/toolkit";
import { deliveriesNumber } from "../data/stationsNumber";
import { DELIVERIES_STATE_TEXT } from "./constants/strings"
import { createInitialDeliverisState } from "./utils/functions";
import { addToDelivery, removeFromDelivery } from "./reducers/deliveriesReducer";
import { Customer } from "./index"

let initState = createInitialDeliverisState(deliveriesNumber)

const deliveries: Slice  = createSlice({
  name: DELIVERIES_STATE_TEXT.STATE_NAME,
  initialState: initState,
  reducers: {
    addToDelivery: addToDelivery,
    emptyDelivery: removeFromDelivery,
  },
});

export const deliveriesActions = deliveries.actions;

export default deliveries.reducer;
