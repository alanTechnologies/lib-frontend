import {SET_STUDENT_ACTION_TYPE} from "../actionTypes/SetStudentActionType";

const initialState = {
    student: null,
}

export default function setStudentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STUDENT_ACTION_TYPE:
            return {
                ...state,
                student: action.payload.student,
            }

        default:
            return state;
    }
};
