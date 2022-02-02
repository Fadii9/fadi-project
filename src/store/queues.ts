import { createSlice } from "@reduxjs/toolkit";

import { queuesStateText } from "../data/stringsFile";
import { queuesNumber } from "../data/stationsNumber";
import { addToQueue, removeFromQueue } from "./reducers/queueReducer";

let initstate: Record<string, object[]> = {};

for (let i = 1; i <= queuesNumber; i++) {
  const queueName = `queue${i}State`;
  initstate[queueName] = new Array();
}

const queuesSlice = createSlice({
  name: queuesStateText.STATE_NAME,
  initialState: initstate,
  reducers: {
    addToQueue: addToQueue,
    removeFromQueue: removeFromQueue,
  },
});

export const queuesActions = queuesSlice.actions;

export default queuesSlice.reducer;
