import { configureStore } from "@reduxjs/toolkit";

import customersReducer from "./customers";
import slot1Reducer from "./slot1";
import delivery1Reducer from "./delivery1";
import queue1Slice from "./queue1";

const store = configureStore({
  reducer: {
    delivery1Slice: delivery1Reducer,
    queue1Slice: queue1Slice,
    customersSlice: customersReducer,
    slot1Slice: slot1Reducer,
  },
});

export interface States {
  id: string;
  order: any;
  slot1State: any;
  queue1State: any;
  customersState: any;
  delivery1State: any;
}

export type RootState = {
  [slotKey: string]: States;
};

export default store;
