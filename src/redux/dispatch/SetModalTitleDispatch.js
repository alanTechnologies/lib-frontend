import {setModalTitle} from "../actions/SetModalTitleAction";

export default function setModalTitleDispatch(title)
{
    return dispatch => dispatch(setModalTitle(title))
}
