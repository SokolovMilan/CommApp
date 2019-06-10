import { combineReducers } from "redux"
import conversationsReducer from './conversationsReducer'
import contactsReducer from './contactsReducer'
import searchReducer from './searchReducer'
import chatReducer from './chatReducer'

const reducer = combineReducers({
    conversationsReducer,
    contactsReducer,
    searchReducer,
    chatReducer,
});

export default reducer;
