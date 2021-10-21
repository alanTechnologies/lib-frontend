import {
    FETCH_RENT_BOOKS_BY_STUDENT_CNP_ERROR,
    FETCH_RENT_BOOKS_BY_STUDENT_CNP_SUCCESS,
    FETCH_RENT_BOOKS_BY_STUDENT_CNP_PENDING
} from "../actionTypes/FetchRentBooksByStudentCnpActionType";

const initialState = {
    rentBooks: [],
    loading: true,
    error: null,
}

export default function fetchRentBooksReducer(state=initialState, action)
{
    switch (action.type){
        case FETCH_RENT_BOOKS_BY_STUDENT_CNP_PENDING:
            return{
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_RENT_BOOKS_BY_STUDENT_CNP_SUCCESS:
            return{
                ...state,
                loading: false,
                rentBooks:action.payload.rentBooks,
            }

        case FETCH_RENT_BOOKS_BY_STUDENT_CNP_ERROR:
            return{
                ...state,
                error:action.payload.error,
                rentBooks:[]
            }

        default:
            return state;
    }
}
