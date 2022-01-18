import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = {};

const reducer = (state: {} = initialState, action: Action): { } => {
    switch (action.type){
        case ActionType.START_ORDER:
            return state;
        case ActionType.EDIT_ORDER:
            return state;
        case ActionType.CANCEL_ORDER:
            return state;
        case ActionType.START_DELIVERY:
            return state;
        default:
            return state
    }
}

export default reducer