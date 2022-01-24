import { configureStore } from '@reduxjs/toolkit';

import customersReducer from './customers';
import slot1Reducer from './slot1';
import deliveryReducer from './delivery';
import queue1Slice from './queue1';



export default configureStore({
    reducer: {
        delivery: deliveryReducer,
        queue1Slice: queue1Slice,
        customersSlice: customersReducer,
        slot1Slice: slot1Reducer,
    }
});

