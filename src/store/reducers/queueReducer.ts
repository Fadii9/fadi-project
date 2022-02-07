import { PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../index";
import { cancelQueueFunction } from "../utils/functions";

export type QueuesState = Record<number, Customer[]>;
type AddToQueueAction = PayloadAction<{
  queue: number;
  firstCustomer: Customer;
}>
type AddVipAction = PayloadAction<{ queue: number; firstCustomer: Customer }>;
type RemoveOrCancelQueueAction = PayloadAction<{ queue: number }>;

export const addToQueue = (state: QueuesState, action: AddToQueueAction) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesState = state;
  returnedState[stateName] = [
    ...returnedState[stateName],
    action.payload.firstCustomer,
  ];
  return returnedState;
};

export const removeFromQueue = (
  state: QueuesState,
  action: RemoveOrCancelQueueAction
) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesState = state;
  returnedState[stateName] = returnedState[stateName].slice(1);
  return returnedState;
};

export const addVip = (
    state: QueuesState,
    action: AddVipAction
) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesState = state ;
  returnedState[stateName].unshift(action.payload.firstCustomer)
  return returnedState;
};

export const cancelQueue = (
    state: QueuesState,
    action: RemoveOrCancelQueueAction
) => {
  const returnedState = cancelQueueFunction(state, action.payload.queue)
  return returnedState;
};
