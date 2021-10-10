import {SET_STUDENT_ACTION_TYPE} from "../actionTypes/SetStudentActionType";

export function setStudent(student)
{
    return {
        type: SET_STUDENT_ACTION_TYPE,
        payload:{student}
    }
}

