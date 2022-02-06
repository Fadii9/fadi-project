import { Customer, DeliveryState } from "../../store";

export const buildQueuesArray = (queuesState: Customer[][], queuesNumber: number) => {
    let queuesArray = [];
    for (let i = 1; i <= queuesNumber; i++) {
        queuesArray.push(queuesState[i]);
    }
    return queuesArray;
};

export const buildSlotsArray = (slotsState: Customer[] , slotsNumber: number) => {
    let slotsArray = [];
    for (let i = 1; i <= slotsNumber; i++) {
        slotsArray.push(slotsState[i]);
    }
    return slotsArray;
};

export const buildDeliveriesArray = (deliveryState: DeliveryState[] , deliveriesNumber: number) => {
    let deliveriesArray = [];
    for (let i = 1; i <= deliveriesNumber; i++) {
        deliveriesArray.push(deliveryState[i]);
    }
    return deliveriesArray;
};
