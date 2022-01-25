import { configureStore } from '@reduxjs/toolkit';

import customersReducer from './customers';
import mealsReducer from './meals';
import deliveryReducer from './delivery';
import queue1Slice from './queue1';



const store = configureStore({
    reducer: {
        customersSlice: customersReducer,
        meals: mealsReducer ,
        delivery: deliveryReducer ,
        queue1Slice: queue1Slice },

});

export interface States {
    id: string;
    order: any;
    slot1State: any;
    queue1State: any;
    customersState: any
    delivery1State: any
}

export type RootState = {
    [slotKey : string]: States,
}

export default store

