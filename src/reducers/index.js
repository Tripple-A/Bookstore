import { combineReducers } from 'redux';
import BookReducer from './books';

const rootReducer = combineReducers({
  BookReducer,
});

export default rootReducer;
