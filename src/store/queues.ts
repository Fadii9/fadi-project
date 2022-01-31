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
    cancelQueue1: (state) => {
      let [tempQueue1 ,tempQueue2] = [new Array(),new Array()];
      state.queue1State.map((customer: {}) => {state.queue1State.length%2 == 0 ? tempQueue1.push(customer) : tempQueue2.push(customer)})
      if (tempQueue1.length == 0 && tempQueue2.length != 0 ){
        return { ...state, queue1State: [] ,queue2State: [...state.queue2State, tempQueue2]};
      } else {
        return { ...state, queue1State: [] ,queue2State: [...state.queue2State, tempQueue1] ,queue3State: [...state.queue3State, tempQueue2]};
      }    },

    localStorageToQueue1: (state, action) => {
      return { ...state, queue1State: action.payload };
    },

    addToQueue2: (state, action) => {
      return { ...state, queue2State: [...state.queue2State, action.payload] };
    },
    removeFromQueue2: (state) => {
      return { ...state, queue2State: [...state.queue2State.slice(1)] };
    },
    cancelQueue2: (state) => {
      let [tempQueue1 ,tempQueue2] = [new Array(),new Array()];
      state.queue2State.map((customer: {}) => {state.queue2State.length%2 == 0 ? tempQueue1.push(customer) : tempQueue2.push(customer)})
      if (tempQueue1.length == 0 && tempQueue2.length != 0 ){
        return { ...state, queue2State: [] ,queue1State: [...state.queue1State, tempQueue2]};
      } else {
        return { ...state, queue2State: [] ,queue1State: [...state.queue1State, tempQueue1] ,queue3State: [...state.queue3State, tempQueue2]};
      }    },

    localStorageToQueue2: (state, action) => {
      return { ...state, queue2State: action.payload };
    },

    addToQueue3: (state, action) => {
      return { ...state, queue3State: [...state.queue3State, action.payload] };
    },
    removeFromQueue3: (state) => {
      return { ...state, queue3State: [...state.queue3State.slice(1)] };
    },
    cancelQueue3: (state) => {
      let [tempQueue1 ,tempQueue2] = [new Array(),new Array()];
      state.queue3State.map((customer: {}) => {state.queue3State.length%2 == 0 ? tempQueue1.push(customer) : tempQueue2.push(customer)})
      if (tempQueue1.length == 0 && tempQueue2.length != 0 ){
        return { ...state, queue3State: [] ,queue1State: [...state.queue1State, tempQueue2]};
      } else {
        return { ...state, queue3State: [] ,queue1State: [...state.queue1State, tempQueue1] ,queue2State: [...state.queue2State, tempQueue2]};
      }
    },

    localStorageToQueue3: (state, action) => {
      return { ...state, queue3State: action.payload };
    },
    addVIP: (state, action) => {
      return {
        ...state,
        queue1State: [action.payload].concat(state.queue1State),
      };
    },
  },
});

export const queuesActions = queuesSlice.actions;

export default queuesSlice.reducer;
