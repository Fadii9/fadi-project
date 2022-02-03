import { createSlice, Slice } from "@reduxjs/toolkit";
import { SLOT_STATE_TEXT } from "./constants/strings";
import { slotsNumber } from "../data/stationsNumber";
import { addToSlot, emptySlot } from "./reducers/slotsReducer";
import { SlotState } from ".";
import {createInitialSlotsState } from "./utils/functions"

const initialState = createInitialSlotsState(slotsNumber)

const slotsSlice: Slice = createSlice({
  name: SLOT_STATE_TEXT.STATE_NAME,
  initialState: initialState,
  reducers: {
    addToSlot: addToSlot,
    emptySlot: emptySlot,
    },
});

export const slotsActions = slotsSlice.actions;

export default slotsSlice.reducer;
