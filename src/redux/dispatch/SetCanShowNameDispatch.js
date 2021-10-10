import {setCanShowName} from "../actions/SetCanShowNameAction";

export default function setCanShowNameDispatch(canShowName)
{
    return dispatch => dispatch(setCanShowName(canShowName))
}
