import {SET_MODAL_BODY} from "../actionTypes/SetModalBodyActionType";

const initialState = {
    body: 'Lectura placuta',
}

export default function setModalBodyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL_BODY:
            return {
                ...state,
                body: action.payload.body,
            }
        default:
            return state;
    }
};
