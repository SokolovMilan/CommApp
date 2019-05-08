import { combineReducers } from 'redux';

export interface RootState {
  router?: any;
}

export namespace RootState {
}


// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
});
