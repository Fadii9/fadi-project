import { createSlice, Slice } from "@reduxjs/toolkit";

import { SLOT_STATE_TEXT } from "./constants/strings";
import { slotsNumber } from "../data/stationsNumber";
import { addToSlot, emptySlot } from "./reducers/slotsReducer";

let initstate: Record<string, object> = {};

for (let i = 1; i <= slotsNumber; i++) {
  const queueName = `${i}`;
  initstate[queueName] = {};
}

const slotsSlice: Slice<Record<string, object>> = createSlice({
  name: SLOT_STATE_TEXT.STATE_NAME,
  initialState: initstate,
  reducers: {
    addToSlot: addToSlot,
    emptySlot: emptySlot,
    },
});

export const slotsActions = slotsSlice.actions;

export default slotsSlice.reducer;
