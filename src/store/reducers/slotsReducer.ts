import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Customer, DeliveryState, SlotState } from "../index";

export type SlotsState = Record<number, SlotState>;
type AddtoSlot = CaseReducer<
    Record<number, SlotState>,
    PayloadAction<{ slot: number; customer: SlotState }>
    >
type AddtoSlotAction = PayloadAction<{ slot: number; customer: SlotState }>
type EmptySlotAction = PayloadAction<{ slot: number }>

export const addToSlot: AddtoSlot = (
  state: SlotsState,
  action: AddtoSlotAction
) => {
  const stateName = action.payload.slot;
  const returnedState: SlotsState = { ...state };
  returnedState[stateName] = action.payload.customer;
  return returnedState;
};

export const emptySlot = (
    state: SlotsState,
    action: EmptySlotAction
) => {
  const stateName = action.payload.slot;
  const returnedState: SlotsState = { ...state };
  returnedState[stateName] = {};
  return returnedState;
};
