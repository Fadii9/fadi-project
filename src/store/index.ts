import { configureStore } from '@reduxjs/toolkit';

import customersReducer from './customers';
import mealsReducer from './meals';
import deliveryReducer from './delivery';



export default configureStore({
    reducer: {
        customers: customersReducer,
        meals: mealsReducer ,
        delivery: deliveryReducer },
});

