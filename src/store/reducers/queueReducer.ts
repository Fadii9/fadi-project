import { PayloadAction } from "@reduxjs/toolkit";

export const addToQueue = (
  state: Record<string, object[]>,
  action: PayloadAction<{ queue: string; firstCustomer: object }>
) => {
  let stateName = action.payload.queue;
  let returnedState: Record<string, object[]> = state ;
  returnedState[stateName] = [ ...returnedState[stateName], action.payload.firstCustomer ];
  return returnedState;
};

export const removeFromQueue = (
  state: Record<string, object[]>,
  action: PayloadAction<{ queue: string }>
) => {
  let stateName = action.payload.queue;
  let returnedState: Record<string, object[]> = state ;
  returnedState[stateName] = returnedState[stateName].slice(1);
  return returnedState;
};
