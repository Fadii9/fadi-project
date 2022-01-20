import { createSlice } from '@reduxjs/toolkit';

const initialMealsState = {slot1:[], slot2:[] ,slot3:[] };

const meals = createSlice({
    name: 'meals',
    initialState: initialMealsState,
    reducers: {
        addToSlot1(state , action) {

        },
        addToSlot2(state , action) {

        },
        addToSlot3(state, action) {

        },

    },
});

export const mealsActions = meals.actions;

export default meals.reducer;