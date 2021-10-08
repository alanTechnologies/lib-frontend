import {SET_TYPE_OF_SEARCH_BOOK} from "../actionTypes/SetTypeOfSearchBookActionType";

export function setTypeOfSearchBooks(typeOfSearchCondition)
{
    return {
        type: SET_TYPE_OF_SEARCH_BOOK,
        payload:{typeOfSearchCondition}
    }
}
