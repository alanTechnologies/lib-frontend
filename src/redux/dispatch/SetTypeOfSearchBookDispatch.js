import {setTypeOfSearchBooks} from "../actions/SetTypeOfSearchBookAction";

export default function setTypeOfSearchBookDispatch(typeOfSearchCondition)
{
    return dispatch => dispatch(setTypeOfSearchBooks(typeOfSearchCondition))
}
