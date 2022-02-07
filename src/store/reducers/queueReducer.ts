import { PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../index";
import { queuesNumber } from "../../data/stationsNumber";
import { cancelQueueFunction } from "../utils/functions";

type QueuesSlice = Record<number, Customer[]>;
type AddToQueueAction = PayloadAction<{
  queue: number;
  firstCustomer: Customer;
}>
type AddVipAction = PayloadAction<{ queue: number; firstCustomer: Customer }>;
type RemoveOrCancelQueueAction = PayloadAction<{ queue: number }>;


export const addToQueue = (
  state: QueuesSlice,
  action: AddToQueueAction
) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesSlice = state ;
  returnedState[stateName] = [ ...returnedState[stateName], action.payload.firstCustomer ];
  return returnedState;
};

export const removeFromQueue = (
  state: QueuesSlice,
  action: RemoveOrCancelQueueAction
) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesSlice = state ;
  returnedState[stateName] = returnedState[stateName].slice(1);
  return returnedState;
};

export const addVip = (
    state: QueuesSlice,
    action: AddVipAction
) => {
  const stateName = action.payload.queue;
  const returnedState: QueuesSlice = state ;
  returnedState[stateName].unshift(action.payload.firstCustomer)
  return returnedState;
};

export const cancelQueue = (
    state: QueuesSlice,
    action: RemoveOrCancelQueueAction
) => {
  // const returnedState = cancelQueueFunction(state, action.payload.queue)
  const stateName = action.payload.queue;
  const returnedState: QueuesSlice = state ;
  returnedState[stateName] = []
  return returnedState;
};
