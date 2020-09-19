import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import game from './game';
import games from './games';
import opening from './opening';
import gameState from './gameState';
import player from './player';

const rootReducer = combineReducers({
	game,
	games,
	opening,
	gameState,
	player
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;