import { PayloadAction } from "@reduxjs/toolkit";

export const addToSlot = (
    state: object,
    action: PayloadAction<{ slot: string; customer: object }>
) => {
    let stateName = action.payload.slot;
    let returnedState: any = { ...state };
    returnedState[stateName] = action.payload.customer;
    return returnedState;
};

export const emptySlot = (
    state: object,
    action: PayloadAction<{ slot: string}>
) => {
    let stateName = action.payload.slot;
    let returnedState: any = { ...state };
    returnedState[stateName] = new Object()
    return returnedState;
};
