import {Customer, DeliveryState, SlotState } from "..";
import { queuesNumber } from "../../data/stationsNumber";

export const createInitialQueuesState = (queuesNumber: number) => {
    const initState: Record<number, Customer[]> = {};
    for (let i = 1; i <= queuesNumber; i++) {initState[i] = [];}
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

export const cancelQueueFunction = (state: Record<number, Customer[]>, queueNumber: number) => {
    let returnedState = state;
    let customersInCanceledQueue: Customer[] = state[queueNumber];
    delete returnedState[queueNumber]
    const initState: Record<number, Customer[]> = {};
    let temporaryQueues: Customer[][] = []
    for (let i = 0; i < queuesNumber - 1; i++) {temporaryQueues[i] = []}
    for (let i = 0 ; i < customersInCanceledQueue.length ; i++){
        const k = i < temporaryQueues.length? i : i - temporaryQueues.length
        temporaryQueues[k].push(customersInCanceledQueue[i])
    }
    for (let i = 1; i <= queuesNumber - 1; i++) {
        if (i !== queueNumber){
            returnedState[i] = [...returnedState[i], ...temporaryQueues[i - 1]]
        } else {
            returnedState[i + 1] = [...returnedState[i + 1], ...temporaryQueues[i - 1]]        }

    }
    return returnedState
}