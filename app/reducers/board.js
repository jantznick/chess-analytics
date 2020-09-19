import { combineReducers } from "redux"

import stateModel from './model';

const current = (state = stateModel.board.current, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const state = (state = stateModel.board.state, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default combineReducers({
	current,
	state
})
