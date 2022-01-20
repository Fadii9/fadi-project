import { createSlice } from '@reduxjs/toolkit';

const initialCustomersState = { waitingCustomers: 0, queue1:[], queue2:[] ,queue3:[] };

const customersSlice = createSlice({
    name: 'customers',
    initialState: initialCustomersState,
    reducers: {
        addToQueue1(state) {

        },
        addToQueue2(state) {

        },
        addToQueue3(state) {

        },
        TakeOrder(state) {

        },
    },
});

export const customersActions = customersSlice.actions;

export default customersSlice.reducer;