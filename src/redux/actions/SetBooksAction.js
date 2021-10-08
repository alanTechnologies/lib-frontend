import {SET_BOOKS} from "../actionTypes/SetBooksActionType";

export function setBooks(books)
{
    return {
        type: SET_BOOKS,
        payload:{books}
    }
}
