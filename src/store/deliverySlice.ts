import { createSlice } from '@reduxjs/toolkit';

const initialDeliveryState = {delivery1:[], delivery2:[] , delivery3:[] };

const deliverySlice = createSlice({
    name: 'delivery',
    initialState: initialDeliveryState,
    reducers: {
        delivery1Handler(state) {

        },
        delivery2Handler(state) {

        },
        delivery3Handler(state, action) {

        },

    },
});

export const deliveryActions = deliverySlice.actions;

export default deliverySlice.reducer;