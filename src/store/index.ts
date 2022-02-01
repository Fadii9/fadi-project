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
  order: any;
  delivery1State: any;
  delivery2State: any;
  delivery3State: any;
  customersState: any;
}

export type RootState = {
  [slotKey: string]: States;
  slotsSlice: States;
};

export default store;

