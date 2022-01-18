import { ActionType } from "../action-types/index"

interface StartOrderAction {
    type: ActionType.START_ORDER,
    payload: {}
}

interface EditOrderAction {
    type: ActionType.EDIT_ORDER,
    payload: {}
}

interface CancelOrderAction {
    type: ActionType.CANCEL_ORDER
    payload: {}

}

interface StartDeliveryAction {
    type: ActionType.START_DELIVERY
    payload: {}

}

export type Action = StartOrderAction | EditOrderAction | CancelOrderAction | StartDeliveryAction;