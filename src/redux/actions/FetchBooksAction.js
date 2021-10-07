import { FETCH_BOOKS_ERROR, FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS} from "../actionTypes/FetchBooksActionTypes";

export function fetchBooksPending(){
    return {
        type: FETCH_BOOKS_PENDING
    }
}

export function fetchBooksSuccess(books){
    return{
        type: FETCH_BOOKS_SUCCESS,
        payload: {books},
    }
}

export function fetchBooksError(error)
{
    return{
        type:FETCH_BOOKS_ERROR,
        payload: {error},
    }
}
