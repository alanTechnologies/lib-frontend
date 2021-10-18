import {SET_IS_MODAL_VISIBLE} from "../actionTypes/SetIsModalVisibleActionType";

const initialState = {
    isModalVisible: false,
}
export default function setIsModalVisibleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_MODAL_VISIBLE:
            return {
                ...state,
                isModalVisible: action.payload.isModalVisible,
            }

        default:
            return state;
    }
}
