import { createSlice } from '@reduxjs/toolkit';


const queue1Slice = createSlice({
    name: 'queue1',
    initialState: {
        queue1State:  new Array()
    },
    reducers: {
        addToQueue1: (state, action) => {
            return { ...state, queue1State: [...state.queue1State, action.payload] 
            };
        },
        removeFromQueue1: (state) =>{
            return {...state,
                queue1State: [
                    ...state.queue1State.slice(1, -1)
                ]
            }
        },
    }
});

export const queue1Actions = queue1Slice.actions;

export default queue1Slice.reducer;