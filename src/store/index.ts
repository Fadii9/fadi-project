import { configureStore } from "@reduxjs/toolkit";

import customersReducer from "./customers";
import slotsReducer from "./slots";
import deliveriesReducer from "./deliveries";
import queuesSlice from "./queues";
import { Product } from "../data/customersData";

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
  order: string[];
  customersState: Customer[];
}

export interface Customer {
  id: string ;
  name?: string;
  order: string[];
}

export interface CustomersState {
  customersState: Customer[];
}

export interface SlotState {
  id?: number;
  name?: string;
  order?: string[];
}

export interface DeliveryState {
  id?: number;
  name?: string;
  order?: string[];
}

export type RootState = {
  slotsSlice: Customer[];
  queuesSlice: Customer[][];
  deliveriesSlice: DeliveryState[];
  customersSlice: CustomersState;
};

export default store;

