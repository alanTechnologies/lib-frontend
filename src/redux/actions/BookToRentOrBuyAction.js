import {SET_BOOK_TO_RENT_OR_BUY} from '../actionTypes/BookToRentOrBuyActionType'

export function setBookToRentOrBuy(bookToRentOrBuy)
{
    return {
        type: SET_BOOK_TO_RENT_OR_BUY,
        payload:{bookToRentOrBuy}
    }
}

