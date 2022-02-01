import { createSlice } from "@reduxjs/toolkit";

import { slotsNumber } from "../data/stationsNumber";
import { addToSlot, emptySlot } from "./reducers/slotsReducer";

let initstate: Record<string, object> = {};

for (let i = 1; i <= slotsNumber; i++) {
  const queueName = `slot${i}State`;
  initstate[queueName] = new Object();
}

const slotsSlice = createSlice({
  name: "slots",
  initialState: initstate,
  reducers: {
    addToSlot: addToSlot,
    emptySlot: emptySlot,
    },
});

export const slotsActions = slotsSlice.actions;

export default slotsSlice.reducer;
