import {SET_NOT_RECOGNIZED_CNP} from "../actionTypes/SetNotRecognizedCnpActionType";

export function setNotRecognizedCnp(notRecognizedCnp)
{
    return {
        type: SET_NOT_RECOGNIZED_CNP,
        payload:{notRecognizedCnp}
    }
}
