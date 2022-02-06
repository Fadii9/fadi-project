import {Customer, DeliveryState, SlotState } from "..";

export const createInitialQueuesState = (statesNumber: number) => {
    const initState: Record<number, Customer[]> = {};
    for (let i = 1; i <= statesNumber; i++) {initState[i] = [];}
    return initState
}

export const createInitialSlotsState = (statesNumber: number) => {
    const initState: Record<number, SlotState> = {};
    for (let i = 1; i <= statesNumber; i++) {initState[i] = {};}
    return initState
}

export const createInitialDeliverisState = (deliveriesNumber: number) => {
    let initState: Record<number, DeliveryState> = {};
    for (let i = 1; i <= deliveriesNumber; i++) {initState[i] = {};}
    return initState
}