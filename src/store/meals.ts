import { createSlice } from '@reduxjs/toolkit';


const meals = createSlice({
    name: 'slot',
    initialState: {
        slotState: {}
    },
    reducers: {
        addToSlot(state , action) {

        },
    },
});

export const mealsActions = meals.actions;

export default meals.reducer;