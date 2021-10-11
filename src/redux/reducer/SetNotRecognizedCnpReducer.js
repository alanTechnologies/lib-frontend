import {SET_NOT_RECOGNIZED_CNP} from "../actionTypes/SetNotRecognizedCnpActionType";

const initialState = {
    notRecognizedCnp: false,
}
export default function setCanShowNameReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOT_RECOGNIZED_CNP:
            return {
                ...state,
                notRecognizedCnp: action.payload.notRecognizedCnp,
            }

        default:
            return state;
    }
}
