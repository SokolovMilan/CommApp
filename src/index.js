import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { Router, Route, Switch } from 'react-router-dom';
import history from './util/history'
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />

                </Switch>
            </div>
    </Router>
</Provider>, document.getElementById('root'));



