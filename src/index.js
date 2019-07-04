import React from "react";
import { render } from 'react-dom'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ioListeners from './util/ioListener';
import {register, getRegisterId} from "./actions/register";

const composeEnhancer = compose;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)),
);

//store.dispatch(register());
store.dispatch(getRegisterId());

ioListeners.listenForChat();
ioListeners.listenForNewMessage(store);
ioListeners.messageConfirmed();
ioListeners.listenForError();
ioListeners.listenForMessageConfirmation();

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={HomePage} />
            </div>
    </Router>
</Provider>, document.getElementById('root'));



