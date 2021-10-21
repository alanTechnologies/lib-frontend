import {
    FETCH_RENT_BOOKS_BY_STUDENT_CNP_ERROR,
    FETCH_RENT_BOOKS_BY_STUDENT_CNP_PENDING,
    FETCH_RENT_BOOKS_BY_STUDENT_CNP_SUCCESS
} from "../actionTypes/FetchRentBooksByStudentCnpActionType";

export function fetchRentBooksByStudentCnpPending() {
    return {
        type: FETCH_RENT_BOOKS_BY_STUDENT_CNP_PENDING
    }
}

export function fetchRentBooksByStudentCnpSuccess(rentBooks) {
    return {
        type: FETCH_RENT_BOOKS_BY_STUDENT_CNP_SUCCESS,
        payload: {rentBooks},
    }
}

export function fetchRentBooksByStudentCnpError(error) {
    return {
        type: FETCH_RENT_BOOKS_BY_STUDENT_CNP_ERROR,
        payload: {error},
    }
}
