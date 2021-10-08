import {setBooks} from "../actions/SetBooksAction";

export default function setBooksDispatch(books)
{
    return dispatch => dispatch(setBooks(books))
}
