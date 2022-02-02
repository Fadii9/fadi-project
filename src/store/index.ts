import { configureStore } from "@reduxjs/toolkit";

import customersReducer from "./customers";
import slotsReducer from "./slots";
import deliveriesReducer from "./deliveries";
import queuesSlice from "./queues";

const store = configureStore({
  reducer: {
    deliveriesSlice: deliveriesReducer,
    queuesSlice: queuesSlice,
    customersSlice: customersReducer,
    slotsSlice: slotsReducer,
  },
});

export interface States {
  id: string;
  order: object;
  slotName?: string;
  customersState: object[];
}

export type RootState = {
  [slotName: string]: States;
  slotsSlice: States;
  queueSlice: States;
};

export default store;

