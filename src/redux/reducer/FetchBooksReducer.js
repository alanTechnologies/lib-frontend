import {
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_PENDING
} from "../actionTypes/FetchBooksActionTypes";

const initialState = {
    books: [],
    loading: true,
    error: null,
}

export default function fetchBooksReducer(state=initialState, action)
{
    switch (action.type){
        case FETCH_BOOKS_PENDING:
            return{
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_BOOKS_SUCCESS:
            return{
                ...state,
                loading: false,
                books:action.payload.books,
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
