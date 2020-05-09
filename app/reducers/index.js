import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import game from './game';
import games from './games';
import opening from './opening';
import openings from './openings';
import playerData from './playerData';
import playerStats from './playerStats';

const rootReducer = combineReducers({
    game,
    games,
    opening,
    openings,
    playerData,
    playerStats
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;