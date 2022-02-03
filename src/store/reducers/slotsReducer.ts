import { PayloadAction } from "@reduxjs/toolkit";

export const addToSlot = (
  state: Record<string, object>,
  action: PayloadAction<{ slot: string; customer: object }>
) => {
  let stateName = action.payload.slot;
  let returnedState: Record<string, object> = { ...state };
  returnedState[stateName] = action.payload.customer;
  return returnedState;
};

export const emptySlot = (
  state: Record<string, object>,
  action: PayloadAction<{ slot: string }>
) => {
  let stateName = action.payload.slot;
  let returnedState: Record<string, object> = { ...state };
  returnedState[stateName] = {};
  return returnedState;
};
