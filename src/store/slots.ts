import { createSlice } from "@reduxjs/toolkit";

const slotsSlice = createSlice({
  name: "slots",
  initialState: {
      slot1State: {},
      slot2State: {},
      slot3State: {},
  },
  reducers: {
    addToSlot1(state, action) {
      return { ...state, slot1State: action.payload };
    },
    emptySlot1: (state) => {
      return { ...state, slot1State: {} };
    },
    localStorageToSlot1: (state, action) => {
      return { ...state, slot1State: action.payload };
    },
    addToSlot2(state, action) {
      return { ...state, slot2State: action.payload };
    },
    emptySlot2: (state) => {
      return { ...state, slot2State: {} };
    },
    localStorageToSlot2: (state, action) => {
      return { ...state, slot2State: action.payload };
    },
    addToSlot3(state, action) {
      return { ...state, slot3State: action.payload };
    },
    emptySlot3: (state) => {
      return { ...state, slot3State: {} };
    },
    localStorageToSlot3: (state, action) => {
      return { ...state, slot3State: action.payload };
    },
  },
});

export const slotsActions = slotsSlice.actions;

export default slotsSlice.reducer;
