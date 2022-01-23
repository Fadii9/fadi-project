import { configureStore } from '@reduxjs/toolkit';

import customersReducer from './customers';
import mealsReducer from './meals';
import deliveryReducer from './delivery';
import queue1Slice from './queue1';



export default configureStore({
    reducer: {
        customersSlice: customersReducer,
        meals: mealsReducer ,
        delivery: deliveryReducer ,
        queue1Slice: queue1Slice },

});

