import {CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Customer, DeliveryState, SlotState } from "../index";

export const addToSlot: CaseReducer<Record<number, SlotState>, PayloadAction<{ slot: number; customer: SlotState }>> = (
  state: Record<number, SlotState>,
  action: PayloadAction<{ slot: number; customer: SlotState }>
) => {
  const stateName = action.payload.slot;
  const returnedState: Record<number, SlotState> = { ...state };
  returnedState[stateName] = action.payload.customer;
  return returnedState;
};

export const emptySlot = (
  state: Record<number, DeliveryState>,
  action: PayloadAction<{ slot: number }>
) => {
  const stateName = action.payload.slot;
  const returnedState: Record<number, DeliveryState> = { ...state };
  returnedState[stateName] = {};
  return returnedState;
};
