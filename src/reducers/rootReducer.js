import { combineReducers } from "redux"
import conversationsReducer from './conversationsReducer'

const reducer = combineReducers({
    conversationsReducer,
});

export default reducer;
