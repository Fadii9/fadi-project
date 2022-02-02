import { PayloadAction } from "@reduxjs/toolkit";

export const addToDelivery = (
    state: Record<string, object>,
    action: PayloadAction<{ delivery: string; customer: object }>
) => {
    let stateName = action.payload.delivery;
    let returnedState = { ...state };
    returnedState[stateName] = action.payload.customer;
    return returnedState;
};

export const removeFromDelivery = (
    state: object,
    action: PayloadAction<{ delivery: string }>
) => {
    let stateName = action.payload.delivery;
    let returnedState: any = { ...state };
    returnedState[stateName] = {};
    return returnedState;
};
