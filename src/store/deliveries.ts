import { createSlice } from "@reduxjs/toolkit";
import { deliveriesNumber } from "../data/stationsNumber";
import { deliveriesStateText } from "../data/stringsFile"
import { addToDelivery, removeFromDelivery } from "./reducers/deliveriesReducer";

let initstate: Record<string, object> = {};

for (let i = 1; i <= deliveriesNumber; i++) {
  const queueName = `${i}`;
  initstate[queueName] = new Object();
}

const deliveries = createSlice({
  name: deliveriesStateText.STATE_NAME,
  initialState: initstate,
  reducers: {
    addToDelivery: addToDelivery,
    emptyDelivery: removeFromDelivery,
  },
});

export const deliveriesActions = deliveries.actions;

export default deliveries.reducer;
