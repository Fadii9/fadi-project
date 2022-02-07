import {Customer, DeliveryState, SlotState } from "..";
import { queuesNumber } from "../../data/stationsNumber";
import { DeliveriesState } from "../reducers/deliveriesReducer";
import { QueuesState } from "../reducers/queueReducer";
import { SlotsState } from "../reducers/slotsReducer";

export const createInitialQueuesState = (queuesNumber: number) => {
    const initState: QueuesState = {};
    for (let i = 1; i <= queuesNumber; i++) initState[i] = [];
    return initState
}

export const createInitialSlotsState = (statesNumber: number) => {
    const initState: SlotsState = {};
    for (let i = 1; i <= statesNumber; i++) initState[i] = {}
    return initState
}

export const createInitialDeliverisState = (deliveriesNumber: number) => {
    let initState: DeliveriesState = {};
    for (let i = 1; i <= deliveriesNumber; i++) initState[i] = {}
    return initState
}

export const cancelQueueFunction = (state: QueuesState, queueNumber: number) => {
    const returnedState = state;
    const customersInCanceledQueue: Customer[] = state[queueNumber];
    const temporaryQueues: Customer[][] = []
    delete returnedState[queueNumber]

    for (let i = 0; i < queuesNumber - 1; i++) temporaryQueues[i] = []
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
