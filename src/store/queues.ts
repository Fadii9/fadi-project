import { createSlice } from "@reduxjs/toolkit";

import { DELIVERIES_STATE_TEXT } from "./constants/strings";
import { queuesNumber } from "../data/stationsNumber";
import { addToQueue, removeFromQueue } from "./reducers/queueReducer";

let initstate: Record<string, object[]> = {};

for (let i = 1; i <= queuesNumber; i++) {
  const queueName = `${i}`;
  initstate[queueName] = [];
}

const queuesSlice = createSlice({
  name: DELIVERIES_STATE_TEXT.STATE_NAME,
  initialState: initstate,
  reducers: {
    addToQueue: addToQueue,
    removeFromQueue: removeFromQueue,
  },
});

export const queuesActions = queuesSlice.actions;

export default queuesSlice.reducer;
