import { PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../index";

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
