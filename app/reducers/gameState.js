import { combineReducers } from 'redux'

const initialState = {
	opening: [],
	closing: []
}

const openings = (state = initialState.opening, action) => {
	switch (action.type) {
		case 'SELECT_OPENINGS':
			return action.payload
		default:
			return state
	}
}

const closings = (state = initialState.closing, action) => {
	switch (action.type) {
		case 'SELECT_CLOSING':
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	openings,
	closings
})