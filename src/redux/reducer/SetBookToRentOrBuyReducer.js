import {SET_BOOK_TO_RENT_OR_BUY} from "../actionTypes/BookToRentOrBuyActionType";

const initialState = {
    bookToRentOrBuy: null,
}

export default function setBookToRentOrBuyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOK_TO_RENT_OR_BUY:
            return {
                ...state,
                bookToRentOrBuy: action.payload.bookToRentOrBuy,
            }

        default:
            return state;
    }
};
