import { createSlice } from '@reduxjs/toolkit';

import customersData from "../data/customersData"



// @ts-ignore
const customersSlice = createSlice({
    name: 'customers',
    initialState: {
        customersState: customersData,
    },
    reducers: {
        takeOrder: (state) =>{
            return {...state,
                customersState: [
                    ...state.customersState.slice(1, -1)
                ]
            }
        },
   }
});

export const customersActions = customersSlice.actions;

export default customersSlice.reducer;