import {SET_CAN_SHOW_NAME} from "../actionTypes/SetCanShowNameActionType";

const initialState = {
    canShowName: false,
}
export default function setCanShowNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAN_SHOW_NAME:
            return {
                ...state,
                canShowName: action.payload.canShowName,
            }

        default:
            return state;
    }
}
