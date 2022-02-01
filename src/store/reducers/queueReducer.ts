import { PayloadAction } from "@reduxjs/toolkit";

export const addToQueue = (
  state: object,
  action: PayloadAction<{ queue: string; firstCustomer: object }>
) => {
  let stateName = action.payload.queue;
  let returnedState: any = { ...state };
  returnedState[stateName] = [...returnedState[stateName], action.payload.firstCustomer];
  return returnedState;
};

export const removeFromQueue = (
  state: object,
  action: PayloadAction<{ queue: string }>
) => {
  let stateName = action.payload.queue;
  let returnedState: any = { ...state };
  returnedState[stateName] = returnedState[stateName].slice(1);
  return returnedState;
};
