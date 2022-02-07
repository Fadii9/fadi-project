import { PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../index";

type QueuesSlice = Record<number, Customer[]>;
type AddToQueueAction = PayloadAction<{
  queue: number;
  firstCustomer: Customer;
}>;
type RemoveFromQueueAction = PayloadAction<{ queue: number }>;

export const addToQueue = (state: QueuesSlice, action: AddToQueueAction) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesSlice = state;
  returnedState[stateName] = [
    ...returnedState[stateName],
    action.payload.firstCustomer,
  ];
  return returnedState;
};

export const removeFromQueue = (
  state: QueuesSlice,
  action: RemoveFromQueueAction
) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesSlice = state;
  returnedState[stateName] = returnedState[stateName].slice(1);
  return returnedState;
};
