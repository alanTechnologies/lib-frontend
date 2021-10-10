import {setStudent} from "../actions/SetStudentAction";

export default function setStudentDispatch(student)
{
    return dispatch => dispatch(setStudent(student))
}
