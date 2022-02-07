import { createSlice, Slice } from "@reduxjs/toolkit";
import { DELIVERIES_STATE_TEXT } from "./constants/strings";
import { queuesNumber } from "../data/stationsNumber";
import { addToQueue, addVip, cancelQueue, removeFromQueue } from "./reducers/queueReducer";
import { createInitialQueuesState } from "./utils/functions";

const initialState = createInitialQueuesState(queuesNumber)

const queuesSlice: Slice = createSlice({
  name: DELIVERIES_STATE_TEXT.STATE_NAME,
  initialState: initialState,
  reducers: {
    addToQueue: addToQueue,
    addVip: addVip,
    removeFromQueue: removeFromQueue,
    cancelQueue: cancelQueue,
  },
});

export const queuesActions = queuesSlice.actions;

export default queuesSlice.reducer;
