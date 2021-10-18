import {SET_IS_MODAL_VISIBLE} from '../actionTypes/SetIsModalVisibleActionType';

export function setIsModalVisible(isModalVisible)
{
    return {
        type: SET_IS_MODAL_VISIBLE,
        payload:{isModalVisible}
    }
}
