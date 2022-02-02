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
  order: object;
  customersState: object[];
}

export interface Order {
  products: Product[]
}

export interface Customer {
  id: string ;
  order: Order;
}

export interface CustomersState {
  customersState: Customer[];
}

export interface deliveryState {
  id: string;
  order: Order;
}

export type RootState = {
  slotsSlice: Customer[];
  queuesSlice: Customer[][];
  deliveriesSlice: deliveryState[];
  customersSlice: CustomersState;
};

export default store;

