import {SET_MODAl_TITLE_ACTION_TYPE} from "../actionTypes/SetModalTitleActionType";

export function setModalTitle(title)
{
    return {
        type: SET_MODAl_TITLE_ACTION_TYPE,
        payload:{title}
    }
}

