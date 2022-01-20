import { createSlice } from '@reduxjs/toolkit';

const initialMealsState = {slot1:[], slot2:[] ,slot3:[] };

const mealsSlice = createSlice({
    name: 'meals',
    initialState: initialMealsState,
    reducers: {
        slot1Handler(state) {

        },
        slot2Handler(state) {

        },
        slot3Handler(state, action) {

        },

    },
});

export const mealsActions = mealsSlice.actions;

export default mealsSlice.reducer;