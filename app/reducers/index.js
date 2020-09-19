import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import game from './game';
import games from './games';
import opening from './opening';
import gameState from './gameState';
import player from './player';
import board from './board';

//Only keep player, board, openings and endGame eventually
const rootReducer = combineReducers({
	game,
	games,
	opening,
	gameState,
	player,
	board
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;