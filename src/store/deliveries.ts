import { createSlice, Slice } from "@reduxjs/toolkit";
import { deliveriesNumber } from "../data/stationsNumber";
import { DELIVERIES_STATE_TEXT } from "./constants/strings"
import { addToDelivery, removeFromDelivery } from "./reducers/deliveriesReducer";

let initstate: Record<string, object> = {};

for (let i = 1; i <= deliveriesNumber; i++) {
  const queueName = `${i}`;
  initstate[queueName] = {};
}

const deliveries: Slice<Record<string, object>>  = createSlice({
  name: DELIVERIES_STATE_TEXT.STATE_NAME,
  initialState: initstate,
  reducers: {
    addToDelivery: addToDelivery,
    emptyDelivery: removeFromDelivery,
  },
});

export const deliveriesActions = deliveries.actions;

export default deliveries.reducer;
