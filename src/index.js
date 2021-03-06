
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReduxThunk from 'redux-thunk';
import fetchBooksReducer from "./redux/reducer/FetchBooksReducer";
import setTypeOfSearchBookReducer from './redux/reducer/SetTypeOfSearchBookReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import HomePage from "./pages/HomePage";
import setBooksReducer from './redux/reducer/SetBooksReducer';
import setStudentReducer from './redux/reducer/SetStudentReducer';
import RentABookPage from "./pages/RentABookPage";
import setCanShowNameReducer from './redux/reducer/SetCanShowNameReducer';
import setNotRecognizedCnpReducer from './redux/reducer/SetNotRecognizedCnpReducer';
import setBookToRentOrBuyReducer from "./redux/reducer/SetBookToRentOrBuyReducer";
import setIsModalVisibleReducer from "./redux/reducer/SetIsModalVisibleReducer";
import setModalTitleReducer from "./redux/reducer/SetModalTitleReducer";
import setModalBodyReducer from "./redux/reducer/SetModalBodyReducer";
import fetchRentBooksReducer from "./redux/reducer/FetchRentBooksByStudentCnpReducer";
import ReturnABookPage from "./pages/ReturnABookPage";
import BuyABookPage from "./pages/BuyABookPage";

const rootReducer = combineReducers({
    fetchBooksReducer,
    setTypeOfSearchBookReducer,
    setBooksReducer,
    setStudentReducer,
    setCanShowNameReducer,
    setNotRecognizedCnpReducer,
    setBookToRentOrBuyReducer,
    setIsModalVisibleReducer,
    setModalTitleReducer,
    setModalBodyReducer,
    fetchRentBooksReducer,
})

const initialState = {};
const store = createStore(rootReducer, initialState,
    applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/available-books">
                    <HomePage/>
                </Route>
                <Route exact path="/inchiriaza-o-carte">
                    <RentABookPage/>
                </Route>
                <Route exact path="/returneaza-o-carte">
                    <ReturnABookPage/>
                </Route>
                <Route exact path="/cumpara-o-carte">
                    <BuyABookPage/>
                </Route>
                <Redirect from="/" to="/available-books"/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
