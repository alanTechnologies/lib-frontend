import axios from 'axios';
import { fetchBooksError,
fetchBooksPending,
fetchBooksSuccess} from "../actions/FetchBooksAction";

export default function fetchBooksDispatch(){
    return dispatch => {
        dispatch(fetchBooksPending());
        axios.get('http://localhost:8080/available-books')
            .then(response => {
                dispatch(fetchBooksSuccess(response.data));
            })
            .catch(error => dispatch(fetchBooksError(error)))
    }
}
