import axios from 'axios';
import { fetchRentBooksByStudentCnpError,
    fetchRentBooksByStudentCnpPending,
    fetchRentBooksByStudentCnpSuccess} from "../actions/FetchRentBooksByStudentCnpAction";

export default function fetchBooksDispatch(cnp){
    return dispatch => {
        dispatch(fetchRentBooksByStudentCnpPending());
        axios.get('http://localhost:8080/student-rent-book-list/'+cnp)
            .then(response => {
                dispatch(fetchRentBooksByStudentCnpSuccess(response.data));
            })
            .catch(error => dispatch(fetchRentBooksByStudentCnpError(error)))
    }
}
