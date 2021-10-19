import {SET_MODAl_TITLE_ACTION_TYPE} from "../actionTypes/SetModalTitleActionType";

const initialState = {
    title: 'Multumim',
}

export default function setModalTitleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MODAl_TITLE_ACTION_TYPE:
            return {
                ...state,
                title: action.payload.title,
            }

        default:
            return state;
    }
};
