import { createSlice } from '@reduxjs/toolkit';

const initialDeliveryState = {delivery1:[], delivery2:[] , delivery3:[] };

const delivery = createSlice({
    name: 'delivery',
    initialState: initialDeliveryState,
    reducers: {
        addToDelivery1(state , action) {

        },
        addToDelivery2(state , action) {

        },
        addToDelivery3(state, action) {

        },

    },
});

export const deliveryActions = delivery.actions;

export default delivery.reducer;