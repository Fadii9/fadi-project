import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { SlotState } from "../index";

type SlotsSlice = Record<number, SlotState>;
type AddtoSlot = CaseReducer<
  Record<number, SlotState>,
  PayloadAction<{ slot: number; customer: SlotState }>
>
type AddtoSlotAction = PayloadAction<{ slot: number; customer: SlotState }>
type EmptySlotAction = PayloadAction<{ slot: number }>

export const addToSlot: AddtoSlot = (
  state: SlotsSlice,
  action: AddtoSlotAction
) => {
  const stateName = action.payload.slot;
  const returnedState: SlotsSlice = { ...state };
  returnedState[stateName] = action.payload.customer;
  return returnedState;
};

export const emptySlot = (
  state: SlotsSlice,
  action: EmptySlotAction
) => {
  const stateName = action.payload.slot;
  const returnedState: SlotsSlice = { ...state };
  returnedState[stateName] = {};
  return returnedState;
};
