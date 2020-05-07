import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import game from './game';
import games from './games';
import playerData from './playerData';
import playerStats from './playerStats';

const rootReducer = combineReducers({
    game,
    games,
    playerData,
    playerStats
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;