import {SET_MODAL_BODY} from "../actionTypes/SetModalBodyActionType";

export function setModalBody(body)
{
    return {
        type: SET_MODAL_BODY,
        payload:{body}
    }
}

