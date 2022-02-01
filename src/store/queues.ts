import { createSlice } from "@reduxjs/toolkit";

import { queuesNumber } from "../data/stationsNumber";
import { addToQueue, removeFromQueue } from "./reducers/queueReducer";

let initstate: Record<string, object[]> = {};

for (let i = 1; i <= queuesNumber; i++) {
  const queueName = `queue${i}State`;
  initstate[queueName] = new Array();
}

const queuesSlice = createSlice({
  name: "queues",
  initialState: initstate,
  reducers: {
    addToQueue: addToQueue,
    removeFromQueue: removeFromQueue,
  },
});

export const queuesActions = queuesSlice.actions;

export default queuesSlice.reducer;
