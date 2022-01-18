import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const startOrder = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.START_ORDER,
            payload: {}
        })
    }
}

export const editOrder = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.EDIT_ORDER,
            payload: {}
        })
    }
}

export const cancelOrder = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CANCEL_ORDER,
            payload: {}
        })
    }
}

export const startDelivery = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.START_DELIVERY,
            payload: {}
        })
    }
}

