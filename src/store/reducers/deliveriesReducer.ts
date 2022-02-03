import { PayloadAction } from "@reduxjs/toolkit";
import {Customer, DeliveryState } from "../index";

export const addToDelivery = (
    state: Record<number, DeliveryState>,
    action: PayloadAction<{ delivery: number; customer: DeliveryState }>
) => {
    const stateName = action.payload.delivery;
    const returnedState = { ...state };
    returnedState[stateName] = action.payload.customer;
    return returnedState;
};

export const removeFromDelivery = (
    state: Record<number, DeliveryState>,
    action: PayloadAction<{ delivery: number }>
) => {
    const stateName = action.payload.delivery;
    const returnedState: Record<number, DeliveryState> = { ...state };
    returnedState[stateName] = {};
    return returnedState;
};
