import { PayloadAction } from "@reduxjs/toolkit";
import { DeliveryState } from "../index";

export type DeliveriesState = Record<number, DeliveryState>;
type AddToDeliveryAction = PayloadAction<{
    delivery: number;
    customer: DeliveryState;
}>;
type RemoveFromDeliveryAction = PayloadAction<{ delivery: number }>;

export const addToDelivery = (
  state: DeliveriesState,
  action: AddToDeliveryAction
) => {
  const stateName = action.payload.delivery;
  const returnedState = { ...state };
  returnedState[stateName] = action.payload.customer;
  return returnedState;
};

export const removeFromDelivery = (
  state: DeliveriesState,
  action: RemoveFromDeliveryAction
) => {
  const stateName = action.payload.delivery;
  const returnedState: DeliveriesState = { ...state };
  returnedState[stateName] = {};
  return returnedState;
};
