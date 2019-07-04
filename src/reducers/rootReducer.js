import { combineReducers } from "redux"
import conversationsReducer from './conversationsReducer'
import contactsReducer from './contactsReducer'
import searchReducer from './searchReducer'
import chatReducer from './chatReducer'
import registerReducer from './registerReducer'

const reducer = combineReducers({
    conversationsReducer,
    contactsReducer,
    searchReducer,
    chatReducer,
    registerReducer,
});

export default reducer;
