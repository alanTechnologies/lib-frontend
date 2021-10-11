import {setNotRecognizedCnp} from "../actions/SetNotRecognizedCnpAction";

export default function setNotRecognizedCnpDispatch(notRecognizedCnp)
{
    return dispatch => dispatch(setNotRecognizedCnp(notRecognizedCnp))
}
