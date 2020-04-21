import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import game from './game';
import games from './games';

const rootReducer = combineReducers({
    game,
    games
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;