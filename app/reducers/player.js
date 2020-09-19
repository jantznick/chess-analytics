import { combineReducers } from "redux"

import stateModel from './model';

const data = (state = stateModel.player.data, action) => {
	switch (action.type) {
		case 'SELECT_PLAYER':
			return action.payload
		default:
			return state
	}
}

const stats = (state = stateModel.player.stats, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const games = (state = stateModel.player.games, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default combineReducers({
	data,
	stats,
	games
})