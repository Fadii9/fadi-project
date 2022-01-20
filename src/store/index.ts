import { configureStore } from '@reduxjs/toolkit';

import customersReducer from './customersSlice';
import mealsReducer from './mealsSlice';
import deliveryReducer from './deliverySlice';



const store = configureStore({
    reducer: { customers: customersReducer, meals: mealsReducer },
});

export default store;