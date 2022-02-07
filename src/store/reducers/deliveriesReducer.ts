import { PayloadAction } from "@reduxjs/toolkit";
import { DeliveryState } from "../index";

type DeliveriesSlice = Record<number, DeliveryState>;
type AddToDeliveryAction = PayloadAction<{
    delivery: number;
    customer: DeliveryState;
}>;
type RemoveFromDeliveryAction = PayloadAction<{ delivery: number }>;

export const addToDelivery = (
    state: DeliveriesSlice,
    action: AddToDeliveryAction
) => {
    const stateName = action.payload.delivery;
    const returnedState = { ...state };
    returnedState[stateName] = action.payload.customer;
    return returnedState;
};

export const removeFromDelivery = (
    state: DeliveriesSlice,
    action: RemoveFromDeliveryAction
) => {
    const stateName = action.payload.delivery;
    const returnedState: DeliveriesSlice = { ...state };
    returnedState[stateName] = {};
    return returnedState;
};
