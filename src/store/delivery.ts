import { createSlice } from '@reduxjs/toolkit';


const delivery = createSlice({
    name: 'delivery',
    initialState: {
        delivery1State: {}
    },
    reducers: {
        addToDelivery(state , action) {

        },
    },
});

export const deliveryActions = delivery.actions;

export default delivery.reducer;