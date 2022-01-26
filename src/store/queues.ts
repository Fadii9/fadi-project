import { createSlice } from "@reduxjs/toolkit";

const queuesSlice = createSlice({
  name: "queues",
  initialState: {
    queue1State: new Array(),
    queue2State: new Array(),
    queue3State: new Array(),
  },
  reducers: {
    addToQueue1: (state, action) => {
      return { ...state, queue1State: [...state.queue1State, action.payload] };
    },
    removeFromQueue1: (state) => {
      return { ...state, queue1State: [...state.queue1State.slice(1)] };
    },

    addToQueue2: (state, action) => {
      return { ...state, queue2State: [...state.queue2State, action.payload] };
    },
    removeFromQueue2: (state) => {
      return { ...state, queue2State: [...state.queue2State.slice(1)] };
    },

    addToQueue3: (state, action) => {
      return { ...state, queue3State: [...state.queue3State, action.payload] };
    },
    removeFromQueue3: (state) => {
      return { ...state, queue3State: [...state.queue3State.slice(1)] };
    },
  },
});

export const queuesActions = queuesSlice.actions;

export default queuesSlice.reducer;
