import React from "react";
import { render } from 'react-dom'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const composeEnhancer = compose;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)),
);

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={HomePage} />
            </div>
    </Router>
</Provider>, document.getElementById('root'));



