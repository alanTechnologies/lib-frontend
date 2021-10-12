import {setBookToRentOrBuy} from "../actions/BookToRentOrBuyAction";

export default function setBookToRentOrBuyDispatch(bookToRentOrBuy) {
    return dispatch => dispatch(setBookToRentOrBuy(bookToRentOrBuy))
}
