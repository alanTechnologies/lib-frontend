import {SET_CAN_SHOW_NAME} from "../actionTypes/SetCanShowNameActionType";

export function setCanShowName(canShowName)
{
    return {
        type: SET_CAN_SHOW_NAME,
        payload:{canShowName}
    }
}
