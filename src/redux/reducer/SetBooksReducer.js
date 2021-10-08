import {SET_BOOKS, SET_BOOKS_PENDING} from "../actionTypes/SetBooksActionType";
import {FETCH_BOOKS_ERROR, FETCH_BOOKS_PENDING} from "../actionTypes/FetchBooksActionTypes";

const initialState = {
    books: [],
    loading: true,
    error: null,
}

export default function setBooks(state= initialState, action)
{
    switch (action.type)
    {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload.books,
            }

        case SET_BOOKS_PENDING:
            return{
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_BOOKS_ERROR:
            return{
                ...state,
                error:action.payload.error,
                books:[]
            }

        default:
            return state;
    }
}
