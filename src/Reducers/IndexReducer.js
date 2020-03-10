import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import BooksReducer from './BooksReducer.js';

export default combineReducers({
    BooksReducer,
    routing: routerReducer
});
