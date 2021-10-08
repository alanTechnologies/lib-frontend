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

const rootReducer = combineReducers({
    fetchBooksReducer,
    setTypeOfSearchBookReducer,
    setBooksReducer,
})

const initialState = {};
const store = createStore(rootReducer, initialState,
    applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store ={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/available-books">
                    <HomePage/>
                </Route>
                <Redirect from="/" to="/available-books"/>
        {/*<App/>*/}
            </Switch>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
