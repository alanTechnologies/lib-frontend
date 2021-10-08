import {SET_TYPE_OF_SEARCH_BOOK} from "../actionTypes/SetTypeOfSearchBookActionType";

const initialState = {
    typeOfSearchCondition: 'Title',
}

export default function setTypeOfSearchBookCondition(state= initialState, action)
{
    switch (action.type)
    {
        case SET_TYPE_OF_SEARCH_BOOK:
            return {
                ...state,
                typeOfSearchCondition: action.payload.typeOfSearchCondition,
            }

        default:
            return state;
    }
}
