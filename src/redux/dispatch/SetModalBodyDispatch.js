import {setModalBody} from "../actions/SetModalBodyAction";

export default function setModalBodyDispatch(body)
{
    return dispatch => dispatch(setModalBody(body))
}
