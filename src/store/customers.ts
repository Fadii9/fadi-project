import { createSlice } from '@reduxjs/toolkit';

import customersData from "../data/customersData"

console.log(customersData)

const customers = createSlice({
    name: 'customers',
    initialState: {
        waitingCustomers: customersData,
        queue1:[] ,
        queue2:[] ,
        queue3:[] ,
    },
    reducers: {
        addToQueue1: (state, action) => {
        },
        addToQueue2: (state , action) => {

        },
        addToQueue3: (state, action) =>{

        },
        TakeOrder(state, action) {

        },
    },
});

export const customersActions = customers.actions;

export default customers.reducer;