import { createSlice } from '@reduxjs/toolkit';

const initialDeliveryState = {delivery1:[], delivery2:[] , delivery3:[] };

const delivery = createSlice({
    name: 'delivery',
    initialState: initialDeliveryState,
    reducers: {
        addToDelivery(state , action) {

        },

    },
});

export const deliveryActions = delivery.actions;

export default delivery.reducer;