import {setIsModalVisible} from "../actions/SetIsModalVisibleAction";

export default function setIsModalVisibleDispatch(isModalVisible)
{
    return dispatch => dispatch(setIsModalVisible(isModalVisible))
}
