import { PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../index";
import { queuesNumber } from "../../data/stationsNumber";
import { cancelQueueFunction } from "../utils/functions";


export const addToQueue = (
  state: Record<string, Customer[]>,
  action: PayloadAction<{ queue: number; firstCustomer: Customer }>
) => {
  const stateName = action.payload.queue;
  const returnedState: Record<number, Customer[]> = state ;
  returnedState[stateName] = [ ...returnedState[stateName], action.payload.firstCustomer ];
  return returnedState;
};

export const removeFromQueue = (
  state: Record<number, Customer[]>,
  action: PayloadAction<{ queue: number }>
) => {
  const stateName = action.payload.queue;
  const returnedState: Record<number, Customer[]> = state ;
  returnedState[stateName] = returnedState[stateName].slice(1);
  return returnedState;
};

export const addVip = (
    state: Record<string, Customer[]>,
    action: PayloadAction<{ queue: number; firstCustomer: Customer }>
) => {
  const stateName = action.payload.queue;
  const returnedState: Record<number, Customer[]> = state ;
  returnedState[stateName].unshift(action.payload.firstCustomer)
  return returnedState;
};

export const cancelQueue = (
    state: Record<string, Customer[]>,
    action: PayloadAction<{ queue: number }>
) => {
  // const returnedState = cancelQueueFunction(state, action.payload.queue)
  const stateName = action.payload.queue;
  const returnedState: Record<number, Customer[]> = state ;
  returnedState[stateName] = []
  return returnedState;
};
