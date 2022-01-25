import { createSlice } from '@reduxjs/toolkit';


const slot1Slice = createSlice({
    name: 'slot1',
    initialState: {
        slot1State: {}
    },
    reducers: {
        addToSlot(state , action) {
            return {...state,
                slot1State: action.payload
            }
        },
        emptySlot: (state) =>{
            return {...state,
                slot1State:
                    {}

            }
        },

    },
});

export const slot1Actions = slot1Slice.actions;

export default slot1Slice.reducer;